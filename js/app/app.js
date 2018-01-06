/**
 * Created by shin on 2018/1/4.
 */
var app={
    initPage1:function(){
        var timeline= new TimelineMax();
        timeline.add(TweenMax.from('.w1',.2,{left:640}));
        timeline.add(TweenMax.from('.w2',.2,{left:-640}));
        timeline.add(TweenMax.from('.w3',.2,{left:640}));
        timeline.add(TweenMax.from('.w4',.2,{left:-640}));
        timeline.add(TweenMax.from('.w5',.2,{left:640,onComplete:function(){
            DOM.getDomById('welcome').style['display']='none';
            DOM.getDomById('canvas').style['display']='block';
            brokenInit('images/welcome2.png');


            setTimeout(function(){
                console.log('init new');
                app.initPage1_new();
            },2000);

        }}));
    },
    initPage1_new:function(){
        DOM.getDomById('canvas').style['display']='none';
        DOM.getDomById('welcomenew').style['display']='block';
        changeSrc('images/welcomnew2.jpg');
        var timeline= new TimelineMax();
        //DOM.getDomById('scorllLip').style['display']='block';
        TweenMax.from('.wn1',.5,{top:640,opacity:0});
        TweenMax.from('.wn2',.5,{top:-640,opacity:0});
        TweenMax.from('.wn3',.6,{top:640,opacity:0});
        TweenMax.from('.wn4',.6,{top:-640,opacity:0});
        TweenMax.from('.wn5',.6,{top:640,opacity:0});
        TweenMax.from('.wn6',.6,{top:-640,opacity:0});

        var tf=new MF_FaceTouch('welcomenew');
        tf.onmove=function(offset){

           // console.log(offset);
            /*if(offset.offsety>0){
                console.log(123);
            }else{
                console.log(456);
            }*/
            var zeronumber=0;
            for(var i=1;i<=6;i++)
            {
                var dom= DOM.getDomById('wn'+i);
                var top=dom.style['top'];
                var topNum=parseFloat(top.substr(0,top.length-2));
                if(Math.abs(topNum)<0.1) zeronumber++;
                if(offset.offsety>0){
                    //console.log(123);
                    var toTop=topNum+(0-topNum)*0.2;
                    dom.style['top']=toTop+"px";

                }
                else{
                    if(topNum>0) var toTop=topNum-offset.offsety
                    else  var toTop=topNum+offset.offsety
                    dom.style['top']=toTop+"px";
                }
               // if(offset.offsetY)
            }
            //console.log(zeronumber);
            if(zeronumber==6)
            {
                TweenMax.to('#hand',.6,{opacity:0});

                tf.onmove=null;
                TweenMax.to('.welcomenewbg',.6,{opacity:1,left:"+=2",onComplete:function(){
                    app.initPage1_broken();
                }});
                /*
                TweenMax.to('#welcomenew',.2,{opacity:0,scaleX:1.1});
                //TweenMax.to('#welcomenew',.6,{'box-shaow':0});
                DOM.getDomById('welcomenew').style['display']='none';
                DOM.getDomById('canvas').style['display']='block';
                DOM.getDomById('scorllLip').style['display']='block';
                TweenMax.from('.scorllLip',.5,{opacity:0,bottom:0});*/
            }

        }

        //DOM.getDomById('welcomenew').style['display']='none';
        //DOM.getDomById('canvas').style['display']='block';
      //  timeline.add(TweenMax.from('.scorllLip',.5,{opacity:0,bottom:0}));

    },
    initPage1_broken:function(){
        TweenMax.to('#welcomenew',.2,{opacity:0,scaleX:1.1});
        //TweenMax.to('#welcomenew',.6,{'box-shaow':0});
        DOM.getDomById('welcomenew').style['display']='none';
        DOM.getDomById('canvas').style['display']='block';
        DOM.getDomById('scorllLip').style['display']='block';
        TweenMax.from('.scorllLip',.5,{opacity:0,bottom:0});
    },
    initPage2:function(){
       // DOM.getDomById('videopage').style['display']='block';
        TweenMax.to('.welcomepage',.5,{top:-1134});
        DOM.getDomById('videopage').style['display']='block';
        TweenMax.from('.videopage',.5,{top:1134});
        //停止渲染破坏效果
        stopRender();
        //显示视频页面
        //播放视频
        DOM.getDomById('video1').contentWindow.videoManager.start();
    },
    addClick:function(){
        DOM.getDomById('scorllLip').addEventListener('click',function(){
            app.initPage2();
        })
    }
}