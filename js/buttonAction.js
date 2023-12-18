$(function () {
    // ページに入ったとき（元々の問題文は空白にしといた方がいいかも？）
    const randomQuestions = new RandomizedQuestions();
    function pageWrite() {
        for (let i = 0; i < randomQuestions.sizeQAs(); i++) $(randomQuestions.getQ_id(i)).html(randomQuestions.getQuestion(i));
        for (let i = 0; i < randomQuestions.sizeOs(); i++) $(randomQuestions.getO_id(i)).html(randomQuestions.getOption(i));
    }
    pageWrite();

    // 解答ボタン
    for (let i = 0; i < randomQuestions.sizeQAs(); i++) {
        $(randomQuestions.getA_id(i)).click(function () {
            $(randomQuestions.getA_id(i)).html('<span class="answer">' + randomQuestions.getAnswer(i) + '</span>');
        })
    }

    // リセットボタン
    $(".reset").click(function () {
        //console.log(randomQuestions.tbl1_20[2][3]);

        randomQuestions.randomize();
        //console.log(randomQuestions.index);
        for (let i = 0; i < randomQuestions.sizeQAs(); i++) {
            $(randomQuestions.getA_id(i)).html('<span class="answer-btn">解答</span>');

        }
        pageWrite();

    })
});
