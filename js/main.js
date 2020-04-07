//初始化适应


//加载
SH = $(window).height()
kevin_resize({ size: [640, 1136], full: 1 });
loader_Fun()


//加载

function loader_Fun() {


    var callbacks = [];
    var imgs = ['images/AdviseVertical.png','images/loading.gif','images/p1-02.png','images/p1-03.png','images/p1-04.png','images/p1-05.png','images/p1-06.png','images/p1-07.png','images/p1-08.png','images/p1-09.png','images/p1-10.png','images/p1-11.png','images/p1-12.png','images/p1-13.png','images/p1-14.png','images/p1-15.png','images/p1-16.png','images/p1-17.png','images/p1-18.png','images/p1-19.png','images/p2-01.png','images/p2-02.png','images/p2-03.png','images/p2-04.png','images/p2-05.png','images/p3-01.png','images/p3-02.png','images/p3-03.png','images/p3-04.png','images/p3-05.jpg','images/p3-06.png','images/p3-07.png','images/p3-08.png','images/p3-09.png','images/p3-06.jpg','images/p4-05.jpg','images/p4-01.png','images/p4-02.png','images/p4-03.png','images/p4-04.png','images/p5-01.jpg','images/p5-02.png','images/p5-03.png','images/p5-04.png','images/p5-05.png','images/p5-06.png','images/p6-02.png','images/p6-01.jpg'];

    imgLoader(imgs, function(percentage) {


        var pT = percentage * 100;

        $('.loading span').html((parseInt(pT)) + '%');


        if (percentage == 1) {
            setTimeout(function() {

                // SH = $(window).height()
                // kevin_resize({ size: [640, 1136], full: 1 });
                $('.loading').remove();
                $('.page1').css('display', 'block')
               // Edit_Fun()
                page1_Fun()

                // if ($(window).width() == 375 && $(window).height() == 724) {
                //
                //
                //
                //
                // } else {
                //
                //
                //
                //
                // }



                //hone

                //login

                //$('.page2').css('display', 'block')

                $('.p2-login-btn').click(function(e){

                    //获取id对应的元素的值，去掉其左右的空格
                    var email = $.trim($('#email-tt').val());
                    var tt=getCaption(email)

                    //验证邮箱格式的js正则表达式
                    var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                    //清空显示层中的数据
                    // $("#emailMess").html("");
                    if (email == "") {
                        alert("邮箱不能为空")
                        $('#email-tt').val("")
                    }
                    else if (!(isEmail.test(email))||tt!='pg.com') {

                        alert("邮箱格式不正确")
                        $('#email-tt').val("")

                    }else if($('#name-tt').val()==''){


                        alert("名字不能为空")

                    }
                    else{


                        $('.page2').css('display', 'none')


                    }



                })





                //@后面的参数
                function getCaption(obj){
                    var index=obj.lastIndexOf("\@");
                    obj=obj.substring(index+1,obj.length);
                    return obj;
                }







                //Edit picture

                $('.p1-huodong-btn').click(function(e){

                    $('.page3').css('display', 'block')
                    $('.page1').css('display', 'none')

                    Edit_Fun()



                })


                //list
                $('.p1-list-btn').click(function(e){

                    $('.page5').css('display', 'block')
                    $('.page1').css('display', 'none')

                    list_Fun()

                    //返回首页
                    $('.p5-homeBtn').click(function(e){

                        $('.page1').css('display', 'block')
                        $('.page5').css('display', 'none')
                    })



                })



                //活动说明

                $('.p1-guize-btn').click(function(e){

                    $('.page6').css('display', 'block')
                    $('.page1').css('display', 'none')



                    //返回首页

                    $('.p6-goback-btn').click(function(e){

                        $('.page1').css('display', 'block')
                        $('.page6').css('display', 'none')


                    })


                })




                // Edit_Fun
                function Edit_Fun(){

                    _iis=false

                    function getObjectURL(file) {
                        var url = null ;
                        if (window.createObjectURL!=undefined) { // basic
                            url = window.createObjectURL(file) ;
                        } else if (window.URL!=undefined) { // mozilla(firefox)
                            url = window.URL.createObjectURL(file) ;
                        } else if (window.webkitURL!=undefined) { // webkit or chrome
                            url = window.webkitURL.createObjectURL(file) ;
                        }
                        return url ;
                    }

                    $('.p3-upload-btn').on('click',function(){

                        $('#upfile').trigger('click');

                    });

                    var c1 = document.getElementById("c1");
                    c1.width =640
                    c1.height =640 / $('#c1').width() * $('#c1').height()

                    // c1.width =$('.p3-upload-btn').width()
                    // c1.height =$('.p3-upload-btn').height()

                    var ctx1 = c1.getContext("2d");
                    $('#upfile').on('change',function(e){

                        _iis=true
                        $('.p3-upload-btn').hide()
                        upimgurl = getObjectURL(this.files[0]);
                        upimg = new Image();
                        upimg.src = upimgurl;
                        upimg.onload = function(){

                            ctx1.clearRect(0,0,c1.width,c1.height);

                            var Stage = AlloyPaper.Stage, Bitmap = AlloyPaper.Bitmap,Loader=AlloyPaper.Loader;
                            var stage = new Stage("#c1");
                            stage.autoUpdate=false;
                            var ld = new Loader();
                            ld.loadRes2([
                                { id: "test", src: upimgurl },
                            ]);
                            ld.complete(function () {
                                var bmp = new Bitmap(ld.get("test"));
                                bmp.originX = 0.5;
                                bmp.originY = 0.5;
                                bmp.x = stage.width / 2;
                                bmp.y = stage.height / 2;
                                stage.add(bmp);

                                //stage.update();
                                updateStage();
                                var initScale = 1;
                                new AlloyFinger(bmp, {
                                    multipointStart: function () {
                                        initScale = bmp.scaleX;
                                    },
                                    rotate: function (evt) {
                                        bmp.rotation += evt.angle;
                                        //stage.update();
                                        updateStage();
                                    },
                                    pinch: function (evt) {
                                        bmp.scaleX = bmp.scaleY = initScale * evt.scale;
                                        //stage.update();
                                        updateStage();
                                    },
                                    pressMove: function (evt) {
                                        bmp.x += evt.deltaX;
                                        bmp.y += evt.deltaY;
                                        evt.preventDefault();
                                        //stage.update();
                                        updateStage();
                                    }

                                });
                            });
                            //将上传的图片画入canvas圆中
                            function updateStage(){
                                ctx1.beginPath();
                                //ctx1.fillStyle = "#fff";
                                // if(c1.width > c1.height){
                                //     ctx1.arc(c1.width/2 , c1.height/2 , c1.height/2 , 0 , 2*Math.PI);
                                // }else{
                                //     ctx1.arc(c1.width/2 , c1.height/2 , c1.width/2 , 0 , 2*Math.PI);
                                // }

                                ctx1.rect(0,0,c1.width,c1.height)
                                //drawRect

                                ctx1.save();
                                ctx1.clip();
                                stage.update();
                                ctx1.restore();

                            }
                        };

                        e.target.value = ''
                    });



                    $('.p3-submitBtn').on('click',function(){


                        if(!_iis){

                            alert('请上传图片!')

                        }else if($('.p3-upload-text').val()==''){

                            alert('请输入寄语!')

                        }else{

                            base64 = c1.toDataURL('image/jpeg',0.8);
                            $('#pic').attr('src',base64);
                            $('#showImg').show();
                            $('#c1').hide();
                            console.log(base64)

                            jiyu_txt=$('.p3-upload-text').val()

                            //显示生成长图

                            $('.p3-upload-qrcode').show()
                            $('.p3-btnBox').hide()
                            $('.p3-upload-tips').show()
                            $('.p3-upload-nameBg').show()


                            // html2canvas($(".page3"), {
                            //
                            //     onrendered: function(canvas) {
                            //
                            //         // $("#download").attr('href',canvas.toDataURL("image/jpeg"));
                            //         //
                            //         // $("#download").attr('download',Dname_arr[n]+'.jpeg') ;
                            //
                            //         big_base64=canvas.toDataURL("image/jpeg")
                            //         console.log(big_base64)
                            //
                            //
                            //         $('.page4').css('display', 'block')
                            //         $('.page3').css('display', 'none')
                            //         $('.p3-upload-tips').hide()
                            //         $('#pic').attr('src',base64);
                            //         $('.p4-show-text').html(jiyu_txt)
                            //
                            //         $('#p4-big-pic').attr('src',big_base64);
                            //
                            //
                            //
                            //     }
                            //
                            // });


                            //定义查找元素方法
                            // function $(selector) {
                            //     return document.querySelector(selector);
                            // }


                                //获取像素密度
                            // function getPixelRatio(context){
                            //         var backingStore = context.backingStorePixelRatio ||
                            //             context.webkitBackingStorePixelRatio ||
                            //             context.mozBackingStorePixelRatio ||
                            //             context.msBackingStorePixelRatio ||
                            //             context.oBackingStorePixelRatio ||
                            //             context.backingStorePixelRatio || 1;
                            //         return (window.devicePixelRatio || 1) / backingStore;
                            //     }
                            //     //绘制dom 元素，生成截图canvas
                            //  function html2Canvas() {
                            //         var shareContent = $(".page3");// 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
                            //         var width = $(".page3").width();  // 获取(原生）dom 宽度
                            //         var height = $(".page3").height(); // 获取(原生）dom 高
                            //         var offsetTop = 0;  //元素距离顶部的偏移量
                            //
                            //         var canvas_temp = document.createElement('canvas');  //创建canvas 对象
                            //         var context = canvas_temp.getContext('2d');
                            //         var scaleBy = getPixelRatio(context);  //获取像素密度的方法 (也可以采用自定义缩放比例)
                            //         canvas_temp.width = width * scaleBy;   //这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
                            //         canvas_temp.height = (height + offsetTop) * scaleBy;  // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
                            //         context.scale(scaleBy, scaleBy);
                            //
                            //         alert($(".page3").width()+":"+$(".page3").height())
                            //
                            //
                            //         var opts = {
                            //             allowTaint:true,//允许加载跨域的图片
                            //             tainttest:true, //检测每张图片都已经加载完成
                            //             scale:scaleBy, // 添加的scale 参数
                            //             canvas:canvas_temp, //自定义 canvas
                            //             logging: true, //日志开关，发布的时候记得改成false
                            //             width:width, //dom 原始宽度
                            //             height:height //dom 原始高度
                            //         };
                            //         html2canvas(shareContent, opts).then(function (canvas_temp) {
                            //
                            //             big_base64=canvas_temp.toDataURL("image/jpeg")
                            //             console.log(big_base64)
                            //
                            //
                            //             setTimeout(function(){
                            //
                            //                 $('.page4').css('display', 'block')
                            //                 $('.page3').css('display', 'none')
                            //                 $('.p3-upload-tips').hide()
                            //                 // $('#pic').attr('src',base64);
                            //                 // $('.p4-show-text').html(jiyu_txt)
                            //
                            //                 $('#p4-big-pic').attr('src',big_base64);
                            //
                            //
                            //             },1000)
                            //
                            //
                            //             // var body = document.getElementsByTagName("body");
                            //             // body[0].appendChild(canvas_temp);
                            //         });
                            //     }



                        // setTimeout(function(){
                        //
                        //
                        //     html2Canvas()
                        //
                        //
                        //
                        // },1000)





                        }




                    });




                    //按钮事件

                    $('.p3-resetBtn').click(function(e){

                        _iis=false
                        $('.p3-upload-text').val('')
                        $('.p3-upload-btn').show()
                        base64 =''
                        ctx1.clearRect(0,0,c1.width,c1.height);



                    })






                }












                // list_page 数据


                function list_Fun(){

                    var pichtml="";
                    var pichtml1="";

                    for (var i = 0; i < 1; i++){

                        pichtml1+='<li class="p5-listMc">'
                        pichtml1+='<div class="p5-listMc-bg">'
                        pichtml1+='<div class="p5-listMc-img"><img class="lazy" src="images/loading.gif" data-src="images/p4-05.jpg" width="100%"></div>'
                        pichtml1+='<div class="p5-listMc-namebox">001  xxxxxxxx</div>'
                        pichtml1+='<div class="p5-listMc-bar">'
                        pichtml1+='<div class="p5-listMc-bar-likeIcon"><img src="images/p4-01.png" width="100%"></div>'
                        pichtml1+='<div class="p5-listMc-bar-likeNum">'+i+'</div>'
                        pichtml1+=' <div class="p5-listMc-bar-txt">我觉察他去的匆匆了,伸出手遮挽时,他又从遮挽着的手边过去,天黑时,我躺在床上,他便伶伶俐俐地从我身上跨过,从我脚边cumsan lacus vel facilisis. </div>'
                        pichtml1+='</div>'
                        pichtml1+='<img src="images/p5-06.png" width="100%">'
                        pichtml1+='</div>'
                        pichtml1+='<div class="p5-listMc-btn" id="btnId'+i+'" target="'+i+'"><img src="images/p5-05.png" width="100%"></div>'
                        pichtml1+='</li>'


                    }

                    $("#scroller").html(pichtml1)



                    //    点赞事件

                    for (var h = 0; h < 21; h++) {

                        $("#btnId" + h).on("click", function () {

                            var ID=$(this).attr("target")

                            console.log(ID)

                        });
                    }



                    var myScroll;

                    function loaded () {
                        myScroll = new IScroll('#wrapper');

                        myScroll.on('scrollEnd',function(){

                            showImage();

                        });

                        //手动执行一次，将一开始需要展示的图片先显示出来
                        showImage();

                    }

                    document.addEventListener('touchmove', function (e) { e.preventDefault(); });


                    //$("img.lazy").lazyload({effect: "fadeIn",container: $("#wrapper")});

                    //绑定滚动停止事件


                    //显示图片
                    function showImage(){
                        $.each($('.lazy'),function(i,el){
                            if(isNeedLoad(el)){
                                el.src = $(el).removeClass('lazy').data('src');
                            }
                        });
                    }

                    //是否需要加载图片
                    function isNeedLoad(el){
                        var coords = el.getBoundingClientRect();
                        return (coords.top < window.innerHeight && coords.bottom > window.innerHeight) || (coords.bottom > 0 && coords.top < 0) || (coords.top > 0 && coords.bottom < window.innerHeight);
                    }


                    loaded ()



                }

            }, 100);
        }


    });

}


