import status from 'statuses'

const DEFAULT_STATUS = 500
const DEFAULT_MESSAGE = status(DEFAULT_STATUS)

export const sendError = (res, code) => {
  try {
    res.status(code).send(status(code))
  } catch (e) {
    res.status(DEFAULT_STATUS).send(DEFAULT_STATUS)
  }
}
