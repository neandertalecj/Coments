// alert('Hello from coments');
// var com = document.getElementsByTagName('form')[0].elements[0].value;

const content = document.getElementById('content');
const bt = document.getElementById('bt');

bt.addEventListener('click', sub);

function sub(e) {
  e.preventDefault();
	const com = document.getElementsByTagName('form')[0].elements[0].value;
	const messErr = document.getElementById('messErr');
	if (com === '') {
		messErr.innerHTML = 'Enter some text? please!';
    return;
	} else {
			messErr.innerHTML = '';

	}
	// console.log(com);
	sendToServer(com);
  document.getElementsByTagName('form')[0].elements[0].value = '';
}

function sendToServer(com) {
	const data ={
		text: com
	}

	const header = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

	const init = {
		method: 'POST',
		headers: header,
		body: JSON.stringify(data)
	}

	const request = new Request('/coment', init);

	fetch(request)
		.then((res) => res.json() )
		.then((res) => {
      // console.log(res.text);
      let li = document.createElement("li");
      li.innerHTML = res.text;
      content.appendChild(li);
    } )
		.catch((err) => console.log(err))
}
