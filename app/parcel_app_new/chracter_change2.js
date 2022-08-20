//store each "select_num" (0~2)
var select_dict = {
    "hairlogo": 0,
    "costumeslogo": 0,
    "clotheslogo": 0,
    "trouserslogo": 0,
    "shoeslogo": 0
}

//default (get from json)
$('#head').addClass('hd1')
//$('#cloth').addClass('clth1')
$('#body').addClass('bd1')
//$('#pants').addClass('pts1')
//$('#shoes').addClass('sho1')



//footer (choosing) list
var global_choosing_list ;
var w_head_list = ["hd1", "hd2", "hd3"]
var body_list = ["bd1", "bd2", "bd3"]
var cloth_list = ["clth1", "clth2", "clth3"]
var pants_list = ["pts1", "pts2", "pts3"]
var shoes_list = ["sho1", "sho2", "sho3"]


var footer_dict = {
    0: w_head_list,
    1: body_list,
    2: cloth_list,
    3: pants_list,
    4: shoes_list
}
                                

var logo_dict  = [ "hairlogo", "costumeslogo", "clotheslogo", "trouserslogo", "shoeslogo"]
var logo_limit = {
    0: 2,
    1: 2,
    2: 2,
    3: 2,
    4: 2,
}

var footer_list = ["#choice1", "#choice2", "#choice3"]

//default footer
$('#choice1').addClass(footer_dict[0][0])
$('#choice2').addClass(footer_dict[0][1])
$('#choice3').addClass(footer_dict[0][2])

/************************************跨頁面使用 **********************************/
//global image url
var global_w_head_cls = 'hd1'
var global_cloth_cls = 'clth1'
var global_body_cls = 'bd1'
var global_pants_cls = 'pts1'
var global_shoes_cls = 'sho1'

//click to select 
var footer_type = 0
var select_num = 0
/************************************跨頁面使用 **********************************/



