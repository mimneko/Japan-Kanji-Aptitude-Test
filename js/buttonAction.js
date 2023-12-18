$(function () {
    // ページを訪れたとき
    const randomQuestions = new RandomizedQuestions();
    function pageWrite() {
        for (let i = 0; i < randomQuestions.getQuestionCount(); i++) $(randomQuestions.getQuestionId(i)).html(randomQuestions.getQuestion(i));
        for (let i = 0; i < randomQuestions.getOptionCount(); i++) $(randomQuestions.getOptionId(i)).html(randomQuestions.getOption(i));
    }
    pageWrite();

    // 解答ボタン
    for (let i = 0; i < randomQuestions.getAnswerCount(); i++) {
        $(randomQuestions.getAnswerId(i)).click(function () {
            $(randomQuestions.getAnswerId(i)).html('<span class="answer">' + randomQuestions.getAnswer(i) + '</span>');
        })
    }

    // リセットボタン
    $(".reset").click(function () {
        //console.log(randomQuestions.tbl1_20[2][3]);

        randomQuestions.randomize();
        //console.log(randomQuestions.index);
        for (let i = 0; i < randomQuestions.getAnswerCount(); i++) {
            $(randomQuestions.getAnswerId(i)).html('<span class="answer-btn">解答</span>');

        }
        pageWrite();

    })
});
