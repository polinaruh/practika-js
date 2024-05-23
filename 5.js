let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о','л', 'д', 'ж', 'э', 'я', 
    'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю', ' ', 'Caps Lock'];
let capsLock = false;
let elem = document.querySelector('#elem');
let keyb = document.querySelector('#keyboard');
arr.forEach(function (key) {
    let btn = document.createElement('button');
    btn.textContent = key;
    btn.addEventListener('click', function () {
        if (key === 'Caps Lock') {
            capsLock = !capsLock;
            return;
        }
        if (capsLock) {
            elem.value += key.toUpperCase();
        } else {
            elem.value += key;
        }
    });
    keyb.appendChild(btn);
});