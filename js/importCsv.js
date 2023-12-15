let arr = [];

window.onload = function () {
	//出力場所を探す
	let output = document.getElementById("output");
	//CSVの指定
    getCsv('semi-1.csv');

    //CSVの取り込み
    function getCsv(data) {
        // HTTPでファイルを読み込む
        let xhr = new XMLHttpRequest();
        //取得するファイルの設定
        xhr.open("GET", data, true);
        //レスポンスの確認
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {//4は完了
                if (xhr.status === 200) {//Done or load
                    //console.log(xhr.responseText);
                    let responce = xhr.responseText;
                    csvArr(responce);
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        //リクエストの要求送信
        xhr.send(null);
    }

    //CSVを配列に格納 dataArrはレスポンス
    function csvArr(dataArr) {
        let list = dataArr.split('\n');
        //帰ってきているレスポンスを配列に格納する
        for (let i = 0; i < list.length; i++) {
            arr[i] = list[i].split(',');
        }
        //console.log(arr);
        htmlWrite(arr);//出力をtableに設定する
    }

    //出力のタグを設定
    function htmlWrite(dataList) {
        let insert = "";
        dataList.forEach(element => {
            insert += '<tr>';
            element.forEach((childElement) => {
                insert += `<td>${childElement}</td>`;
            });
            insert += '</tr>'
        });

        //HTMLに出力
        // https://opty-life.com/study/program/cannot-set-property-innerhtml-of-null/
        output.innerHTML = insert;
    }
}
