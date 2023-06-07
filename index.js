const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function executar(num){
 input.value += num

}

document.getElementById('clear').addEventListener('click', function(){
  input.value = ''
  input.focus()
})


input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
  }
  if(ev. key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'enter'){
    calcular()
  }
})
document.getElementById('equal').addEventListener('click', calcular)

 function calcular(){
  input.value = eval(input.value)
 }

 document.getElementById('themeSwitcher').addEventListener('click', function(){
if(main.dataset.theme === 'dark'){
  root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = "dark"
}
 })
 
 function tabuada(){
  const num = document.getElementById('txtn')
  const seltab = document.getElementById('seltab')
  if(num.value.length === 0){
  alert("Por favor, Digite um número!")
  }else{
seltab.innerText = ''
 let n = Number(num.value)
 let c = 1 
 while(c <= 10){
  const option = document.createElement('option')
  option.text = n + ' x ' + c + ' = ' + n * c
  seltab.appendChild(option)
  c++
 }
  }
}