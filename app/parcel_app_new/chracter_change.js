var i=1;
var x=1; 
var ia=1;
var ib=1;
var ar=new Array();
var br=new Array();
ar[0]='url(./mid圖片/head03-05.png)';
ar[1]='url(./mid圖片/head-05.png)';
ar[2]='url(./mid圖片/head02-05.png)';
br[0]='url(./mid圖片/clothes02-08.png)';
br[1]='url(./mid圖片/clothes01-08.png)';
br[2]='url(./mid圖片/clothes03-08.png)';

function slide_photos(x){
    switch(x){
        case 1:
            $("#head").css('backgroundImage',ar[i]);
            break;
        case 2:
            $("#cloth").css('backgroundImage',br[i]);
            break;
        default:
            break;
    }
}

$("#left").click(function(){
    if(i>0){
        i--;
    }
    //選擇框框滑動
    if(i==0){
        $("#choice1").css("border-style","solid");
        $("#choice2").css("border-style","none");
        $("#choice3").css("border-style","none");
    }
    else if(i==1){
        $("#choice1").css("border-style","none");
        $("#choice2").css("border-style","solid");
        $("#choice3").css("border-style","none");
    }
    slide_photos();
    switch(x){
        case 1:
            ia=i;
            return ia;
        case 2:
            ib=i;
            return ib;
        default:
            break;
    }
    return i;
});
$("#right").click(function(){
    if(i<1){
        i++;
    }
    if(i==1){
        $("#choice1").css("border-style","none");
        $("#choice2").css("border-style","solid");
        $("#choice3").css("border-style","none");
    }
    // else if(i==2){
    //     $("#choice1").css("border-style","none");
    //     $("#choice2").css("border-style","none");
    //     $("#choice3").css("border-style","solid");
    // }
    slide_photos(i);
    switch(x){
        case 1:
            ia=i;
            return ia;
        case 2:
            ib=i;
            return ib;
        default:
            break;
    }
    return i;
});
$("#hairlogo").click(function(){
    x=1;
    i=ia;
    var tmp=ia+1;
    $("#choice1").css('backgroundImage','url(./mid圖片/hair_style02-08.png)');
    $("#choice2").css('backgroundImage','url(./mid圖片/hair_style03-08.png)');
    $("#choice3").css('backgroundImage','url(./mid圖片/hair_style1-08.png)');
    $("#selectframe").css('top','20vh');
    $("#selectframe").css('left','6vw');
    switch(ia){
        case 0:
            $("#choice1").css("border-style","solid");
            $("#choice2").css("border-style","none");
            $("#choice3").css("border-style","none");
            break;
        case 1:
            $("#choice1").css("border-style","none");
            $("#choice2").css("border-style","solid");
            $("#choice3").css("border-style","none");
            break;
        case 2:
            $("#choice1").css("border-style","none");
            $("#choice2").css("border-style","none");
            $("#choice3").css("border-style","solid");
            break;
        default:
            break;    
    }
    $("#levellimit1").css('opacity','1');
    $("#levellimit2").css('opacity','0');
});
$("#clotheslogo").click(function(){
    x=2;
    i=ib;
    var tmp=ib+1;
    $("#choice1").css('backgroundImage',br[0]);
    $("#choice2").css('backgroundImage',br[1]);
    $("#choice3").css('backgroundImage',br[2]);
    $("#selectframe").css('top','20vh');
    $("#selectframe").css('left','28vw');
    switch(ib){
        case 0:
            $("#choice1").css("border-style","solid");
            $("#choice2").css("border-style","none");
            $("#choice3").css("border-style","none");
            break;
        case 1:
            $("#choice1").css("border-style","none");
            $("#choice2").css("border-style","solid");
            $("#choice3").css("border-style","none");
            break;
        case 2:
            $("#choice1").css("border-style","none");
            $("#choice2").css("border-style","none");
            $("#choice3").css("border-style","solid");
            break;
        default:
            break;    
    }
    $("#levellimit1").css('opacity','0');
    $("#levellimit2").css('opacity','1');
});

/*
$("#comfirm").click(function(){
    window.location.href="https://luffy.ee.ncku.edu.tw/~ArthurYong/homework/mid2.html";
    
    // fs.readFile('mid.json', (err, data) => {
    //     if (err) throw err;
    //     let student = JSON.parse(data)
    //     student["head"] = ar[ia]
    //     student["cloth"] = br[ib]
    //     var tmp = JSON.stringify(student)
    //     fs.writeFile('students.json', tmp, err => {
    //       if (err) {
    //         console.error(err)
    //         return
    //       }
    //     })
    //   });
});
$("#back").click(function(){
    window.location.href="https://luffy.ee.ncku.edu.tw/~ArthurYong/homework/mid2.html";


});
*/