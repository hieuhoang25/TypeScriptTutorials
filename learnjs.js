// filter 
const users = [
    {
        id: 1,
        email: "hieuhoang251001td@gmail.com",
        first_name: "Hieu",
        last_name: "Hoang",
        tags: ['AAA', 'BBB']
    },
    {
        id: 2,
        email: "kien123td@gmail.com",
        first_name: "Kien",
        last_name: "Nguyen",
        tags: ['AAA', 'BBB']
    },
    {
        id: 3,
        email: "tungtran@gmail.com",
        first_name: "Tung",
        last_name: "Tran"
    },
    {
        id: 4,
        email: "tuongto@gmail.com",
        first_name: "Tuong",
        last_name: "To",
        tags: ['AAA', 'CCC']
    },
    {
        id: 5,
        email: "cuongng@gmail.com",
        first_name: "Cuong",
        last_name: "Nguyen",
        tags: ['AAA', 'DDD']
    },
]
const filterUser = users.filter((user)=>{
    return user.first_name  === "Hieu" || user.first_name === "Tuong"
})
// find
const findUser =  users.find((user)=>{
    return user.first_name === "Hieu"
})
console.log(filterUser) // []
console.log(findUser) // first value

// map 
const custom = users.map((user)=>{
    return  {
        ...user,
        last_name : `${user.last_name}Edited `
    }
    
})
console.log(custom)  //array of email
// some  ==> some items are availible in that array so return true
// users.filter(user => {
//   return user.tags.some(tag => tag ==='BBB')
// })
// every ==> every item is availible in that array so return true
// users.every(user => {
//     return user.tags.some(tag => tag ==='BBB')
// })
// reduce 
const customUsers = users.reduce((acc, cur)=>{
    return {...acc, [cur.email]: cur}
}, {}) // acc = {} -> acc is inital value
const customUsersArray = users.reduce((acc, cur)=>{ 
    return acc += cur.id
}, 0) //acc = 0
console.log(customUsers)
console.log(customUsersArray)

users.includes(user => user.id === 1)
const name = 'javascript';
console.log(Array.from(name))//Creates an array from an iterable object.
const nums = Array.of(1,2,3,4)
Array.prototype.entries()
