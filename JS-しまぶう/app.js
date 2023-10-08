const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  //自分でかいたとこ(失敗)
  //   users.forEach((element) => {
  //     lists.innerText = element.company.name;
  //     console.log(element.company.name);
  //   });

  //DOM操作
  console.log(users);
  users.forEach((element) => {
    const list = document.createElement("li");
    list.innerText = element.name + "    email = " + element.email;
    console.log(list);
    lists.appendChild(list);
  });
});
