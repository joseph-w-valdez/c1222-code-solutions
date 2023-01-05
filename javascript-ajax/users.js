var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr.status value :  ', xhr.status);
  console.log('xhr.response value :  ', xhr.response);
  for (let user = 0; user < xhr.response.length; user++) {
    var $newLi = document.createElement('li');
    $newLi.textContent = xhr.response[user].name;
    $userList.appendChild($newLi);
  }
});
xhr.send();
