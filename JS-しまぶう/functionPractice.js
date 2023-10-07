// function isTweetable(text) {
//   return text.length <= 140;
// }


// 関数式(変数に関数を入れたもの)
// const isTweetable = function (text) {
//   return text.length <= 140;
// };

// console.log(isTweetable("foo"));

//コールバック関数について理解する
//引数に関数を入れる
function name(params) {
    
}


function unfollow(){
    console.log("フォローを外しました");
}

function cancelTweet() {
    console.log("ツイートをキャンセルしました");
}

function confirmed(fn){
    if (window.confirm("実行しますか？")) {
        fn();
    }
}


confirmed(unfollow);
confirmed(cancelTweet);
