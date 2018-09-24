// alert('Hello from coments');
// var com = document.getElementsByTagName('form')[0].elements[0].value;

const content = document.getElementById('content')
// const bt = document.getElementById('bt')
const form = document.getElementById('form')

function checkLengLi() {
	let lengTgLi = document.getElementsByTagName('li').length
	console.log(lengTgLi)
	if (lengTgLi > 0) {
		lengTgLi -= 1
		console.log(lengTgLi)
	}
	return lengTgLi
}

function renderLi(res, startPost) {
	if (startPost !== 0 || startPost !== undefined) {
		var arr = res.text.slice(startPost)
	}

	var arrTxt = arr.map(function(item, i) {
		let li = document.createElement("li")
		li.innerHTML = arr[i]
		content.appendChild(li)
	})
}

fetch('/coment')
  .then(res => res.json())
  .then(renderLi)
  .catch(console.error)

form.addEventListener('submit', sub) // на форму!!!

function sub(e) {
  e.preventDefault()
	const com = document.getElementsByTagName('form')[0].elements[0].value
	const messErr = document.getElementById('messErr')

  // const com = e.target;
  // console.log(com);

  if (com === '') {
    messErr.innerHTML = 'Enter some text? please!'
    return
  } 
	messErr.innerHTML = ''

	console.log(com)
	sendToServer(com)
  document.getElementsByTagName('form')[0].elements[0].value = ''

  // e.target.reset();
}

function sendToServer(text) {
	// const data ={
	// 	text: com
	// }

	const header = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

	const init = {
		method: 'POST',
		headers: header,
		body: JSON.stringify({text})
	}

	const request = new Request('/coment', init)

  fetch(request)
		.then((res) => res.json())
		.then((res) => {
		console.log(res.text)

		renderLi(res, checkLengLi())

		})
		.catch((err) => console.log(err))
}
