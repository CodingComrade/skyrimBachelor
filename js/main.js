document.querySelector('#aela').addEventListener('click', correct)
document.querySelector('#aela').addEventListener('click', hide)
document.querySelector('#lydia').addEventListener('click', wrong)
document.querySelector('#lydia').addEventListener('click', death)
document.querySelector('#lydia').addEventListener('click', hideAll)
document.querySelector('#camilla').addEventListener('click', wrong)
document.querySelector('#camilla').addEventListener('click', death)
document.querySelector('#camilla').addEventListener('click', hideAll)
document.querySelector('a').addEventListener('click', respawn)

function respawn() {
	location.reload();
}

function wrong() {
	document.querySelector('.chosePoorly').style.display = 'block'
	document.querySelector('.default').style.display = 'none'
	document.querySelector('a').style.display = 'block'
  let audio = document.getElementById('fail')
	audio.play()
}

function correct() {
	document.querySelector('.choseWisely').style.display = 'block'
	document.querySelector('.default').style.display = 'none'
	let audio = document.getElementById('pass')
	audio.play()
}

function hide() {
	document.querySelector('#camilla').style.visibility = 'hidden'
	document.querySelector('#lydia').style.visibility = 'hidden'
	document.getElementsByTagName('p').innerHTML = 'A wise choice, Dovahkin'
}

function death() {
	document.querySelector('body').style.backgroundImage = 'url("C:/Users/Chris/Downloads/class13-materials/class13-materials/bachelor-code/1/alduin.jpg")'
}


function hideAll(){
	document.querySelector('#lydia').style.display = 'none'
	document.querySelector('#aela').style.display = 'none'
	document.querySelector('#camilla').style.display = 'none'
}
