export const makeApiFactory = (path: string): string => `process.env.API_URL${path}`
