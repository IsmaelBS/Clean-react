import { HttpPostClientSpy } from '@/../tests/data/test'
import { mockAccountModel, mockAddAcount } from '@/../tests/domain/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/usecases'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  const remoteAddAccount = new RemoteAddAccount(url, httpPostClientSpy)
  httpPostClientSpy.url = url
  return {
    sut: remoteAddAccount,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.add(mockAddAcount())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    const params = mockAddAcount()
    await sut.add(params)
    expect(httpPostClientSpy.body).toBe(params)
  })

  test('Should throw EmailInUseError when HttpPostClient statusCode is 403', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.forbiden
    }
    const promise = sut.add(mockAddAcount())
    await expect(promise).rejects.toThrow(new EmailInUseError())
  })

  test('Should throw an UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }

    const addAccountParams = mockAddAcount()
    const promise = sut.add(addAccountParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw an UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const addAccountParams = mockAddAcount()
    const promise = sut.add(addAccountParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw an UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const addAccountParams = mockAddAcount()
    const promise = sut.add(addAccountParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel when HttpPostClient returns 200', async () => {
    const mockAccount = mockAccountModel()
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockAccount
    }

    const addAccountParams = mockAddAcount()
    const accountModel = await sut.add(addAccountParams)
    expect(accountModel).toEqual(mockAccount)
  })
})
