"use strict";
// 変数名	ローワーキャメルケース
// メソッド名	ローワーキャメルケース
// 追加ボタンが押された際の動作
unction;
ifClickAddButton();
{
    const temporaryInputText = (document.getElementById("add-text"));
    const inputText = temporaryInputText.value;
    // 空欄の時は追加しない
    if (!(inputText === "")) {
        addIncompleteTodo(inputText);
    }
    // テキスト欄の初期化
    const value = inputText;
    temporaryInputText.value = "";
}
// 完了ボタンが押された際の動作
function ifClickCompleteButton(completeButton) {
    const completeTarget = completeButton.parentNode;
    completeTarget === null || completeTarget === void 0 ? void 0 : completeTarget.parentNode.removeChild(completeTarget);
    const taskName = extractTaskName(completeButton);
    addCompleteTodo(taskName);
}
// 削除ボタンが押された際の動作
function ifClickDeleteButton(deleteButton) {
    const deleteTarget = deleteButton.parentNode;
    deleteTarget === null || deleteTarget === void 0 ? void 0 : deleteTarget.parentNode.removeChild(deleteTarget);
}
// 戻すボタンが押された際の動作
function ifClickReturnButton(returnButton) {
    const returnTarget = returnButton.parentNode;
    returnTarget === null || returnTarget === void 0 ? void 0 : returnTarget.parentNode.removeChild(returnTarget);
    const taskName = extractTaskName(returnButton);
    addIncompleteTodo(taskName);
}
// 未完了のTodoを追加する関数
function addIncompleteTodo(inputText) {
    // divタグを作成
    const incompleteDiv = document.createElement("div");
    incompleteDiv.className = "incomplete-todo";
    // liタグ作成
    const IncompleteList = document.createElement("li");
    IncompleteList.innerHTML = `${inputText}`;
    incompleteDiv.appendChild(IncompleteList);
    //   完了ボタン作成
    createCompleteButton(incompleteDiv);
    //   削除ボタン作成
    createDeleteButton(incompleteDiv);
    const incompleteTodo = (document.getElementById("incomplete-todo"));
    //作ったdivタブのDOMを反映(追加)
    incompleteTodo.appendChild(incompleteDiv);
}
// 完了したTodoを追加する関数
function addCompleteTodo(inputText) {
    // divタグを作成
    const completeDiv = document.createElement("div");
    completeDiv.className = "complete-todo";
    // liタグ作成
    const completeList = document.createElement("li");
    completeList.innerHTML = `${inputText}`;
    completeDiv.appendChild(completeList);
    const completeTodo = (document.getElementById("complete-todo"));
    // 戻すボタンを作成
    createReturnButton(completeDiv);
    //作ったdivタブのDOMを反映(追加)
    completeTodo.appendChild(completeDiv);
}
// 完了ボタンを作成する関数
function createCompleteButton(incompleteDiv) {
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    incompleteDiv.appendChild(completeButton);
    completeButton.addEventListener("click", () => ifClickCompleteButton(completeButton));
}
// 削除ボタンを作成する関数
function createDeleteButton(incompleteDiv) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    incompleteDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => ifClickDeleteButton(deleteButton));
}
// 戻すボタンを作成する関数
function createReturnButton(completeDiv) {
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    completeDiv.appendChild(returnButton);
    returnButton.addEventListener("click", () => ifClickReturnButton(returnButton));
}
// html要素の中からtodoの名前だけを取り出す関数
function extractTaskName(targetButton) {
    var _a;
    const extractTarget = targetButton.parentNode;
    const taskName = (_a = extractTarget.firstElementChild) === null || _a === void 0 ? void 0 : _a.innerHTML;
    // todoの中身をstringで返す
    return taskName;
}
// 追加ボタンを押したらifClickAddButtonを実行
document.getElementById("add-button").addEventListener("click", () => ifClickAddButton());
