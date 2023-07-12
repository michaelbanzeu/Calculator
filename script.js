function backspace() {
    var erase = document.getElementById("txt").value;
    document.getElementById("txt").value = erase.substr(0, erase.length - 1);
}