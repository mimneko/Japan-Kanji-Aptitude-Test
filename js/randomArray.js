// https://gray-code.com/javascript/shuffle-for-item-of-array/
// https://techblg.app/articles/how-to-create-array-containing-0-n/
function randomArray(max) {
  let array=[...Array(max).keys()];
  
  for(let i = (array.length - 1); 0 < i; i--){
    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  
  return array;
}


let array=randomArray(100)
console.log(array);
