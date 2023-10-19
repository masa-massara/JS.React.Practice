"use strict";
const onClickAdd = () => {
    // テキストの取得と入力欄の初期化
    const element = (document.getElementById("add-text"));
    const value = element.value;
    element.value = "";
    console.log("hello");
};
document
    .getElementById("inputButton")
    .addEventListener("click", () => onClickAdd());
