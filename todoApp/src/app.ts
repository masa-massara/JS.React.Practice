const doUl = document.getElementById("doUl");
const element: HTMLInputElement =<HTMLInputElement>document.getElementById('addText');
const value: string = element.value;

const clickInput = () => {
  const inputText = value;
  console.log(inputText);
};
