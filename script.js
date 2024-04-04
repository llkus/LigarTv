document.getElementById('powerButton').addEventListener('click', function() {
    var screen = document.getElementById('screen');
    if (screen.style.backgroundColor === 'black') {
        screen.style.backgroundColor = 'white';
    } else {
        screen.style.backgroundColor = 'black';
    }
});