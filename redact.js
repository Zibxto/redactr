function scramble_func() {
    let content = document.forms["myform"]["content"].value
    let word = document.forms["myform"]["word"].value
    let symbol = document.forms["myform"]["symbol"].value
    let result
    let ws = content.split(" ")
    word = word.split(" ")
    let regx = new RegExp(word.join("|"), "g")

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

    // number of words scanned
    document.querySelector('#ws').textContent = ws.length

    // number of words scrambled
    let array_words_scrambled = result.split(" ")
    let no_words_scrambled = 0
    for (item of array_words_scrambled) {
        for (let index = 0; index < item.length; index++) {
            if (item[index] == "*" || item[index] == symbol) {
                no_words_scrambled++
                break
            }
        }
    }
    document.querySelector('#nws').textContent = no_words_scrambled

    // number of characters scrambled
    let no_char_scrambled = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "*" || result[i] == symbol) {
            no_char_scrambled++
        }
    }
    document.querySelector('#ns').textContent = no_char_scrambled

    // show hidden result and stat fields
    document.querySelector('.result').style.display = 'block'
    document.querySelector('.stat').style.display = 'block'

    // automatically scroll the page vertically
    window.scrollTo(0, 1000)
    return false
}