///--------UNION TYPE AND ENUM TYPE
// union

// sẽ có 2 kiểu dữ liệu string number;
let size : string | number;

size = "hello",
size = "30"

// size = true;//error

let size1 : string | string[]

//enum
enum Colors{
    RED, GREEN, BLUE
}
//bắt đầu từ 0 -> tăng dần
let color = Colors.BLUE ;
enum Role{
    ADMIN= "admin", User= "user"
}
let role = Role.ADMIN// = >trả về admin


