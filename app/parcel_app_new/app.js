var div = document.getElementById("div-pop");
var preloader = document.getElementById("preloader");
var close = document.getElementById("close-button");
var main_scan = document.getElementById("main-scan");
var scan_icon = document.getElementById("scan-icon");
var success = document.getElementById("success");
var success_pop = document.getElementById("success-pop");
var fail = document.getElementById("fail");
var pay = document.getElementById("pay");
var rescan = document.getElementById("rescan");
var scan = document.getElementById("scan");
var stop_scan = document.getElementById("stop-scan");
var info = document.getElementById("info");
var time = document.getElementById("time");
var end = document.getElementById("end");
var success_content = document.getElementById("success-content");
var start_loacation = '電機系館站';
var end_loacation = '工設系館站';
var rent_success = false;

console.log(rent_success)

setTimeout(function(){
  $('#div-pop').show('slow');
},6000);

document.getElementById("start-pop").textContent = '起始站點：'+ start_loacation;
document.getElementById("end-pop").textContent = '目標站點：'+ end_loacation;

//pay.onclick = function succes_close() {
//  success.style.display = "none";
//};

close.onclick = function div_close() {
  div.style.display = "none";
};

main_scan.onclick = function main_scan() {
  Html5Qrcode.getCameras()
    .then((devices) => {
      if (devices && devices.length) {
        setTimeout(function(){
          scan.style.display = "block";
          stop_scan.style.display = "block";
        },2500);
        var cameraId = devices[0].id;
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          scan.style.display = 'none';
          if (decodedText == "https://success.com.tw") {
            rent_success = true;
            console.log(rent_success);

            window.onload =  ShowTime();
            function ShowTime() {
              var NowDate = new Date();
              var h = NowDate.getHours();
              var m = NowDate.getMinutes();
              var s = NowDate.getSeconds();
              document.getElementById("showbox").innerHTML = h + "時" + m + "分" + s + "秒";
            }

            document.getElementById("start").textContent = '起始站點：'+ start_loacation;
            success_content.setAttribute("style", "margin-top:10%");
            end.style.display = "none";
            success.style.display = "block";
            info.style.display = "block";
            time.style.display = "block";

            var temp = new Date();
            function checktime(){
                var now = new Date(),
                    diff = new Date(now - temp);
                document.getElementById("check-time").innerText = diff.Myformat();
            }
            Date.prototype.Myformat = function(){
                return ("0"+this.getUTCMinutes()).slice(-2)+":"+("0"+this.getUTCSeconds()).slice(-2)
            }
            setInterval(checktime, 1000);

          } else if (decodedText == "https://fail.com.tw") {
            fail.style.display = "block";
          }
        };

        const config = {
          fps: 25,
          aspectRatio: 0.461,
          qrbox: {
            width: 250,
            height: 250
          }
        };
        html5QrCode.start(
          {
            facingMode: "environment"
          },
          config,
          qrCodeSuccessCallback
        );

        stop_scan.onclick = function close() {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          scan.style.display = "none";
        };
      }
    })
    .catch((err) => {
      // handle err
      console.log(err)
    });
};

scan_icon.onclick = function qrcode() {
  Html5Qrcode.getCameras()
    .then((devices) => {
      if (devices && devices.length) {
        div.style.display = "none";
        setTimeout(function(){
          scan.style.display = "block";
          stop_scan.style.display = "block";
        },2500);

        var cameraId = devices[0].id;
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          div.style.display = "none";
          scan.style.display = 'none';
          if (decodedText == "https://success.com.tw") {
            rent_success = true;
            console.log(rent_success);

            window.onload =  ShowTime();
            function ShowTime() {
              var NowDate = new Date();
              var h = NowDate.getHours();
              var m = NowDate.getMinutes();
              var s = NowDate.getSeconds();
              document.getElementById("showbox").innerHTML = h + "點" + m + "分" + s + "秒";
            }

            document.getElementById("start").textContent = '起始站點：'+ start_loacation;
            document.getElementById("end").textContent = '目標站點：'+ end_loacation;
            success.style.display = "block";
            info.style.display = "block";
            time.style.display = "block";

            var temp = new Date();
            function checktime(){
                var now = new Date(),
                    diff = new Date(now - temp);
                document.getElementById("check-time").innerText = diff.Myformat();
            }
            Date.prototype.Myformat = function(){
                return ("0"+this.getUTCMinutes()).slice(-2)+":"+("0"+this.getUTCSeconds()).slice(-2)
            }
            setInterval(checktime, 1000);

          } else if (decodedText == "https://fail.com.tw") {
            fail.style.display = "block";
          }
        };

        const config = {
          fps: 25,
          aspectRatio: 0.461,
          qrbox: {
            width: 250,
            height: 250
          }
        };
        html5QrCode.start(
          {
            facingMode: "environment"
          },
          config,
          qrCodeSuccessCallback
        );

        stop_scan.onclick = function close() {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          div.style.display = "none";
          scan.style.display = "none";
        };
      }
    })
    .catch((err) => {
      // handle err
      console.log('error')
    });
};

rescan.onclick = function rescan() {
  fail.style.display = "none";
  Html5Qrcode.getCameras()
    .then((devices) => {
      if (devices && devices.length) {
        div.style.display = "none";
        setTimeout(function(){
          scan.style.display = "block";
          stop_scan.style.display = "block";
        },2500);

        var cameraId = devices[0].id;
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          div.style.display = "none";
          scan.style.display = 'none';
          if (decodedText == "https://success.com.tw") {
            rent_success = true;
            console.log(rent_success);

            window.onload =  ShowTime();
            function ShowTime() {
              var NowDate = new Date();
              var h = NowDate.getHours();
              var m = NowDate.getMinutes();
              var s = NowDate.getSeconds();
              document.getElementById("showbox").innerHTML = h + "點" + m + "分" + s + "秒";
            }
            
            document.getElementById("start").textContent = '起始站點：'+ start_loacation;
            success_content.setAttribute("style", "margin-top:10%");
            end.style.display = "none";
            success.style.display = "block";
            info.style.display = "block";
            time.style.display = "block";

            var temp = new Date();
            function checktime(){
                var now = new Date(),
                    diff = new Date(now - temp);
                document.getElementById("check-time").innerText = diff.Myformat();
            }
            Date.prototype.Myformat = function(){
                return ("0"+this.getUTCMinutes()).slice(-2)+":"+("0"+this.getUTCSeconds()).slice(-2)
            }
            setInterval(checktime, 1000);

          } else if (decodedText == "https://fail.com.tw") {
            fail.style.display = "block";
          }
        };

        const config = {
          fps: 25,
          aspectRatio: 0.461,
          qrbox: {
            width: 250,
            height: 250
          }
        };
        html5QrCode.start(
          {
            facingMode: "environment"
          },
          config,
          qrCodeSuccessCallback
        );

        stop_scan.onclick = function close() {
          html5QrCode.stop();
          stop_scan.style.display = "none";
          div.style.display = "none";
          scan.style.display = "none";
        };
      }
    })
    .catch((err) => {
      // handle err
      console.log('error')
    });
};

window.onload =  ShowTime1();
function ShowTime1(){
  var NowDate=new Date();
  var h=NowDate.getHours();
  var m=NowDate.getMinutes();
  var s=NowDate.getSeconds();　
  document.getElementById('showbox1').innerHTML = h+'點'+m+'分'+s+'秒';
　setTimeout('ShowTime1()',1000);
}

