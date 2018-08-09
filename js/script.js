var evilEye = {
    borderBottomRightRadius: '110px',
    borderBottomLeftRadius: '110px',
    backgroundColor: '#860111'
}

$('.android').on("click", function(){
    $('.head').css("background","#666");
    $('.head > div').css("background","#666")
    $('.left-eye').css(evilEye);
    $('.right-eye').css(evilEye);
    $('.body').css("background","#666");
    $('.body > div').css("background","#666");
    






});