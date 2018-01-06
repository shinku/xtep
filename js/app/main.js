/**
 * Created by shin on 2018/1/4.
 */
var main={
    init:function(){
        //page1开启
        app.addClick();
        app.initPage1();
        document.addEventListener('touchmove',function(e){
            e.preventDefault();
        })
    }
}
var VFRAME_READY=function(e){
    console.log('video is ready');
}
var onVideoPlay=function(e){
     console.log('videi is playing');
}
var endVideo=function(e){
    console.log('videi is ending');
    DOM.getDomById('videocontent').innerHTML="";
}