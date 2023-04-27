const handler = async event => {
  return {
    statusCode: 200,
    body: 'Hello World!',
  }
}

export const main = handler
