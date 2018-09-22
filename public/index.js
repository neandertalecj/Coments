// alert('Hello from coments');
// var com = document.getElementsByTagName('form')[0].elements[0].value;

function sub() {
	var com = document.getElementsByTagName('form')[0].elements[0].value;
	var messErr = document.getElementById('messErr');
	if (com === '') {
		messErr.innerHTML = 'Enter some text? please!';
	} else {
			messErr.innerHTML = '';

	}
	console.log(com);
	sendToServer(com);
}

function sendToServer(com) {
	const data ={
		text: com
	}

	console.log(data);

	const header = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

	const init = {
		method: 'POST',
		headers: header,
		body: JSON.stringify(data)
	}

	const request = new Request('/content', init);

	fetch(request)
		.then((res) => res )
		.then((res) => console.log(res.status) )
		.catch((err) => console.log(err))
}
