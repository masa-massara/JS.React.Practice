// 文字数をカウントする関数
function countCharacters(text) {
    return text.length <= 140;
}

console.log(countCharacters("foo"));


function alertCharacters(text){
    if (text<=140) {
        alert("You can tweet");
    }
    else{alert("You can't tweet");}
}

alertCharacters("foo");
