// const carFunc = (number1,number2,number3) => {console.log(`一番に${number1}、２番に${number2}、３番に${number3}が止まっています。`)};

// const number = [53,12,64];
// carFunc(...number);

// const number = [1,2,3,4,5];

// const sumFunc = (num1,num2) => num1 + num2;
// console.log(sumFunc(number[0],number[1]));

// console.log(sumFunc(...number));

// const [num1,num2,...num3] = number;
// console.log(num1,num2,num3);

// const [...num4] = number;
// console.log(num4);

// const arr1 = [10, 20];
// const arr2 = [30, 40];

// const mergedArray = [...arr1,...arr2];
// console.log(mergedArray);

const nameArr = ["田中", "山田", "由川"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })

// console.log(nameArr2);

// nameArr.map((name) => {
//   console.log(name);
// });

// nameArr.map((name, index) => {
//   console.log(`${index}番目は${name}です`);
// });

//由川だけ呼び捨て、他はさん付けのする処理
// const newNameArr = nameArr.map((name) => {
//   if (name === "由川") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
  
// });
// console.log(newNameArr);

// newNameArr.map((name2)=>console.log(name2));


// 三項演算子
// const vall = 1 > 0? 'trueです':'falseです';
// console.log(vall);

// const num =1300;


// const formattedNum =  typeof num === 'number' ? num.toLocaleString() :"数値を入力してください"
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 >100 ? '100を超えています':'許容範囲内です';
// }
// // console.log(checkSum(50,60));



//三項演算子について
// const flag1 = true;
// const flag2 = false;

// if(flag1||flag2){
//   console.log("どちらかはtrueです");
// }
// if (flag1&&flag2) {
//   console.log("どちらもtrueです")
// }

