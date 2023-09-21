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

// //テンプレート文字列
// const name = "聖弥";
// const age = 19;

// //私の名前は聖弥です。年齢は１９歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

//アロー関数

// //従来の関数
// function func1 (str){
//     return str;
// }
// console.log(func1("func1です"));

// //アロー関数を用いた方法

// const func2 = (str) => {return str;}
// console.log(func2("func2です"));

// //省略ver(引数が１つなら()を省略可能)
// const func3 = str => {return str;}
// console.log(func3("func3です"))

// //もっと省略ver(処理が１行なら{}を省略可能)
// const func4 = str => str;
// console.log(func4("func4です"));

// const func5 = (name1,name2) => {return name1+name2;}
// console.log(func5("聖弥","由川"))

//分割代入

// const myProfile = {
//   name: "聖弥",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}`;
// console.log(message2);

// const myProfile = ["聖弥", 19];

// const [name, age] = myProfile;
// const message2 = `私は${name}です。${age}歳です。`;
// console.log(message2);

/**
 * デフォルト値
 *  */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)
// sayHello("聖弥");

/**
 * スプレッド構文
 */

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//配列のコピー
// const arr4 = [1, 2, 3];
// const arr5 = [30,40];
// const arr6 = [...arr4];

// console.log(arr6);

// const arr7 = [...arr4,...arr5,...arr6];
// console.log(arr7);

//mapやフィルターを使った配列の処理
// const nameArr = ["田中", "山田", "由川"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });


