function formdndk() {
    var x = document.getElementById("form");
    var dmm = document.getElementsByClassName("backgroundBlack");
    var dmm2 = document.getElementById("userlog");
    dmm2.style.color = "black";
    dmm[0].style.display = "block";
    x.style.display = "block";

}
function formexit() {
    var x = document.getElementById("form");
    var dmm = document.getElementsByClassName("backgroundBlack");
    var dmm2 = document.getElementById("userlog");
    dmm2.style.color = "white";
    dmm[0].style.display = "none";
    x.style.display = "none";
}

// ------------------------------- ASM 2 -------------------------------
// 1. thay hover:css bằng sự kiện khác
function inhover_menu(x) {
    x.style.color = "black";
    x.style.transition = "all 500ms";
}
function outhover_menu(x) {
    x.style.color = "white";
    x.style.transition = "all 800ms";
}
function inhover_box4(x) {
    x.style.boxShadow = "#7e85bb 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    x.style.transition = "all 300ms";
    x.style.transform = "scale(1.03)";
}
function outhover_box4(x) {
    x.style.boxShadow = "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em";
    x.style.transition = "all 900ms";
    x.style.transform = "scale(1.0)";
}

// var box4 = document.querySelectorAll(".box4-child");
// for(var i = 0 ; i < box4.length ; i++) {
//     box4[i].children[0].children[0].onmouseover = function(e) {
//         e.target.style.boxShadow ="#7e85bb 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
//         e.target.style.transition = "all 200ms";
//         e.target.style.transform = "scalex(1.1556)";

//     }
//     box4[i].children[0].onmouseout = function(e) {
//         e.target.style.boxShadow = "none";
//         e.target.style.transition = "all 900ms";
//         e.target.style.transform = "scale(1.0)";

//     }
// }



// 2. Slider va hieu ung album anh

var imgSlider = [];
for (let i = 0; i < 4; i++) {
    imgSlider[i] = new Image();
    imgSlider[i].src = "images/home/banner_slider/" + i + ".jpg";
}
var index = 0;
var anh = document.getElementById("slideshow");

function first() {
    index = 0;
    hover(index);
    anh.src = imgSlider[index].src;

}

function last() {
    index = imgSlider.length - 1;
    hover(index);
    anh.src = imgSlider[index].src;
}

function next() {
    ++index;
    if (index >= imgSlider.length) {
        index = 0;
    }
    hover(index);
    anh.src = imgSlider[index].src;
}

function prev() {
    --index;
    if (index < 0) {
        index = imgSlider.length - 1;
    }
    hover(index);
    anh.src = imgSlider[index].src;
}

function slide23(x) {
    index = x;
    hover(index);
    anh.src = imgSlider[index].src;
}

function hover(index) {
    switch (index) {
        case 0:
            var btton = document.getElementById("b" + index);
            var conlai = document.querySelectorAll(".banner-slide-button button");
            for (let i = 0; i < conlai.length; i++) {
                conlai[i].style.border = "3px solid white";
            }
            btton.style.border = "3px solid #6e739c";
            break;
        case 1:
            var btton = document.getElementById("b" + index);
            var conlai = document.querySelectorAll(".banner-slide-button button");
            for (let i = 0; i < conlai.length; i++) {
                conlai[i].style.border = "3px solid white";
            }
            btton.style.border = "3px solid #6e739c";
            break;
        case 2:
            var btton = document.getElementById("b" + index);
            var conlai = document.querySelectorAll(".banner-slide-button button");
            for (let i = 0; i < conlai.length; i++) {
                conlai[i].style.border = "3px solid white";
            }
            btton.style.border = "3px solid #6e739c";
            break;
        case 3:
            var btton = document.getElementById("b" + index);
            var conlai = document.querySelectorAll(".banner-slide-button button");
            for (let i = 0; i < conlai.length; i++) {
                conlai[i].style.border = "3px solid white";
            }
            btton.style.border = "3px solid #6e739c";
            break;
        default:
            break;
    }
}
function imgauto() {
    hover(index);
    anh.setAttribute("src", imgSlider[index].src);
    ++index;
    //reset
    if (index == imgSlider.length) {
        index = 0;
    }
}
setInterval(imgauto, 5000);

setInterval(() => {
    document.querySelector(".giohangmini a").style.transform = "scale(1.025)";
    setTimeout(() => {
        document.querySelector(".giohangmini a").style.transform = "scale(1)";
    }, 500);
}, 1000);

