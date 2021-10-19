/*const loginForm = document.querySelector("#login-form");
loginId = loginForm.querySelector("#login-id");
loginButton = loginForm.querySelector("#login-button");

loginButton.onclick = function (event) {
  if (event.target === loginRequire) {
  }
};*/
function login() {
  const form = document.login_form;
  const chkEmail = checkValidEmail(form);
  const chkPw = checkValidPassword(form);

  if (chkEmail) {
    document.getElementById("alert_email").innerText = "";

    form.email.style.borderColor = "#00D000";
  } else {
    form.email.style.borderColor = "#FF0000";
    document.getElementById("alert_email").style.color = "#FF0000";
  }

  if (chkPw) {
    document.getElementById("alert_password").innerText = "";

    form.password.style.borderColor = "#00D000";
  } else {
    form.password.style.borderColor = "#FF0000";
    document.getElementById("alert_password").style.color = "#FF0000";
  }

  if (chkEmail && chkPw) {
    console.log("Success to Login");
    window.location.href = "https://woohojin.github.io/kakaotalk_clone/friends";
  }
}

function checkValidEmail(form) {
  if (form.email.value == "") {
    document.getElementById("alert_email").innerText = "Please enter email.";
    //form.email.focus();
    return false;
  }

  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  // "ㅁ@ㅁ.ㅁ" 이메일 형식 검사.
  if (exptext.test(form.email.value) === false) {
    document.getElementById("alert_email").innerText = "Email is not valid.";
    //form.email.select();
    return false;
  }

  return true;
}

function checkValidPassword(form) {
  if (form.password.value == "") {
    document.getElementById("alert_password").innerText = "Please enter password.";
    //form.password.focus();
    return false;
  }

  const pw = form.password.value;
  // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
  // number
  const num = pw.search(/[0-9]/g);
  // alphabet
  const eng = pw.search(/[a-z]/gi);
  // special characters
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 6) {
    // 최소 6문자.
    document.getElementById("alert_password").innerText = "Password must be at least 6 characters.";
    return false;
  } else if (pw.search(/\s/) != -1) {
    // 공백 제거.
    document.getElementById("alert_password").innerText = "Please enter your password without spaces.";
    return false;
  } else if (num < 0 && eng < 0 && spe < 0) {
    // 한글과 같은 문자열 입력 방지.
    document.getElementById("alert_password").innerText = "Password is not valid.";
    return false;
  }

  return true;
}
