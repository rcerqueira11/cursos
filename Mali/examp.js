const path = require('path')
const Mali = require('mali')

const PROTO_PATH = path.resolve(__dirname, '../protos/helloworld.proto')

async function sayHello(ctx) {
    ctx.res = { message: 'Hello '.concat(ctx.req.name) }
}

function main () {
    const app = Mali(PROTO_PATH)
    app.use({sayHello})
    app.start('0.0.0.0:50051')
}

main ()