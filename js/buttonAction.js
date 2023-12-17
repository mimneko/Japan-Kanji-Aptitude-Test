function getRandomIntInclusive(min, max) {
    // [min, max]
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$(function () {
    $("#next").click(function () {
        let i = getRandomIntInclusive(2, 5);
        $("#question").html("【問題】" + arr[i][0] +'<span class="empha">'+ arr[i][1] +'</span>'+ arr[i][2]);
    })
});

$(function () {
    let htmlId = "#a1-1"
    $(htmlId).click(function () {
        $(htmlId).html('<span class="answer">けつがん</span>');
    })
});

$(function () {
    let htmlId = "#a1-2"
    $(htmlId).click(function () {
        $(htmlId).html('<span class="answer">ちんせい</span>');
    })
});

$(function () {
    let htmlId = "#a1-3"
    $(htmlId).click(function () {
    $(htmlId).html('<span class="answer">' + arr[getRandomIntInclusive(2, 5396)][6] + '</span>');
    })
});
/*
document.getElementById("#a1-4").onclick = function() {
  this.html('<span class="answer">ちんせい</span>');
};
*/