//横屏提示

function rotate() {
    var orientation = window.orientation;
    if (orientation == 90 || orientation == -90) {

        $('.orientation').show()
        $('.back_btn').hide()
    }

}

window.onorientationchange = function() {

    $('.orientation').hide()
    $('.back_btn').show()
    rotate();
};



//page1 动画

function page1_Fun(){


        TweenMax.fromTo($('.page1'), 2, { alpha: 0, scale:2, rotation:180,delay: 0, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, scale:1,rotation:0, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-bg-color1'), .5, { alpha: 0, x: -500, y: 100, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-bg-color4'), .5, { alpha: 0, x: 900, y: -150, delay: .1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay: .1, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-bg-color3'), .5, { alpha: 0, x: -500, y: 100, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.2, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-bg-jiantou'), .5, { alpha: 0, x: -500, y: 100, delay: 1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-t1'), .8, { alpha: 0, x: 900, y: -200, delay: .6, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.6, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-t2'), .8, { alpha: 0, x: 900, y: -200, delay: .7, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.7, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-t3'), .8, { alpha: 0, x: -500, y: 120, delay: .8, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.8, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-t4'), .8, { alpha: 0, x: 0, y: 0, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:0, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-t5'), .8, { alpha: 0, x: 0, y: 0, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:0, ease: Strong.easeOut, transformOrigin: "center center" });

        TweenMax.fromTo($('.p1-point1'), .8, { alpha: 0, x: -50, y: -100, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.3, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-point2'), 1, { alpha: 0, x: 200, y: 500, delay: .5, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:.5, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-point3'), 1, { alpha: 0, x: 0, y: 500, delay: 1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-huodong-btn'), .8, { alpha: 0, x: 0, y: 100, delay: 1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-list-btn'), .8, { alpha: 0, x: 0, y: 100, delay: 1.1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1.1, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-guize-btn'), .8, { alpha: 0, x: 0, y: 100, delay: 1.2, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1.2, ease: Strong.easeOut, transformOrigin: "center center" });
        TweenMax.fromTo($('.p1-video-btn'), .8, { alpha: 0, x: 0, y: 100, delay: 1.3, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 0, y: 0, delay:1.3, ease: Strong.easeOut, transformOrigin: "center center" });



}

