/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle 
$(document).ready(function () {

    $('.search-toggle').click(function () {
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function () {
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function () {
        $(this).removeClass('show');
    });

    $('.spinner').click(function () {
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function () {
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function () {
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

$('#about_box').ready(function () {
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', './assets/imgs/about/');
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         var fileList = xhr.responseText.split('\n');
    //         var ul = document.createElement('ul');
    //         for (var i = 0; i < fileList.length; i++) {
    //             var li = document.createElement('li');
    //             li.textContent = fileList[i];
    //             ul.appendChild(li);
    //         }
    //         document.body.appendChild(ul);
    //     }
    // };
    // xhr.send();

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', './assets/imgs/about/');
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var fileList = xhr.responseText.split('\n');
    //         for (var i = 0; i < fileList.length; i++) {
    //             console.log(fileList[i]);
    //         }
    //     }
    // };
    // xhr.send();



});

function show_imgs(event_img, event_name) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './assets/imgs/' + event_name + '/' + event_name + '.txt');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let file_names = xhr.responseText;
            let name_array = file_names.split("\n");
            name_array.splice(-1);
            name_array.forEach(function(value, key) {
                if ((key + 1) % 3 == 0){
                    $("#" + event_img).append('\
                    <div class="col sharing-img" style="padding:1rem; display:flex; align-items:center;">\
                    <img src="./assets/imgs/' + event_name + '/' + value + '" width="100%"></div>\
                    </div><div class="row" style="padding: 1rem;">')
                }else{
                    $("#" + event_img).append('<div class="col sharing-img" style="padding:1rem; display:flex; align-items:center;">\
                    <img src="./assets/imgs/' + event_name + '/' + value + '" width="100%"></div>')
                }
            });
        }
    };
    xhr.send();
}

$("#0112_img").ready(function () {
    show_imgs("0112_img", "Event_0112");
})

$("#0311_img").ready(function () {
    show_imgs("0311_img", "Event_0311");
})

$("#1105-1106_img").ready(function () {
    show_imgs("1105-1106_img", "Event_1105-1106");
})

$("#1123-1130_img").ready(function () {
    show_imgs("1123-1130_img", "Event_1123-1130");
})

$("#0407_img").ready(function () {
    show_imgs("0407_img", "Event_0407");
})

$("#poster_img").ready(function () {
    show_imgs("poster_img", "poster");
})

$("#other_img").ready(function () {
    show_imgs("other_img", "other");
})

$("#sharing_img").ready(function () {
    show_imgs("sharing_img", "sharing_img");
})

$("#portfolio_img").ready(function () {
    show_imgs("portfolio_img", "portfolio");
})

$("#about_box").ready(function () {
    let name_array = ["廖奕雯&nbsp;(計畫主持人)", "回怡雯&nbsp;(共同主持人)", "胡育豪&nbsp;(共同主持人)", "蘇懿&nbsp;(共同主持人)", "黃勇富&nbsp;(共同主持人)", "林思妤&nbsp;(協同主持人)",
    "利錫雨&nbsp;(協同主持人)", "潘佳鈴&nbsp;(計畫助理)", "曾弘宇&nbsp;(計畫助理)", "莊婕琳", "古繜崴"];
    let school_array = ["國立高雄科技大學", "正修科技大學", "正修科技大學", "正修科技大學", "正修科技大學", "藝之魚創意設計有限公司", "正修科技大學", "正修科技大學", "正修科技大學", "正修科技大學", "正修科技大學"];
    let subject_array = ["智慧商務系", "資訊工程系", "國際企業系", "建築與室內設計系", "國際企業系", "無", "無", "資訊管理系", "資訊管理系", "資訊管理系", "資訊管理系"];
    let position_array = ["副教授", "專任講師&nbsp;(已滿三年)", "副教授", "教授", "助理教授", "老闆兼任講師", "校務行政助理", "學生", "學生兼研究生", "學生", "學生"];
    let major_array = ["物聯網應用、人工智慧、商管科教、科普教育、數位學習",
    "統計分析、專案管理", "國際金融、國際貿易、計量經濟", "微積分、統計、市場調查", "國際貿易實務、國際貿易法", "平面設計、商業設計", "不透露", "網頁設計、文書處理、行政會計",
    "人工智慧、程式設計、網頁全端開發", "不透露", "不透露"];

    name_array.forEach(function(value, key) {
        let tmp = value.split("&")[0];
        $("#about_box").append('\
        <div class="card mb-3">\
        <div class="row g-0" style="background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);">\
        <div class="col-md-4">\
        <img src="./assets/imgs/about/' +  tmp + '.jpg" class="img-fluid" style="border-radius: 0;">\
        </div>\
        <div class="col-md-8">\
        <div class="card-body">\
        <h5 class="card-title"><strong>' + value + '</strong></h5><hr>\
        <ul class="list-group list-group-flush" style="text-align: left;">\
        <li class="list-group-item">任職：' + school_array[key] + '</li>\
        <li class="list-group-item">科系：' + subject_array[key] + '</li>\
        <li class="list-group-item">職稱：' + position_array[key] + '</li>\
        <li class="list-group-item">專業：' + major_array[key] + '</li>\
        </ul></div></div></div></div>')
    })
})