let str = "";

function takeInput(value) {
    console.log(value);
    if (value === 'clear') {
        str = "";
    } else if (value === '=') {
        let res = eval(str);
        document.getElementById("resultBox").value = res;
        str = res.toString();
    } else {
        str = str + value;
    }
    console.log(str);
    document.getElementById('resultBox').value = str;
}
