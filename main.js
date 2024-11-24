'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(serve('js')); 
app.use(bodyParser());

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = await fs.readFileSync('index.html', 'utf8');
});

router.post('/execute-python', async (ctx) => {
    // 获取从前端发送过来的Python代码
    const pythonCode = ctx.request.body.pythonCode;

    // 这里只是模拟执行代码并返回结果，实际应用中需要真正执行Python代码并获取准确结果
    const result = `Python代码执行成功`;

    ctx.body = {
        consoleOutput: result
    };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

//已修改