(function(){
  let params = new URLSearchParams(window.location.search);
  let user = params.get("username");
  let url = `https://api.github.com/users/${user}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(err => console.log(err));

  function displayData(data) {

    let div = document.getElementById('info');
    let userImg = data.avatar_url;
    let userName = data.name;
    let userNickname = data.login;
    let userLink = data.html_url
    let userInfo = data.bio;

    if( data.message === 'Not Found') {

      div.innerHTML = 'Информация о пользователе недоступна';

    } else {

      let img = new Image();
      img.src = userImg;
      img.alt = 'Изображение пользователя';
      document.body.insertBefore(img, div);

      let nameElem = document.createElement('a');
      userName !== null ? (nameElem.innerHTML = userName) : (nameElem.innerHTML = userNickname);
      nameElem.href = userLink;
      div.appendChild(nameElem);
      
      let infoElem = document.createElement('div');
      infoElem.innerHTML = userInfo;
      div.appendChild(infoElem);
    };
  };
})();