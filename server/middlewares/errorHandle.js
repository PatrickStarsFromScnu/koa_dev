const errorHandle = (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        error: err.message
      }
    } else {
      throw err
    }
  })
}

export default errorHandle
