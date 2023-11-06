// テキストの取得と入力欄の初期化
const onClickAdd = () => {
  const element: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("add-text")
  );

  // 空欄の時は追加しない
  if (!(element.value === "")) {
    domOperation(element);
  }

  // テキスト欄の初期化
  const value: string = element.value;
  element.value = "";
};


// 完了ボタンを追加する関数



// div,liタグでtodoのDOMを作成
// 引数はelement(追加するtodoの名前)
const domOperation = (element: HTMLInputElement): void => {
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

    deleteTarget?.parentNode!.removeChild(deleteTarget);

    // liの中身を取得
    const addTarget: HTMLDivElement = <HTMLDivElement>completeButton.parentNode;
    const addText = addTarget.firstElementChild?.innerHTML;

    // 完了したtodoを表示
    //divタグ作成
    const doneDiv = document.createElement("div");
    doneDiv.className = "todone";

    console.log(element.value);
    // liタグ作成
    const doneList = document.createElement("li");
    doneList.innerHTML = `${addText}`;
    doneList.classList.add("doneLi");

    // / doneDivの中にdoneListを入れる
    doneDiv.appendChild(doneList);

    const doneUl: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("doneUl")
    );

    // 戻すボタン作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const returnTarget = returnButton.parentNode;

      returnTarget?.parentNode!.removeChild(returnTarget);

      // liの中身を取得
      const restoreTarget: HTMLDivElement = <HTMLDivElement>(
        returnButton.parentNode
      );
      const returnText = restoreTarget.firstElementChild?.innerHTML;
      
    });

    // doneDivの中に戻すボタンを入れる
    doneDiv.appendChild(returnButton);

    //作ったdivタブのDOMを反映(追加)
    doneUl.appendChild(doneDiv);
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;

    const todoParent = document.getElementById("doUl");
    deleteTarget?.parentNode!.removeChild(deleteTarget);
  });

  //divの中にliを入れる
  div.appendChild(doList);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const doUl: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("doUl")
  );
  //作ったdivタブのDOMを反映(追加)
  doUl.appendChild(div);
};

document
  .getElementById("inputButton")!
  .addEventListener("click", () => onClickAdd());

document
  .getElementById("inputButton")!
  .addEventListener("click", () => onClickAdd());
