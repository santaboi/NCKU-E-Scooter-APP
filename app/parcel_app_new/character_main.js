$("#wardrobe").click(function () {
    //window.location.href = "https://luffy.ee.ncku.edu.tw/~ArthurYong/homework/mid.html";
    console.log(global_w_head_cls)
    console.log(global_body_cls)
    console.log(global_cloth_cls)
    console.log(global_pants_cls)
    console.log(global_shoes_cls)
});

//$("#homeicon").click(function () {
//    window.location.href = "https://luffy.ee.ncku.edu.tw/~santaboi/NCKU-E_scooter-app/dist/parcel_app_new/app.html";
//});

$('#side_bar').css('display' , 'none')
$(document).ready(function () {
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
});