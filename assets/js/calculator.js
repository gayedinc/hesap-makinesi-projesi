const resultTxt = document.querySelector('.result-bar');
const btns = document.querySelectorAll('.btn-num');

function handleClick() {
  resultTxt.innerText += this.innerText;
}

for (const btn of btns) {
  btn.addEventListener('click', handleClick);
}

document.querySelector('.btn-reset').addEventListener('click', handleReset);

function handleReset() {
  resultTxt.innerText = '';
}

//result kısmında sondan tek tek eleman silme
document.querySelector('.btn-del').addEventListener('click', handleDel);

function handleDel() {
  resultTxt.innerText = resultTxt.innerText.substring(0, resultTxt.innerText.length - 1);
}

function handleCalc() {
  try {
    resultTxt.innerText = eval(resultTxt.innerText);
  }
  catch {
    alert('Hesaplama formülünde hata var.');
  }
}

document.querySelector('.btn-calc').addEventListener('click', handleCalc);

//tema değişikliği için;

if (localStorage.isLightMode === 'true') {
  document.body.classList.add('light-mode');
}

if (localStorage.isPurpleMode === 'true') {
  document.body.classList.add('purple-mode');
}

firstTheme.addEventListener("click", function () {
  console.log('first theme')
  document.body.classList.remove("light-mode", "purple-mode");
  localStorage.isPurpleMode = false;
  localStorage.isLightMode = false;
});

secondTheme.addEventListener("click", function () {
  console.log('second theme')
  document.body.classList.add("light-mode");
  document.body.classList.remove("purple-mode");
  localStorage.isPurpleMode = false;
  localStorage.isLightMode = true;
});

thirdTheme.addEventListener("click", function () {
  console.log('third theme')
  document.body.classList.add("purple-mode");
  localStorage.isPurpleMode = true;
  localStorage.isLightMode = false;
});