// 変数名	ローワーキャメルケース
// メソッド名	ローワーキャメルケース

// 追加ボタンが押された際の動作
function ifClickAddButton() {
  const temporaryInputText: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("add-text")
  );
  const inputText = temporaryInputText.value;

  // 空欄の時は追加しない
  if (!(inputText === "")) {
    addIncompleteTodo(inputText);
  }

  // テキスト欄の初期化
  const value: string = inputText;
  temporaryInputText.value = "";
}

// 完了ボタンが押された際の動作
function ifClickCompleteButton(completeButton: HTMLButtonElement) {
  const completeTarget = completeButton.parentNode;
  completeTarget?.parentNode!.removeChild(completeTarget);
  const taskName = extractTaskName(completeButton);
  addCompleteTodo(taskName!);
}

// 削除ボタンが押された際の動作
function ifClickDeleteButton(deleteButton: HTMLButtonElement) {
  const deleteTarget = deleteButton.parentNode;
  deleteTarget?.parentNode!.removeChild(deleteTarget);
}

// 戻すボタンが押された際の動作
function ifClickReturnButton(returnButton: HTMLButtonElement) {
  const returnTarget = returnButton.parentNode;
  returnTarget?.parentNode!.removeChild(returnTarget);
  const taskName = extractTaskName(returnButton);
  addIncompleteTodo(taskName!);
}

// 未完了のTodoを追加する関数
function addIncompleteTodo(inputText: string) {
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

  const incompleteTodo: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("incomplete-todo")
  );
  //作ったdivタブのDOMを反映(追加)
  incompleteTodo.appendChild(incompleteDiv);
}

// 完了したTodoを追加する関数
function addCompleteTodo(inputText: string) {
  // divタグを作成
  const completeDiv = document.createElement("div");
  completeDiv.className = "complete-todo";

  // liタグ作成
  const completeList = document.createElement("li");

  completeList.innerHTML = `${inputText}`;
  completeDiv.appendChild(completeList);

  const completeTodo: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("complete-todo")
  );

  // 戻すボタンを作成
  createReturnButton(completeDiv);

  //作ったdivタブのDOMを反映(追加)
  completeTodo.appendChild(completeDiv);
}

// 完了ボタンを作成する関数
function createCompleteButton(incompleteDiv: HTMLDivElement) {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  incompleteDiv.appendChild(completeButton);
  completeButton.addEventListener("click", () =>
    ifClickCompleteButton(completeButton)
  );
}

// 削除ボタンを作成する関数
function createDeleteButton(incompleteDiv: HTMLDivElement) {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  incompleteDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", () =>
    ifClickDeleteButton(deleteButton)
  );
}

// 戻すボタンを作成する関数
function createReturnButton(completeDiv: HTMLDivElement) {
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  completeDiv.appendChild(returnButton);
  returnButton.addEventListener("click", () =>
    ifClickReturnButton(returnButton)
  );
}

// html要素の中からtodoの名前だけを取り出す関数
function extractTaskName(targetButton: HTMLButtonElement) {
  const extractTarget: HTMLDivElement = <HTMLDivElement>targetButton.parentNode;
  const taskName = extractTarget.firstElementChild?.innerHTML;
  // todoの中身をstringで返す
  return taskName;
}

// 追加ボタンを押したらifClickAddButtonを実行
document.getElementById("add-button")!.addEventListener!("click", () =>
  ifClickAddButton()
);
