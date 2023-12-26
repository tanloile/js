// Mảng

// Yêu cầu tạo 1 tập hợp các số 1,3,7,11,2
// let mang = [1,3,7,11,2]
// for (let i = 0; i < mang.length; i = i +2){
//     console.log('Phần tử thứ'+[i] , mang[i])
// }

// for(let i = 2; i < 11; i = i +1) {
//     console.log("Số i = ", i)
// };

let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// câu a

for (let i = 0; i <arr.length; i++) {
    console.log("Phần tử thứ %s: %s", i, arr[i])
}
console.log("Tong: ")
// câu b
// let tong = 0
// for (let i = 0; i <arr.length; i++) {
//     tong = tong + arr[i]
// }
// console.log("Tổng các phần tử là: ",tong)

// // Câu c
// let max = arr[0]
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log("Phần tử lớn nhất là: ",max)

// let min = arr[0]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log("Phần tử nhỏ nhất là: ",min)

// Câu d
let soPhanTuCuaMang = arr.length
let trungBinhCong = tong / soPhanTuCuaMang
console.log("Trung bình cộng = ", trungBinhCong)

// Câu e