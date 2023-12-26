console.log('Bai 1a')
function inThangTrongNam(n) {
    if (n<1 || n > 12) {
        console.log('Tham so khong chinh xac')
    }
    else {
        switch(n) {
            case 1: {
                console.log('Day la thang 1')
                break
            }
            case 2: {
                console.log('Day la thang 2')
                break
            }
            case 3: {
                console.log('Day la thang 3')
                break
            }
            case 4: {
                console.log('Day la thang 4')
                break
            }
            case 5: {
                console.log('Day la thang 5')
                break
            }
            case 6: {
                console.log('Day la thang 6')
                break
            }
            case 7: {
                console.log('Day la thang 7')
                break
            }
            case 8: {
                console.log('Day la thang 8')
                break
            }
            case 9: {
                console.log('Day la thang 9')
                break
            }
            case 10: {
                console.log('Day la thang 10')
                break
            }
            case 11: {
                console.log('Day la thang 11')
                break
            }
            case 12: {
                console.log('Day la thang 12')
                break
            }
        }
    }
}

inThangTrongNam(-1)

console.log('Bai 1b')
let diem = 65
switch(true){
    case diem < 60 : {
        console.log('Hạng F')
        break
    }
    case diem >= 60 && diem <= 69: {
        console.log('Hạng D')
        break
    }
    case diem >= 70 && diem <= 79: {
        console.log('Hạng C')
        break
    }
    case diem >= 80 && diem <= 89: {
        console.log('Hạng B')
        break
    }
    case diem >= 90 && diem <= 100: {
        console.log('Hạng A')
        break
    }
    default: {
        console.log('Số bạn nhập không hợp lệ')
    }
}

console.log('Bai 1c')
let sothu1 = 6
let sothu2 = 3
let phepcong = sothu1 + sothu2
let pheptru = sothu1 - sothu2 
let phepnhan = sothu1 * sothu2 
let phepchia = sothu1 / sothu2
function phepToan(n){
    switch(n) {
        case 1: {
            console.log('Tổng của 2 số = ' + phepcong)
            break
        }
        case 2: {
            console.log('Hiệu của 2 số = ' + pheptru)
            break
        }
        case 3: {
            console.log('Tich của 2 số = ' + phepnhan)
            break
        }
        case 4: {
            console.log('Thương của 2 số = ' + phepchia)
            break
        }
        default: {
            console.log('Số bạn nhập không hợp lệ')
        }
    }
}
phepToan(2)

console.log('Bài 2a')

function soNgayTrongThang(n){
    switch(n){
        case 1: 
    }
}

function xacDinhMuaTrongNam(n){
    switch(true) {
        case n>=3 && n<=5: {
            console.log('Mua He')
        }
    }
}

function xacDinhDoTuoiXemPhim(theLoại, tuoi) {
    switch(theLoại) {
        case 'HD': {
            case n>=3 &&  n
        }
    }
}


