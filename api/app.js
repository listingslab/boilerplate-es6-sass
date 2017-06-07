import Koa from 'koa'

const app = new Koa();

const port = 1975;

// response
app.use(async (ctx) => {
  ctx.body = 'koa2-boilerplate'
})

app.listen(port, () => console.log(`server started http://localhost:${port}`))

export default app

