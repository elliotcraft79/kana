var timer_elem = document.getElementById('timer'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t, started;
var count = 0;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    timer_elem.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function stop_timer() {
    clearTimeout(t);
}

function clear_timer() {
    timer_elem.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}

document.getElementById('reset').onclick = function () {
    stop_timer()
    clear_timer()
    count = 0;
    update_text()
    document.getElementById('finished').hidden = true;
    shuffle()
    started = false;
}

function shuffle() {
    var elems = document.getElementsByClassName("japanese");
    for (var e = 0; e < elems.length; e++) {
        document.getElementById("answers").appendChild(elems.item(e));
    }
    var ul = document.getElementById('answers');
    var answers = document.getElementsByClassName('japanese');
    console.log(answers.length);
    for (var i = answers.length; i >= 0; i--) {
        var elem = answers[Math.random() * i | 0];
        console.log(ul.appendChild(elem));
        console.log(i);
    }
}
shuffle()

function update_text() {
    document.getElementById('count').innerText = count.toString();
}
