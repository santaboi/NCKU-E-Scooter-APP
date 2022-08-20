$(document).ready(function () {
    $('#import_btn').click((event) => {
        event.preventDefault()
        //
        console.log("crawling , please wait....")
        setTimeout(() => { $('span').show('slow'); }, 8000);
        $.get('/table', {
            student_id : "E94081107" ,
            student_secret : "##########"
        }, (data) => {
            if (data) {
                //$('#show_name1').attr("placeholder", data[0])
            }
            else {
                console.log("show_name error")
            }
        })
    });
    $('#toggle_class_btn').click((event)=>{
        console.log("fuck2022")
        $('span').text(" ");
        $('.text-uppercase').css('padding' , "0px!important")
    });
})