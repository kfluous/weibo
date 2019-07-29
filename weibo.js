//模仿鼠标点击 取消新浪微博关注
setInterval();

// function remove1Follow(){
//     document.querySelector("W_btn_b btn_set").trigger('click');
// }

// var btn = document.getElementsByClassName("W_ficon ficon_setup S_ficon");
// var event = document.createEvent("MouseEvents");
// event.initMouseEvent("click",true,true,document.defaultView,0, 0, 0, 0, 0,false, false, false, false, 0, null);
// btn.dispathEvent(event);


// function removeFollow(){
//     document.querySelector()
// }


// function removeFollow(){
   
//     // var arrs = document.getElementsByClassName("member_li S_bg1");
//     document.getElementsByClassName("btn_link S_txt1")[0].click();
    
//     //批量选中关注用户
//     var arrs = $('div.markup_choose');
//     for(var i=0;i<arrs.length;i++){
//         arrs[i].click();
//     }        

//     //删除用户
//     document.getElementsByClassName("W_btn_a")[1].click();
//     document.getElementsByClassName("W_btn_a btn_34px")[0].click();
// }

//批量取消关注
setInterval(function removeFollow(){
   
    // var arrs = document.getElementsByClassName("member_li S_bg1");
    document.getElementsByClassName("btn_link S_txt1")[0].click();
    
    //批量选中关注用户
    // var arrs = $('div.markup_choose');
    // for(var i=0;i<arrs.length;i++){
    //     arrs[i].click();
    // }        

    var arrs = document.getElementsByClassName("markup_choose");
    for( var i = 0; i < arrs.length; i++){
        arrs[i].click();
    }

    //删除用户
    document.getElementsByClassName("W_btn_a")[1].click();
    document.getElementsByClassName("W_btn_a btn_34px")[0].click();
},6000);


// setInterval(function removeFollow(){
//     document.getElementsByClassName("btn_link S_txt1")[0].click();
//     var arrs = document.getElementsByClassName("member_li S_bg1");
//     document.getElementsByClassName("W_btn_za")[1].click();
//     document.getElementsByClassName("W_btn_a btn_34px")[0].click();
// },6000);

//批量移除粉丝
function removeFans(){
    var arrs = document.getElementsByClassName("tlink");
    arrs[7].click();
    document.getElementsByClassName("W_btn_a").click();
}

setInterval( function removeFans(){
    var pages = document.getElementsByClassName("page S_txt1");
    var arrs = document.getElementsByClassName("tlink");
    arrs[7].click();
    var results = document.getElementsByClassName("W_btn_a");
    results[0].click();
    // var nextPage = document.getElementsByClassName("page next S_txt1 S_line1");
    // nextPage.click();
    // function reloadPage() {
    //     window.location.reload();
    // }
    // reloadPage(); //如果使用窗口自动刷新，控制台里面加入的js代码就会失效
}, 2000);


