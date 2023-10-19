const onClickAdd = () => {
  // テキストの取得と入力欄の初期化
  const element: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("add-text")
  );
  const value: string = element.value;
  element.value = "";

  
};

document
  .getElementById("inputButton")!
  .addEventListener("click", () => onClickAdd());
