// receive messages from main thread
onmessage = function(ev) {
    var n = ev.data;
    var num = [];
    num = n.split(",");

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 0 || num[i] === 1) {
            postMessage(num[i]);
        }
        for (var j = num[i] - 1; j >= 1; j--) {
            num[i] *= j;
        }
        postMessage("Factorial:" + num);
    }
};