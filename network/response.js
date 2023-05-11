export const success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: '',
    body: message
  })
}

export const error = (req, res, error, status) => {
  res.status(status || 500).send({
    error,
    body: ''
  })
}
