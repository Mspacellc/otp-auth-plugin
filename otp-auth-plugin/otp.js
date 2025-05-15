
document.addEventListener("DOMContentLoaded", function () {
  const ui = `
    <div class="otp-tabs">
      <button onclick="showTab('login')" id="btn-login">Нэвтрэх</button>
      <button onclick="showTab('register')" id="btn-register">Бүртгүүлэх</button>
      <button onclick="showTab('reset')" id="btn-reset">Нууц үг сэргээх</button>
    </div>
    <div id="tab-login" class="otp-tab">
      <input id="login-phone" placeholder="Утасны дугаар" maxlength="8" oninput="this.value=this.value.replace(/\D/g,'')">
      <input id="login-pass" type="password" placeholder="Нууц үг">
      <button onclick="otpLogin()">Нэвтрэх</button>
    </div>
    <div id="tab-register" class="otp-tab" style="display:none;">
      <input id="reg-phone" placeholder="Утасны дугаар" maxlength="8" oninput="this.value=this.value.replace(/\D/g,'')">
      <button onclick="otpSend('reg')">Код илгээх</button>
      <div id="reg-code" style="display:none;">
        <input id="reg-otp" placeholder="Код" maxlength="5" oninput="this.value=this.value.replace(/\D/g,'')">
        <button onclick="otpVerify('reg')">Баталгаажуулах</button>
        <div id="reg-pass-fields" style="display:none;">
          <input id="reg-pass" type="password" placeholder="Нууц үг">
          <input id="reg-pass2" type="password" placeholder="Нууц үг давтах">
          <button onclick="otpRegister()">Бүртгүүлэх</button>
        </div>
      </div>
    </div>
    <div id="tab-reset" class="otp-tab" style="display:none;">
      <input id="reset-phone" placeholder="Утасны дугаар" maxlength="8" oninput="this.value=this.value.replace(/\D/g,'')">
      <button onclick="otpSend('reset')">Код илгээх</button>
      <div id="reset-code" style="display:none;">
        <input id="reset-otp" placeholder="Код" maxlength="5" oninput="this.value=this.value.replace(/\D/g,'')">
        <button onclick="otpVerify('reset')">Баталгаажуулах</button>
        <div id="reset-pass-fields" style="display:none;">
          <input id="reset-pass" type="password" placeholder="Нууц үг">
          <input id="reset-pass2" type="password" placeholder="Нууц үг давтах">
          <button onclick="otpReset()">Сэргээх</button>
        </div>
      </div>
    </div>
    <div id="otp-msg" style="margin-top:10px;"></div>
  `;
  document.getElementById("otp-ui").innerHTML = ui;
});

function showTab(tab) {
  ['login','register','reset'].forEach(t => {
    document.getElementById('tab-'+t).style.display = t === tab ? 'block' : 'none';
    document.getElementById('btn-'+t).classList.toggle('active', t === tab);
  });
}

function showMsg(msg) {
  document.getElementById('otp-msg').innerText = msg;
}

function otpSend(type) {
  const phone = document.getElementById(type + '-phone').value;
  if (!/^\d{8}$/.test(phone)) return showMsg('Утасны дугаар буруу байна');
  showMsg('Код илгээж байна...');
}

function otpVerify(type) {
  const otp = document.getElementById(type + '-otp').value;
  if (!/^\d{5}$/.test(otp)) return showMsg('Код 5 оронтой байх ёстой');
  document.getElementById(type + '-pass-fields').style.display = 'block';
}

function otpLogin() {
  const phone = document.getElementById('login-phone').value;
  const pass = document.getElementById('login-pass').value;
  if (!/^\d{8}$/.test(phone) || pass.length < 4) return showMsg('Нэвтрэх мэдээлэл буруу байна');
  showMsg('Нэвтэрч байна...');
  setTimeout(() => window.location.href='/my-account/', 1000);
}

function otpRegister() {
  showMsg('Бүртгэл үүсгэж байна...');
}

function otpReset() {
  showMsg('Нууц үг шинэчилж байна...');
}
