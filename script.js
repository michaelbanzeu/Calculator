const btnBackspace = document.getElementById('erase');
btnBackspace.addEventListener('click', backspace);

function backspace() {
    const entry = document.getElementById('txt').value;
    document.getElementById('txt').value = entry.substr(0, entry.length - 1);
}