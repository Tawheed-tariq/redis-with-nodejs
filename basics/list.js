const client = require('./client')

async function init(){
    // await client.lpush('messages', 9)
    // await client.rpush('messages', 7)
    // await client.lpush('messages', 3)
    // const res = await client.rpop('messages')
    const res = await client.lrange('messages', 0, -1)
    console.log(res)
}

init()