function hienbttsld(x) {
    btt = x.children;
    btt[4].style.display = "block";
    btt[5].style.display = "block";
}
function anbttsld(x) {
    btt = x.children;
    btt[4].style.display = "none";
    btt[5].style.display = "none";
}

function hoversp(x) {
    var asd = document.getElementById("sp" + x);
    var bsc = document.querySelectorAll(".main-sanpham-box4-children");
    for (let i = 0; i < 4; i++) {
        bsc[i].style.border = "1px solid gainsboro";
    }
    asd.style.border = "1px solid #7e85bb";
}

// album 0
var mainAnhSp = document.getElementsByClassName("boxsanpham-img0");
function hiensp(index_sp) {
    hoversp(index_sp);
    mainAnhSp[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}

// album 1
var mainAnhSp1 = document.getElementsByClassName("boxsanpham-img1");
function hiensp1(index_sp) {
    hoversp(index_sp);
    mainAnhSp1[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 2
var mainAnhSp2 = document.getElementsByClassName("boxsanpham-img2");
function hiensp2(index_sp) {
    hoversp(index_sp);
    mainAnhSp2[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 3
var mainAnhSp3 = document.getElementsByClassName("boxsanpham-img3");
function hiensp3(index_sp) {
    hoversp(index_sp);
    mainAnhSp3[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 4
var mainAnhSp4 = document.getElementsByClassName("boxsanpham-img4");
function hiensp4(index_sp) {
    hoversp(index_sp);
    mainAnhSp4[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 5
var mainAnhSp5 = document.getElementsByClassName("boxsanpham-img5");
function hiensp5(index_sp) {
    hoversp(index_sp);
    mainAnhSp5[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 6
var mainAnhSp6 = document.getElementsByClassName("boxsanpham-img6");
function hiensp6(index_sp) {
    hoversp(index_sp);
    mainAnhSp6[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 7
var mainAnhSp7 = document.getElementsByClassName("boxsanpham-img7");
function hiensp7(index_sp) {
    hoversp(index_sp);
    mainAnhSp7[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 8
var mainAnhSp8 = document.getElementsByClassName("boxsanpham-img8");
function hiensp8(index_sp) {
    hoversp(index_sp);
    mainAnhSp8[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 10
var mainAnhSp10 = document.getElementsByClassName("boxsanpham-img10");
function hiensp10(index_sp) {
    hoversp(index_sp);
    mainAnhSp10[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 11
var mainAnhSp11 = document.getElementsByClassName("boxsanpham-img11");
function hiensp11(index_sp) {
    mainAnhSp11[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 12
var mainAnhSp12 = document.getElementsByClassName("boxsanpham-img12");
function hiensp12(index_sp) {
    mainAnhSp12[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}
// album 13
var mainAnhSp13 = document.getElementsByClassName("boxsanpham-img13");
function hiensp13(index_sp) {
    mainAnhSp13[0].style.backgroundImage = "url(./images/chitietsanpham/mangimg/" + index_sp + ".jpg)";
}

// form validation
// login
var dmm = document.querySelector(".formlogin");
var dkmm = document.querySelector(".formregister");
var loginInput = dmm.getElementsByTagName("input");
var registerInput = dkmm.getElementsByTagName("input");
var thongBaoLoi = document.querySelectorAll(".boxthongbao");

function submitlogin() {
    if (thongBaoLoi[0].style.display == "none" && thongBaoLoi[1].style.display == "none") {
        document.querySelector(".loginThanhcong").style.display = "block";
    }
    if (loginInput[0].value.length == 0) {
        thongBaoLoi[0].style.display = "block";
        loginInput[0].style.border = "2px solid red";
        thongBaoLoi[0].innerText = "Vui lòng nhập username!";
    } else {
        thongBaoLoi[0].style.display = "none";
        loginInput[0].style.border = "2px solid #57b736";
    }

    if (loginInput[1].value.length == 0) {
        thongBaoLoi[1].style.display = "block";
        loginInput[1].style.border = "2px solid red";
        thongBaoLoi[1].innerText = "Vui lòng nhập mật khẩu!";
    } else {
        thongBaoLoi[1].style.display = "none";
        loginInput[1].style.border = "2px solid #57b736";
    }
}
// REGISTER
function submitregister() {
    if (thongBaoLoi[2].style.display == "none" && thongBaoLoi[3].style.display == "none" && thongBaoLoi[4].style.display == "none" && thongBaoLoi[5].style.display == "none") {
        var registerchild = document.querySelector(".loginThanhcong").children;
        registerchild[1].innerText = "ĐĂNG KÝ THÀNH CÔNG!";
        document.querySelector(".loginThanhcong").style.display = "block";
    }
    if (registerInput[0].value.length == 0) {
        thongBaoLoi[2].style.display = "block";
        registerInput[0].style.border = "2px solid red";
        thongBaoLoi[2].innerText = "Vui lòng nhập username!";
    } else {
        thongBaoLoi[2].style.display = "none";
        registerInput[0].style.border = "2px solid #57b736";
    }

    if (registerInput[1].value.length == 0) {
        thongBaoLoi[3].style.display = "block";
        registerInput[1].style.border = "2px solid red";
        thongBaoLoi[3].innerText = "Số điện thoại không được bỏ trống!";
    } else if ((!reg_sdt.test(registerInput[1].value)) || (registerInput[1].value.length >= 11)) {
        thongBaoLoi[3].style.display = "block";
        registerInput[1].style.border = "2px solid red";
        thongBaoLoi[3].innerText = "Số điện thoại không đúng định dạng!";
    } else {
        thongBaoLoi[3].style.display = "none";
        registerInput[1].style.border = "2px solid #57b736";
    }

    if (registerInput[2].value.length == 0) {
        thongBaoLoi[4].style.display = "block";
        registerInput[2].style.border = "2px solid red";
        thongBaoLoi[4].innerText = "Vui lòng nhập mật khẩu!";
    } else {
        thongBaoLoi[4].style.display = "none";
        registerInput[2].style.border = "2px solid #57b736";
    }

    if (registerInput[3].value.length == 0) {
        thongBaoLoi[5].style.display = "block";
        registerInput[3].style.border = "2px solid red";
        thongBaoLoi[5].innerText = "Vui lòng nhập lại mật khẩu!";
    } else if (!(registerInput[3].value === registerInput[2].value)) {
        thongBaoLoi[5].style.display = "block";
        thongBaoLoi[5].innerText = "Mật khẩu nhập lại không khớp!";
        registerInput[3].style.border = "2px solid red";
    } else {
        thongBaoLoi[5].style.display = "none";
        registerInput[3].style.border = "2px solid #57b736";
    }

}

loginInput[0].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[0].style.display = "block";
        thongBaoLoi[0].innerText = "Vui lòng nhập username!";
        loginInput[0].style.border = "2px solid red";
    } else {
        loginInput[0].style.border = "2px solid #57b736";
        thongBaoLoi[0].style.display = "none";
    }
}

loginInput[1].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[1].style.display = "block";
        thongBaoLoi[1].innerText = "Vui lòng nhập mật khẩu!";
        loginInput[1].style.border = "2px solid red";
    } else {
        loginInput[1].style.border = "2px solid #57b736";
        thongBaoLoi[1].style.display = "none";
    }
}

registerInput[0].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[2].style.display = "block";
        thongBaoLoi[2].innerText = "Vui lòng nhập username!";
        registerInput[0].style.border = "2px solid red";
    } else {
        registerInput[0].style.border = "2px solid #57b736";
        thongBaoLoi[2].style.display = "none";
    }
}

var reg_sdt = /[0-9]{10}/;
registerInput[1].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[3].style.display = "block";
        thongBaoLoi[3].innerText = "Số điện thoại không được bỏ trống!";
        registerInput[1].style.border = "2px solid red";
    } else if ((!reg_sdt.test(kiemTra)) || (kiemTra.length >= 11)) {
        thongBaoLoi[3].innerText = "Số điện thoại không đúng định dạng!";
        thongBaoLoi[3].style.display = "block";
        registerInput[1].style.border = "2px solid red";
    } else {
        registerInput[1].style.border = "2px solid #57b736";
        thongBaoLoi[3].style.display = "none";
    }
}

registerInput[2].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[4].style.display = "block";
        thongBaoLoi[4].innerText = "Vui lòng nhập mật khẩu!";
        registerInput[2].style.border = "2px solid red";
    } else {
        registerInput[2].style.border = "2px solid #57b736";
        thongBaoLoi[4].style.display = "none";
    }
}

registerInput[3].onchange = function (e) {
    var kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        thongBaoLoi[5].style.display = "block";
        thongBaoLoi[5].innerText = "Vui lòng nhập lại mật khẩu!";
        registerInput[3].style.border = "2px solid red";
    } else if (!(kiemTra === registerInput[2].value)) {
        thongBaoLoi[5].style.display = "block";
        thongBaoLoi[5].innerText = "Mật khẩu nhập lại không khớp!";
        registerInput[3].style.border = "2px solid red";
    } else {
        registerInput[3].style.border = "2px solid #57b736";
        thongBaoLoi[5].style.display = "none";
    }
}


// CART
function showgiohangmini() {
    var giohangmini = document.getElementsByClassName("giohangmini");
    var icongiohangmini = document.querySelectorAll(".luachon a i");
    if (giohangmini[0].style.display == "block") {
        giohangmini[0].style.display = "none";
        icongiohangmini[2].style.color = "white";
        document.getElementById("giohang-count").style.color = "white";
    } else {
        giohangmini[0].style.display = "block";
        icongiohangmini[2].style.color = "black";
        document.getElementById("giohang-count").style.color = "black";
    }
}

var giohang = new Array();

function addcart(x) {
    var giohangElements = x.parentElement.children;
    var itemImg = giohangElements[0].children[0].src;
    var itemTensp = giohangElements[1].textContent;
    var itemGiasp = giohangElements[3].innerText;
    var itemSoluong = 1;
    var newSp = new Array(itemImg, itemTensp, itemGiasp, itemSoluong);
    var kt = 0;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i][1] == itemTensp) {
            kt = 1;
            itemSoluong += parseInt(giohang[i][3]);
            giohang[i][3] = itemSoluong;
            break;
        }
    }
    if (kt == 0) {
        giohang.push(newSp);
    }
    showmycart();
}

function showcountsp() {
    document.getElementById("giohang-count").innerText = giohang.length;
}
function showmycart() {
    var ttgh = "";
    for (let i = 0; i < giohang.length; i++) {
        ttgh += '<tr class="trHover">' +
            '<td><img src="' + giohang[i][0] + '" alt="" srcset=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][3] + '</td>' +
            '<td>' + giohang[i][2] * giohang[i][3] + '₫' + '</td>' +
            '<td><button onclick="xoasp(this)" class="xoa"><i class="fa fa-trash-o"></i></button></td>' +
            '</tr>';
    }
    document.getElementById("mycart").innerHTML = ttgh;
    showcountsp();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

}
function showgiohang_trangthanhtoan() {
    var tongTienElement = document.getElementById("tongTiengiohang");
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tongTien = 0;
    for (let i = 0; i < giohang.length; i++) {
        ttgh += '<tr>' +
            '<td><img src="' + giohang[i][0] + '" alt="" srcset=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][3] + '</td>' +
            // '<td><input type="number" value="'+giohang[i][3]+'" min="1" max="99" onchange="onchageGiohang(event)"></td>'+
            '<td>' + giohang[i][2] + '₫' + '</td>' +
            '</tr>';
        tongTien += parseInt(giohang[i][2]);
    };
    tongTienElement.innerText = tongTien;
    document.getElementById("mycart").innerHTML = ttgh;
}

function xoasp(x) {
    var tr = x.parentElement.parentElement;
    tr.remove();
    var tensp = tr.children[1].innerText;
    // xoa sp array
    for (let i = 0; i < giohang.length; i++) {
        if (tensp == giohang[i][1]) {
            giohang.splice(i, 1);
        }
    }
    showmycart();
}

function xoatatca() {
    giohang = [];
    showmycart();
}

// chitietsp
function addcartChitiet(x) {
    var luachon = document.getElementsByName("luachon");
    var aler = document.getElementsByClassName("alerror");
    if (!(luachon[0].checked || luachon[1].checked)) {
        aler[0].style.display = "block";
    } else {
        aler[0].style.display = "none";
        var giohangct = x.parentElement.children;
        if (luachon[0].checked) {
            var lc = document.getElementById("luachon0").innerText;
            var tensp = giohangct[0].innerText + " + " + lc;
        } else {
            var lc = document.getElementById("luachon1").innerText;
            var tensp = giohangct[0].innerText + " + " + lc;
        }
        var hinhanhsp = giohangct[1].src;
        var giasp = giohangct[2].innerText;
        var newsp = new Array(hinhanhsp, tensp, giasp, 1);
        giohang.push(newsp);
        sessionStorage.setItem("giohang", JSON.stringify(giohang));
        window.open('giohang.html', '_self');
    }
}

// var dkmmm;
// function onchageGiohang(event) { 
//     var dmmd = event.target.value;
//     dkmmm = dmmd;
// }
// console.log(dkmmm);

// fỏm thanh toan
var alrerror = document.getElementsByClassName("alerror");
var fromtt = document.getElementById("formtt").children;

function thanhtoanbill() {
    if (fromtt[0].value.length == 0) {
        fromtt[0].style.border = "1px solid red";
        fromtt[1].innerText = "Họ và tên không được để trống!";
        fromtt[1].style.display = "block";
    } else {
        fromtt[0].style.border = "1px solid green";
        fromtt[1].style.display = "none";
    }

    if (fromtt[2].value.length == 0) {
        fromtt[2].style.border = "1px solid red";
        fromtt[3].innerText = "Địa chỉ giao hàng không được để trống!";
        fromtt[3].style.display = "block";
    } else {
        fromtt[2].style.border = "1px solid green";
        fromtt[3].style.display = "none";
    }

    if (fromtt[4].value.length == 0) {
        fromtt[4].style.border = "1px solid red";
        fromtt[5].style.display = "block";
        fromtt[5].innerText = "Số điện thoại không được để trống!";
    } else if ((!reg_sdt.test(fromtt[4].value)) || (fromtt[4].value.length >= 11)) {
        fromtt[4].style.border = "1px solid red";
        fromtt[5].style.display = "block";
        fromtt[5].innerText = "Số điện thoại không đúng định dạng!";
    } else {
        fromtt[4].style.border = "1px solid green";
        fromtt[5].style.display = "none";
    }

    if (fromtt[6].value.length == 0) {
        fromtt[6].style.border = "1px solid red";
        fromtt[7].style.display = "block";
        fromtt[7].innerText = "Email không được để trống!";
    } else if (!reg_mail.test(fromtt[6].value)) {
        fromtt[6].style.border = "1px solid red";
        fromtt[7].style.display = "block";
        fromtt[7].innerText = "Email không đúng định dạng!";
    } else {
        fromtt[6].style.border = "1px solid green";
        fromtt[7].style.display = "none";
    }

    if (fromtt[0].style.border = "1px solid green" && fromtt[2].style.border == "1px solid green" &&
        fromtt[4].style.border == "1px solid green" && fromtt[6].style.border == "1px solid green") {
        document.getElementById("thanhtoanthanhcong").style.display = "block";
    }
}

fromtt[0].onchange = function (e) {
    kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        fromtt[0].style.border = "1px solid red";
        fromtt[1].innerText = "Họ và tên không được để trống!";
        fromtt[1].style.display = "block";
    } else {
        fromtt[0].style.border = "1px solid green";
        fromtt[1].style.display = "none";
    }
}

fromtt[2].onchange = function (e) {
    kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        fromtt[2].style.border = "1px solid red";
        fromtt[3].innerText = "Địa chỉ giao hàng không được để trống!";
        fromtt[3].style.display = "block";
    } else {
        fromtt[2].style.border = "1px solid green";
        fromtt[3].style.display = "none";
    }
}

fromtt[4].onchange = function (e) {
    kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        fromtt[4].style.border = "1px solid red";
        fromtt[5].style.display = "block";
        fromtt[5].innerText = "Số điện thoại không được để trống!";
    } else if ((!reg_sdt.test(fromtt[4].value)) || (fromtt[4].value.length >= 11)) {
        fromtt[4].style.border = "1px solid red";
        fromtt[5].style.display = "block";
        fromtt[5].innerText = "Số điện thoại không đúng định dạng!";
    } else {
        fromtt[4].style.border = "1px solid green";
        fromtt[5].style.display = "none";
    }
}
var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
fromtt[6].onchange = function (e) {
    kiemTra = e.target.value;
    if (kiemTra.length == 0) {
        fromtt[6].style.border = "1px solid red";
        fromtt[7].style.display = "block";
        fromtt[7].innerText = "Email không được để trống!";
    } else if (!reg_mail.test(kiemTra)) {
        fromtt[6].style.border = "1px solid red";
        fromtt[7].style.display = "block";
        fromtt[7].innerText = "Email không đúng định dạng!";
    } else {
        fromtt[6].style.border = "1px solid green";
        fromtt[7].style.display = "none";
    }
}

// thanh toan button











