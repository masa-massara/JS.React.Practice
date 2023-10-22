const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// データのやり取りだけを抜き取った
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

//DOM操作
function addList(element) {
  const list = document.createElement("li");
  list.innerText = element.name + "    email = " + element.email;
  console.log(list);
  lists.appendChild(list);
}

async function listUsers() {
  // データのやり取り
  const users = await getUsers();

  //自分でかいたとこ(失敗)
  //   users.forEach((element) => {
  //     lists.innerText = element.company.name;
  //     console.log(element.company.name);
  //   });

  //DOM操作
  users.forEach(addList);
}

//イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
