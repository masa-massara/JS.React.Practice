// function isTweetable(text) {
//   return text.length <= 140;
// }

// 関数式(変数に関数を入れたもの)
// const isTweetable = function (text) {
//   return text.length <= 140;
// };

// console.log(isTweetable("foo"));

//コールバック関数について理解する
//引数に関数を入れる
// function name(params) {

// }

// function unfollow(){
//     console.log("フォローを外しました");
// }

// function cancelTweet() {
//     console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn){
//     if (window.confirm("実行しますか？")) {
//         fn();
//     }
// }

// confirmed(unfollow);
// confirmed(cancelTweet);

/**失敗例 */

// function message() {
//   prompt("Please type delete to confirm");
// }

//console.log(message);

//削除するかを確認する;
// function checkGit(message) {
//   if (message == "delete") {
//     deleteRepository();
//   }
// }

// // リポジトリを削除する関数
// function deleteRepository() {
//   console.log("リポジトリを消去しました");
// };

// checkGit(message);

//手本
// function confirmed(fn) {
//   const input = window.prompt("実行しますか");
//   if (input === "実行") {
//     fn();
//   }
// }

// confirmed(function () {
//   console.log("リポジトリを削除");
// });

/** もっかい自分で*/
// リポジトリを削除する
// function deleteRepository() {
//     alert("削除しました");
// }

// function checkDelete(fn){
//     const message = prompt("削除するには実行と入力");
//     if (message === "実行") {
//         fn();
//     }
// }
// checkDelete(function() {
//     alert("削除しました");
// });

// function confirmed(fn) {
//   const input = window.prompt("実行しますか？");
//   fn(input);
// }

// confirmed(function (input) {
//   if (input === "実行") {
//     console.log("リポジトリを削除");
//   }
// });


// ボタンをクリックしたら処理が実行される
// こういう処理にaddEventListenerが使われる
// const btn = document.getElementById("button");
// btn.addEventListener("click",function (){
//     console.log("フォロー解除");
// })


const foods = ["にんじん","じゃがいも","玉ねぎ"]

foods.forEach(function(food){
    console.log(food);
})
