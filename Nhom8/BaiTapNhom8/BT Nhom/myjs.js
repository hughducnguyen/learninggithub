function check(){
    var handleInput = document.getElementById('input-text');
    if(handleInput.value.length > 0 ){
        alert('Bạn đã nhập đúng , xin lựa sản phẩm.');
        return true;
        
    }
    else
    {
        handleInput.focus();
        alert('Bạn chưa nhập dữ liệu, xin nhập lại.');
        return false;
       
    }
}
function checkdk() {
    var user = document.getElementById('input-user');
    var password = document.getElementById('input-password');
    var password1 = document.getElementById('input-password1');
    var filter = /^([a-zA-Z0-9]{2,4})+$/;
    if (user.value == '' && password.value == '' && password1.value == '')
        alert('Vui lòng nhập user và password !')
    if (!filter.test(user.value) || user.value == '') {
        alert('user không hợp lệ !user gồm chữ cái chữ, chữ số và dấu gạch dưới');
       //document.getElementById('input-user').style.backgroundColor='red';
       // document.getElementById('form').style.border='solid 1px red';
        return false;
    } else if (password.value == '' || password.value.length < 8) {
        alert('Password không hợp lệ.');
        return false;
    } else if (password1.value == '' || password.value.length < 8 || password1.value != password.value) {
        alert('Password không khớp.');
        return false;
    } else
    document.getElementById('form1').action = "Thongtinkhachhang.html";
}

function check(){
    var handleInput = document.getElementById('input-text');
    if(handleInput.value.length > 0 ){
        window.location.href('sanpham.html');
    }
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated');
        }, false)
      })
  })()

