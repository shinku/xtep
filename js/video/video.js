/**
 * Created by shin on 2018/1/4.
 */
/**
 * Created by shin on 2016/12/17.
 */
//Video.js
var utils={
    vid:"",
    isPBack:false,
    getQueryString:function(name)
    {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    },
    handleVideoOver:function(e)
    {
        //console.log(1);
        /*if(!utils.isPBack && utils.vid.indexOf('kh')>=0)
         {
         videoManager.video.src='video/02.mp4';
         videoManager.video.play();
         utils.isPBack=true;
         return;
         }*/
        if(window.parent)
        {
            try{
                window.parent.endVideo(utils.vid);
            }
            catch(error)
            {
                throw('NO Parent Or Doman not Allowed!');
            }
        }
    },
    handleVideoPlay:function(e)
    {
        if(window.parent)
        {
            try{
                window.parent.onVideoPlay(utils.vid);

            }
            catch(error)
            {
                throw (error);
            }
        }
    },
    progressing:function(e)
    {
        console.log(e);
    },
    tellInit:function(vid)
    {
        //setTimeout(function(){console.log(window.parent)},500);
        if(window.parent)
        {
            try{
                window.parent.VFRAME_READY(vid);
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }
};
function pausePlay()
{
    if(videoManager.video) {
        videoManager.video.pause();
    }
}
function rePlay()
{
    if(videoManager.video) {
        videoManager.video.play();
    }
}
var videoManager={
    video:null,
    init:function(){
        document.addEventListener('touchstart',function(e){e.preventDefault()});
        //var videosrc=videos[vid];
        videoManager.video=document.getElementById('video');
        var video=videoManager.video;

        //视频播放结束 以及 视频停止播放之后，调用视频回调函数
        video.addEventListener('ended',utils.handleVideoOver);
        //video.addEventListener('play',utils.handleVideoPlay);
        //video.addEventListener('')
        video.addEventListener('canplaythrough',utils.handleVideoPlay);
        utils.tellInit(utils.getQueryString('vid'));
        var vid=utils.getQueryString('vid') || '01';
        utils.vid=vid;
        var videosrc='video/video.mp4';
        var video=videoManager.video;
        video.src=videosrc;
        //video.addEventListener('abort',utils.handleVideoOver);
        //video.play();
    },
    start:function(){
        videoManager.video.play();
    }
}

