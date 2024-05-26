const client = require('./client')

const init = async () => {
    // await client.set('msg:4', 'hey from node')
    await client.expire('msg:1', 10) //after 10 secs the key gets expired
    const res = await client.get('msg:1')
    console.log(res)
}

init()