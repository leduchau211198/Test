var	Dog=[
    {name: "Mun", type:"Husky",age:2,weight:3},
    {name: "KiKi", type:"shiba",age:6,weight:5},
    {name: "hulk", type:"Pug",age:3,weight:7}
];
function displayInfor(Dog){
    console.log("\n");
    Dog.map(function(obj){
        console.log("Tên:" + obj.name  + "  Giống:" + obj.type + "  Tuổi:" + obj.age + "  cân nặng :" + obj.weight);//hiển thị các Dog trong mảng
    });
};
displayInfor(Dog);
//Thêm Dog  vào đầu  bảng
Dog.unshift( {name: "Leo", type:"piPull",age:3,weight:8});
displayInfor(Dog);

// Thêm Dog vào cuối trong mảng
Dog.push({name: "Cun",type:"cho ta",age:6, weight:5});
displayInfor(Dog);

// Xóa Dog ở đầu mảng
console.log(Dog.shift());
displayInfor(Dog);
// Xóa Dog Cuối mảng
console.log(Dog.pop());
displayInfor(Dog);