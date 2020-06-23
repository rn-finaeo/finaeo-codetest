import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

export const app = new Koa()
const router = new Router()

router.get('/', async (ctx: Koa.Context) => {
  const name = ctx.query.name || 'stranger'
  ctx.body = {
    message: `Hello, ${name}!`,
  }
})

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
