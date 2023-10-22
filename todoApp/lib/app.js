"use strict";
// テキストの取得と入力欄の初期化
const onClickAdd = () => {
    const element = (document.getElementById("add-text"));
    // 空欄の時は追加しない
    if (!(element.value === "")) {
        domOperation(element);
    }
    // テキスト欄の初期化
    const value = element.value;
    element.value = "";
};
// div,liタグでtodoのDOMを作成
// 引数はelement(追加するtodoの名前)
const domOperation = (element) => {
    const ul = document.getElementById("doUl");
    //divタグ作成
    const div = document.createElement("div");
    div.className = "todo";
    // liタグ作成
    const doList = document.createElement("li");
    doList.innerHTML = `${element.value}`;
    doList.classList.add("todo");
    // 完了ボタン作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        const childElement = deleteTarget;
        console.log(deleteTarget);
        const todoParent = document.getElementById("doUl");
        deleteTarget === null || deleteTarget === void 0 ? void 0 : deleteTarget.parentNode.removeChild(deleteTarget);
        // liの中身を取得
        // 完了したtodoを表示
        //divタグ作成
        const doneDiv = document.createElement("div");
        doneDiv.className = "todone";
        console.log(element.value);
        // liタグ作成
        const doneList = document.createElement("li");
        doList.innerHTML = `${childElement === null || childElement === void 0 ? void 0 : childElement.children[0]}`;
        doList.classList.add("doneLi");
        // / doneDivの中にdoneListを入れる
        doneDiv.appendChild(doneList);
        const doneUl = (document.getElementById("doneUl"));
        //作ったdivタブのDOMを反映(追加)
        doneUl.appendChild(doneDiv);
    });
    // 削除ボタン作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        const todoParent = document.getElementById("doUl");
        deleteTarget === null || deleteTarget === void 0 ? void 0 : deleteTarget.parentNode.removeChild(deleteTarget);
        // targetParent!.removeChild(deleteTarget!);
        // todo!.removeChild(deleteTarget!);
    });
    //divの中にliを入れる
    div.appendChild(doList);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    const doUl = (document.getElementById("doUl"));
    //作ったdivタブのDOMを反映(追加)
    doUl.appendChild(div);
};
document
    .getElementById("inputButton")
    .addEventListener("click", () => onClickAdd());
document
    .getElementById("inputButton")
    .addEventListener("click", () => onClickAdd());
