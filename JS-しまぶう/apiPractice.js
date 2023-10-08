// APIで情報を取得してくる

/** 自力でやった分
const USER_INFORMATION_API = "https://jsonplaceholder.typicode.com/users";

const userInformation = document.getElementById("userInformation");

function callApi() {
  return fetch(USER_INFORMATION_API).then((response) => response.json());
}

async function render() {
  const sentence = await callApi();
  sentence.forEach(function (value) {
    console.log(value.company.name);
  });
  
    userInformation.innerText = sentence[1].company.name;
  
}
render();
*/

//以下見本
//asyncをつけると非同期関数になる
async function callApi() {
  //fetchの中身はURL
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //fetchをしたらプロミスオブジェクトが返ってくる
  //   async awaitでfetchを使うとResponseオブジェクトが返ってくる

  //jsonによって使いやすくする
  const users = await res.json();
  console.log(users);
}

callApi();