$(document).ready(function () {
    $('#hairlogo').click(function (){
        console.log("hairlogo")
        //border on
        $('#hairlogo').css('border' , 'solid')
        $('#hairlogo').css('border-color', 'white')
        //pre_border off
        $(`#${logo_dict[footer_type]}`).css('border', 'none')

        $('#choice1').removeClass(footer_dict[footer_type][0])
        $('#choice2').removeClass(footer_dict[footer_type][1])
        $('#choice3').removeClass(footer_dict[footer_type][2])
        footer_type = 0 
        $('#choice1').addClass(footer_dict[footer_type][0])
        $('#choice2').addClass(footer_dict[footer_type][1])
        $('#choice3').addClass(footer_dict[footer_type][2])

        select_num = 0
    });
    $('#costumeslogo').click(function () {
        console.log("costumeslogo")
        //border on
        $('#costumeslogo').css('border', 'solid')
        $('#costumeslogo').css('border-color', 'white')
        //pre_border off
        $(`#${logo_dict[footer_type]}`).css('border', 'none')

        $('#choice1').removeClass(footer_dict[footer_type][0])
        $('#choice2').removeClass(footer_dict[footer_type][1])
        $('#choice3').removeClass(footer_dict[footer_type][2])
        footer_type = 1
        $('#choice1').addClass(footer_dict[footer_type][0])
        $('#choice2').addClass(footer_dict[footer_type][1])
        $('#choice3').addClass(footer_dict[footer_type][2])

        select_num = 0
    });
    $('#clotheslogo').click(function () {
        console.log("clotheslogo")
        //border on
        $('#clotheslogo').css('border', 'solid')
        $('#clotheslogo').css('border-color', 'white')
        //pre_border off
        $(`#${logo_dict[footer_type]}`).css('border', 'none')

        $('#choice1').removeClass(footer_dict[footer_type][0])
        $('#choice2').removeClass(footer_dict[footer_type][1])
        $('#choice3').removeClass(footer_dict[footer_type][2])
        footer_type = 2
        $('#choice1').addClass(footer_dict[footer_type][0])
        $('#choice2').addClass(footer_dict[footer_type][1])
        $('#choice3').addClass(footer_dict[footer_type][2])

        select_num = 0
    });
    $('#trouserslogo').click(function () {
        console.log("trouserslogo")
        //border on
        $('#trouserslogo').css('border', 'solid')
        $('#trouserslogo').css('border-color', 'white')
        //pre_border off
        $(`#${logo_dict[footer_type]}`).css('border', 'none')

        $('#choice1').removeClass(footer_dict[footer_type][0])
        $('#choice2').removeClass(footer_dict[footer_type][1])
        $('#choice3').removeClass(footer_dict[footer_type][2])
        footer_type = 3
        $('#choice1').addClass(footer_dict[footer_type][0])
        $('#choice2').addClass(footer_dict[footer_type][1])
        $('#choice3').addClass(footer_dict[footer_type][2])

        select_num = 0
    });
    $('#shoeslogo').click(function () {
        console.log("shoeslogo")
        //border on
        $('#shoeslogo').css('border', 'solid')
        $('#shoeslogo').css('border-color', 'white')
        //pre_border off
        $(`#${logo_dict[footer_type]}`).css('border', 'none')

        $('#choice1').removeClass(footer_dict[footer_type][0])
        $('#choice2').removeClass(footer_dict[footer_type][1])
        $('#choice3').removeClass(footer_dict[footer_type][2])
        footer_type = 4
        $('#choice1').addClass(footer_dict[footer_type][0])
        $('#choice2').addClass(footer_dict[footer_type][1])
        $('#choice3').addClass(footer_dict[footer_type][2])

        select_num = 0
    });

    /*****************************************************************/
    $('#right').click(function () { 
        let limitation = logo_limit[footer_type]
        $(footer_list[select_num]).css('border', 'none')
        $(footer_list[select_num]).css('border-color', 'white')
        if (select_num == limitation)
            select_num = 0
        else
            select_num++
        
        $(footer_list[select_num]).css('border', 'solid')
        $(footer_list[select_num]).css('border-color', 'white')

        //choose img
        select_dict[logo_dict[footer_type]] = select_num
        //new global
        if (footer_type == 0) {
            $('#head').removeClass(global_w_head_cls)
            global_w_head_cls = w_head_list[select_dict["hairlogo"]]
            $('#head').addClass(global_w_head_cls)
        }
        if (footer_type == 1) {
            $('#body').removeClass(global_body_cls)
            global_body_cls = body_list[select_dict["costumeslogo"]]
            $('#body').addClass(global_body_cls)
        }
        if (footer_type == 2) {
            $('#cloth').removeClass(global_cloth_cls)
            global_cloth_cls = cloth_list[select_dict["clotheslogo"]]
            $('#cloth').addClass(global_cloth_cls)
        }
        if (footer_type == 3) {
            $('#pants').removeClass(global_pants_cls)
            global_pants_cls = pants_list[select_dict["trouserslogo"]]
            $('#pants').addClass(global_pants_cls)
        }
        if (footer_type == 4) {
            $('#shoes').removeClass(global_shoes_cls)
            global_shoes_cls = shoes_list[select_dict["shoeslogo"]]
            $('#shoes').addClass(global_shoes_cls)
        }
    })
    $('#left').click(function () { 
        let limitation = logo_limit[footer_type]
        $(footer_list[select_num]).css('border', 'none')
        $(footer_list[select_num]).css('border-color', 'white')
        if (select_num == 0)
            select_num = limitation
        else
            select_num--
        $(footer_list[select_num]).css('border', 'solid')
        $(footer_list[select_num]).css('border-color', 'white')

        //choose img
        select_dict[logo_dict[footer_type]] = select_num
        //new global
        if (footer_type == 0) {
            $('#head').removeClass(global_w_head_cls)
            global_w_head_cls = w_head_list[select_dict["hairlogo"]]
            $('#head').addClass(global_w_head_cls)
        }
        if (footer_type == 1) {
            $('#body').removeClass(global_body_cls)
            global_body_cls = body_list[select_dict["costumeslogo"]]
            $('#body').addClass(global_body_cls)
        }
        if (footer_type == 2) {
            $('#cloth').removeClass(global_cloth_cls)
            global_cloth_cls = cloth_list[select_dict["clotheslogo"]]
            $('#cloth').addClass(global_cloth_cls)
        }
        if (footer_type == 3) {
            $('#pants').removeClass(global_pants_cls)
            global_pants_cls = pants_list[select_dict["trouserslogo"]]
            $('#pants').addClass(global_pants_cls)
        }
        if (footer_type == 4) {
            $('#shoes').removeClass(global_shoes_cls)
            global_shoes_cls = shoes_list[select_dict["shoeslogo"]]
            $('#shoes').addClass(global_shoes_cls)
        }
    })

    $('#comfirm').click((event) => {
        event.preventDefault()
        $.get('/update_character', {
            glb_head: global_w_head_cls,
            glb_cloth: global_cloth_cls,
            glb_body: global_body_cls,
            glb_pants: global_pants_cls,
            glb_shoes: global_shoes_cls,
        }, (data) => {
            if (data) {
                console.log("json success")
            }
            else {
                console.log("show_name error")
            }
        })
    });
})


