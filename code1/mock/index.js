// import mockJS from 'mockjs'
const mockJS = require('mockjs')

const userList = mockJS.mock({
    "data|100": [
        {
            name: "@cname",
            ename: "@name",
            "id|+1": 1,
            date: "@date"
        }
    ]
})
module.exports = [
    {
        url: '/api/users',
        method: "post",
        response: ({ query }) => {
            return {
                code: 200,
                msg: 'ok',
                data: userList.data,
            }
        },
    }
]