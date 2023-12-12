function getRandomIntInclusive(min, max) {
    // [min, max]
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$(function () {
    $("#next").click(function () {
        $("#question").text("【問題】"+arr[getRandomIntInclusive(2,5396)][6]);
    })

});

$(function () {
    $("#a1-1").click(function () {
        $("#a1-1").html('<span class="answer">けつがん</span>');
    })

});
