/* const、let等の変数宣言 */

// var val1 = "val変数";
// console.log(val1);

// // var変数の上書き
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数の再宣言
// var val1 = "val変数を再宣言";
// console.log(val1);


// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数の上書き"
// console.log(val2);

// // letは再宣言不可！

// const val3 = "const変数"
// console.log(val3);

// // constは上書き不可！


// const val4 = {
//     name: "masaya",
//     age: 19,
// };

// console.log(val4);

// val4.name = "聖弥";

// console.log(val4);

// //constで定義したオブジェクトはプロパティで上書き可能



// const val5 = ["dog","cat"];

// val5[0]= "bird"
// val5.push("monkey");
// console.log(val5);

// // //constで定義した配列はプロパティで上書き可能

//テンプレート文字列
const name = "聖弥";
const age = 19;

//私の名前は聖弥です。年齢は１９歳です。

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`
console.log(message2);
