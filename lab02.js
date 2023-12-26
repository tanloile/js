function tinhLuong(luong) {
    let thue = 0
    let net = 0
    let heSo = 0
    if (luong > 20) {
        heSo = 0.2
    }
    else if (luong > 15 && luong <= 20) {
        heSo = 0.18
    }
    else if (luong >= 8 && luong <= 15) {
        heSo = 0.15
    }
    else if (luong < 8) {
        heSo = 0
    }

    t = luong * heSo
    net = luong - t
    console.log("Thue thu nhap: ", t)
    console.log("Luong net: ",net)
}

tinhLuong(40)

    // câu C
function xepHangHocSinh(diemKT, diemGiuaKi,diemCuoiKi){
    let diemTB = (diemKT + diemGiuaKi + diemCuoiKi) / 3
    if (diemTB >= 9 ) {
        console.log("Xep hang A")
    }
    else if (diemTB >= 7 && diemTB < 9) {
        console.log("Xep hang B")
    }
    else if (diemTB >= 5 && diemTB < 7) {
        console.log("Xep hang C")
    }
    else if (diemTB < 5) {
        console.log("Xep hang F")
    }
}

xepHangHocSinh(10, 10, 10)
xepHangHocSinh(10, 5, 8)
xepHangHocSinh(5, 4, 6)


function tinhGiaCuoc(t) {
    let cuocHoaMang = 25000
    let cuocGoi = 0

    if (t > 0 && t <= 50) {
        cuocGoi = t * 600
    }
    else if ( t > 50 && t <= 200) {
        cuocGoi = 50 * 600 + (t-50) * 400
    }
    else if (t > 200) {
        cuocGoi = 50 * 600 + 150 * 400 + (t-200) * 200
    }

    let tongTien = cuocHoaMang + cuocGoi

    console.log("Tong tien phai tra: ",tongTien)
}

