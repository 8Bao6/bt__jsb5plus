var thuE = "";
document.getElementById("btnThue").onclick = function () {
  var thuNhap = document.getElementById("thuNhap").value;
  var phuThuoc = document.getElementById("phuThuoc").value * 1;
  var hovaTen = document.getElementById("hovaTen").value;
  var currentFormat = Intl.NumberFormat("VN-vn");
  var thunhap = "";
  var tongThu = "";
  if (thuNhap > 0 && thuNhap <= 60e+6) {
    thuNhap *= 0.95;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  } else if (thuNhap > 60e+6 && thuNhap <= 120e+6) {
    thuNhap *= 0.9;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  } else if (thuNhap > 120e+6 && thuNhap <= 210e+6) {
    thuNhap *= 0.85;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  } else if (thuNhap > 210e+6 && thuNhap <= 384e+6) {
    thuNhap *= 0.8;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  } else if (thuNhap > 384e+6 && thuNhap <= 624e+6) {
    thuNhap *= 0.75;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  } else if (thuNhap > 624e+6 && thuNhap <= 960e+6) {
    thuNhap *= 0.7;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;

  } else if (thuNhap > 960e+6) {
    thuNhap *= 0.65;
    tongThu = thuNhap - 4e+6 - phuThuoc * 1600000;
  }
  // console.log(tongThu);
  var result = "Họ và tên: " + hovaTen + "Thuế phải trả: " + currentFormat.format(tongThu) + "VND"
  document.getElementById(" infoThue").innerHTML = result;
}
