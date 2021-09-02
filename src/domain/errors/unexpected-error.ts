export class UnexpectedError extends Error {
  constructor () {
    super('Algo de arrado ocorreu. Tente novamente em breve')
    this.name = 'UnexpectedError'
  }
}
