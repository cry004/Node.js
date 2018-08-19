var send = document.getElementById('send')
var text = document.getElementById('text')
var title = document.getElementById('title')

send.addEventListener('click', function (e) {
  e.preventDefault()
  var str1 = text.value
  var str2 = title.value

  // var xhr = new XMLHttpRequest();
  // xhr.open('post', '/searchAJAX');
  // xhr.setRequestHeader('Content-type', 'application/json');
  // var data = JSON.stringify({ content: str1, list: [1, 2, 3, 4] });
  // xhr.send(data);
  // xhr.onload = function() {
  //   console.log(xhr.responseText);
  // };

  fetch('/searchAJAX', {
    method: 'POST',
    body: JSON.stringify({ content: str1, list: [1, 2, 3, 4] }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => console.log(response.text()))
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
})
