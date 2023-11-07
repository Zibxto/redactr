function scramble_func() {
    let content = document.forms["myform"]["content"].value
    let word = document.forms["myform"]["word"].value
    let symbol = document.forms["myform"]["symbol"].value
    let result
    word = word.split(" ")
    let regx = new RegExp(word.join("|"), "g")

    console.log(symbol)

    if (symbol) {
        result = content.replace(regx, function(word){
            return symbol.repeat(word.length)
        })
    }

    else {
        result = content.replace(regx, function(word){
            return "*".repeat(word.length)
        })
    }

    document.getElementById('op').innerText = result
    return false
}