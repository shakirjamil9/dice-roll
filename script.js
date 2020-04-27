$('button').click(function () {
    let p1name = $('#p1').val();
    let p2name = $('#p2').val();
    if (p1name, p2name == "" || null) {
        alert("Please type Your Name")
        return false;
    }
    let _randomNum = Math.floor(Math.random() * 6 + 1)
    let _randomNum2 = Math.floor(Math.random() * 6 + 1)
    $('.container').html(`<img src="dice${_randomNum}.png" id="p1img" alt=""> <img src="dice${_randomNum2}.png" id="p2img" alt="">`)
    if (_randomNum > _randomNum2) {
        $('h1').html(`${p1name} won`)
    } else if (_randomNum == _randomNum2) {
        $('h1').html('Draw Match')
    } else {
        $('h1').html(`${p2name} won`)
    }
})