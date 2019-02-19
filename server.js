import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import views from 'koa-views'
import path from 'path'
import Demo from './app/main'
const app = new Koa()


app.use(require('koa-static')(__dirname + '/public'))
app.use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))

// response
app.use(async ctx => {
  let str = renderToString(<Demo />)
  console.log(str)
  await ctx.render('index', {
    root: str
  })
})

app.listen(3000)
console.log("系统启动，端口：3000")