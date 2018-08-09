var evilEye = {
    borderBottomRightRadius: '110px',
    borderBottomLeftRadius: '110px',
    backgroundColor: '#860111'
};

var evilAndroid = {
    background: "#666"
};

var sweetAndroid = {
    background: '#A4CA39'
}

var sweetEye = {
    borderRadius:'10px',
    backgroundColor: 'white'
}

var isEvil = false; 

$('.android').on("dblclick", function(){
    if(!isEvil) {
        $('.head').css(evilAndroid);
        $('.head > div').css(evilAndroid);
        $('.body').css(evilAndroid);
        $('.body > div').css(evilAndroid);
        $('.left-eye').css(evilEye);
        $('.right-eye').css(evilEye);
        $('h1').text("Don't you dare click on me, you filthy mouse cursor >_< !!");
        isEvil = true;
        console.log(isEvil);
    }
    else {
        $('.head').css(sweetAndroid);
        $('.head > div').css(sweetAndroid);
        $('.body').css(sweetAndroid);
        $('.body > div').css(sweetAndroid);
        $('h1').text("Hello I am Android !!");
        $('.left-eye').css(sweetEye);
        $('.right-eye').css(sweetEye);
        isEvil = false;
        console.log(isEvil);
    }
});