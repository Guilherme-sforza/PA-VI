
var btn = 't';

function f_fireball()
{
    var btn1 = document.getElementById('fireball_btn');
    if(btn == 't'){
        btn1.value = 'clicked';
        btn = 'f';
    }else{
        btn1.value='fireball';
        btn='t';
    }
}

function f_punch()
{
    var btn1 = document.getElementById('punch_btn');
    if(btn == 't'){
        btn1.value = 'clicked';
        btn = 'f';
    }else{
        btn1.value='punch';
        btn='t';
    }
}