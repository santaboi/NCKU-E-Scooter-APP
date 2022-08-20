var current_img_cls = "img1"
//demo 用(合併list 一下)
var naked_list = ["img1", "img2", "img3", "imga", "imgb", "imgc"]
var dressed_list = ["imga", "imgb", "imgc"]

//window.onload = function () {
    //    $('.main_character_cls').addClass("img1");
    //};
//main_character (load default img1)
$('.main_character_cls').addClass("img1");

//modal (not used anymore)
//var myModal = document.getElementById('myModal')
//var myInput = document.getElementById('myInput')
//
//myModal.addEventListener('shown.bs.modal', function () {
//    myInput.focus()
//})
var timer_interval

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timer_interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//jQuery(function ($) {
//    var tenMinutes = 60 * 10 , display = $('#time_show');
//    startTimer(tenMinutes, display);
//});

var tenMinutes = 60 * 10,
    display = $('#time_show');
var random_battery = 85 ;
var random_car_id = 11 ;

$(document).ready(function () {
    $('#scan-icon').click(function () {
        $('#countdown_box').hide('slow');

    });
    $('#scooter_dl_btn').click(function () {
        $('#countdown_box').hide('slow');
        $('#div-pop').hide('slow');
        //clear pre 10:00
        clearInterval(timer_interval);

    });
    $('#banner_btn2').click(function () {
        $('#div-pop').show('slow');

    });
    $('#safety_close').click(function () {
        $('#safety_info').hide('slow');
        $('#div-pop').hide('slow');

    });
    $('#safety_confirm').click(function () {
        $('#safety_info').hide('slow');
        $('#countdown_box').show('slow');
        //random (b1-011 and battery)
        random_battery = Math.floor(Math.random() * 39) + 60;
        random_car_id = Math.floor(Math.random() * 30) + 10;
        //$('#random_car_id').text(random_car_id)
        //$('#text_box_3').text(random_battery)
        $('.car_id_class').text(random_car_id)
        $('.car_battery_class').text(random_battery)
        //10:00
        startTimer(tenMinutes, display);
    });
    $('#car_rent_btn').click(function () {
        //console.log("fuck nav toggle")
        if ($('#countdown_box').css('display') == 'none') {
            $('#safety_info').show('slow');
        } else if ($('#countdown_box').css('display') == 'block') {
            $('#safety_info').hide('slow');
        }
    });
    $('#nav_toggle_btn').click(function(){
        //console.log("fuck nav toggle")
        if ($('#system_banner').css('display') == 'none') { 
            $('#system_banner').show('slow');
            //$('#system_banner').css('display') = 'block';
        } else if ($('#system_banner').css('display') == 'block'){
            $('#system_banner').hide('slow');
            //$('#system_banner').css('display') = 'none';
        }
        
    });
    $('#nav_toggle_button').click(function () {
        //console.log("fuck2024")
        if ($('#side_bar').css('display') == 'none') {
            $('.bi.bi-list').css('color', 'black');
            //$('#nav_toggle_button').css('transform', 'rotate(0)');
            $('#nav_toggle_button').addClass('rotated')
            $('#side_bar').show('slow');
        } else {
            //$('.bi.bi-list').css('color', 'white');
            $('#nav_toggle_button').removeClass('rotated')
            $('#side_bar').hide('slow');
        }
    });

    $('#main_character').click(function () {
        let index = 0
        if (naked_list.includes(current_img_cls)){
            $('.main_character_cls').removeClass(current_img_cls);
            //3 -> 6 (demo 用)
            for (let i = 0 ; i < 6 ; i++){
                if(naked_list[i] == current_img_cls){
                    if (i == 5)
                        index = 0
                    else
                        index = i + 1
                }
            }
            console.log(naked_list[index])
            $('.main_character_cls').addClass(naked_list[index]);
            current_img_cls = naked_list[index]
        } else if (dressed_list.includes(current_img_cls)){
            $('.main_character_cls').removeClass(current_img_cls);
            for (let i = 0; i < 3; i++) {
                if(dressed_list[i] == current_img_cls){
                    if(i==2)
                        index = 0
                    else
                        index = i + 1
                }
            }
            console.log(dressed_list[index])
            $('.main_character_cls').addClass(dressed_list[index]);
            current_img_cls = dressed_list[index]
        }
        
    });

});