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
                $('.page3').css('display', 'block')

                //Edit picture

                Edit_Fun()

                var Orientation = null;//ios选择上传图片是图片角度问题



                function is_weixn()
                {
                    var ua = navigator.userAgent.toLowerCase()
                    if(ua.match(/MicroMessenger/i)=="micromessenger")
                    { return true; }
                    else
                    { return false; }
                }





                // Edit_Fun
                function Edit_Fun(){




                    _iis=false

                    // function getObjectURL(file) {
                    //     var url = null ;
                    //     if (window.createObjectURL!=undefined) { // basic
                    //         url = window.createObjectURL(file) ;
                    //     } else if (window.URL!=undefined) { // mozilla(firefox)
                    //         url = window.URL.createObjectURL(file) ;
                    //     } else if (window.webkitURL!=undefined) { // webkit or chrome
                    //         url = window.webkitURL.createObjectURL(file) ;
                    //     }
                    //     return url ;
                    // }

                    $('.p3-upload-btn').on('click',function(){

                        $('#upfile').trigger('click');

                    });


                    $('#upfile').on('click',function(e){

                        alert(is_weixn())





                    })


                    function ff(){

                        console.log("///")

                    }
                    // var c1 = document.getElementById("c1");
                    // c1.width =640
                    // c1.height =640 / $('#c1').width() * $('#c1').height()

                    // c1.width =$('.p3-upload-btn').width()
                    // c1.height =$('.p3-upload-btn').height()
                    //
                    // var ctx1 = c1.getContext("2d");
                    $('#upfile').change(function(e){


                        var  file = e.target.files[0];

                        alert(file)
                        console.log(file)

                        document.getElementById('upfile').value = null;

                        $('.p3-upload-btn').hide()

                        // _iis=true
                        // $('.p3-upload-btn').hide()
                        // upimgurl = getObjectURL(this.files[0]);
                        // upimg = new Image();
                        // upimg.src = upimgurl;
                        //
                        //
                        // upimg.onload = function(){
                        //
                        //
                        //     if(is_weixn()){
                        //
                        //         alert("////")
                        //         //获取照片方向角属性ios
                        //         //ios图片方向调整需要加载exif
                        //         EXIF.getData(file, function () {
                        //             EXIF.getAllTags(this);
                        //             Orientation = EXIF.getTag(this, 'Orientation');
                        //             alert(Orientation)
                        //         });
                        //
                        //     }
                        //
                        //
                        //     ctx1.clearRect(0,0,c1.width,c1.height);
                        //
                        //     var Stage = AlloyPaper.Stage, Bitmap = AlloyPaper.Bitmap,Loader=AlloyPaper.Loader;
                        //     var stage = new Stage("#c1");
                        //     stage.autoUpdate=false;
                        //     var ld = new Loader();
                        //     ld.loadRes2([
                        //         { id: "test", src: upimgurl },
                        //     ]);
                        //     ld.complete(function () {
                        //         var bmp = new Bitmap(ld.get("test"));
                        //         bmp.originX = 0.5;
                        //         bmp.originY = 0.5;
                        //         bmp.x = stage.width / 2;
                        //         bmp.y = stage.height / 2;
                        //         stage.add(bmp);
                        //
                        //
                        //
                        //         if (Orientation != "" && Orientation != 1 && Orientation != undefined) {
                        //             switch (Orientation) {
                        //                 case 6://需要顺时针90度旋转
                        //                     //canvas.width = h;
                        //                    // canvas.height = w;
                        //                     //ctx.rotate(90 * Math.PI / 180);
                        //                     bmp.rotation=90 * Math.PI / 180
                        //                     updateStage();
                        //                     //ctx.drawImage(this, 0, -h);
                        //                     break;
                        //                 case 8://需要逆时针90度旋转
                        //                     //canvas.width = h;
                        //                     //canvas.height = w;
                        //                     //ctx.rotate(-90 * Math.PI / 180);
                        //                     bmp.rotation=-90 * Math.PI / 180
                        //                     updateStage();
                        //                     //ctx.drawImage(this, -w, 0);
                        //                     break;
                        //                 case 3://需要180度旋转
                        //
                        //                     bmp.rotation=180 * Math.PI / 180
                        //                     updateStage();
                        //                     //ctx.rotate(180 * Math.PI / 180);
                        //                    // ctx.drawImage(this, -w, -h);
                        //                     break;
                        //             }
                        //         }
                        //
                        //
                        //
                        //
                        //         //stage.update();
                        //         updateStage();
                        //         var initScale = 1;
                        //         new AlloyFinger(bmp, {
                        //             multipointStart: function () {
                        //                 initScale = bmp.scaleX;
                        //             },
                        //             rotate: function (evt) {
                        //                 bmp.rotation += evt.angle;
                        //                 //stage.update();
                        //                 updateStage();
                        //             },
                        //             pinch: function (evt) {
                        //                 bmp.scaleX = bmp.scaleY = initScale * evt.scale;
                        //                 //stage.update();
                        //                 updateStage();
                        //             },
                        //             pressMove: function (evt) {
                        //                 bmp.x += evt.deltaX;
                        //                 bmp.y += evt.deltaY;
                        //                 evt.preventDefault();
                        //                 //stage.update();
                        //                 updateStage();
                        //             }
                        //
                        //         });
                        //     });
                        //     //将上传的图片画入canvas圆中
                        //     function updateStage(){
                        //         ctx1.beginPath();
                        //         //ctx1.fillStyle = "#fff";
                        //         // if(c1.width > c1.height){
                        //         //     ctx1.arc(c1.width/2 , c1.height/2 , c1.height/2 , 0 , 2*Math.PI);
                        //         // }else{
                        //         //     ctx1.arc(c1.width/2 , c1.height/2 , c1.width/2 , 0 , 2*Math.PI);
                        //         // }
                        //
                        //         ctx1.rect(0,0,c1.width,c1.height)
                        //         //drawRect
                        //
                        //
                        //
                        //         ctx1.save();
                        //         ctx1.clip();
                        //         stage.update();
                        //         ctx1.restore();
                        //
                        //     }
                        // };

                        //e.target.value = ''
                    });



                    $('.p3-submitBtn').on('click',function(){


                        if(!_iis){

                            alert('请上传图片!')

                        }else if($('.p3-upload-text').val()==''){

                            alert('请输入寄语!')

                        }else{

                            base64 = c1.toDataURL('image/jpeg',0.8);
                            //$('#pic').attr('src',base64);
                           //$('#c1').hide();
                          // $('#ttt').show()
                           //console.log(base64)

                            jiyu_txt=$('.p3-upload-text').val()

                            //显示生成长图


                            $('.page3').hide()
                            $('.p3-upload-tips').show()
                            $('.page7').show()
                            $('.page7 .p3-upload-btn').show()
                            $('.page7').css('zIndex',1)
                            $('#photo_mc').attr('src','https://ktest-1251005819.cos.ap-guangzhou.myqcloud.com/images/new.jpg');

                            var img=new Image();
                            img.src='https://ktest-1251005819.cos.ap-guangzhou.myqcloud.com/images/new.jpg';
                            img.onload=function(){

                                html2Canvas()

                            };





                           // $('#lii').attr('src','https://ktest-1251005819.cos.ap-guangzhou.myqcloud.com/images/p4-05.jpg');




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
                            function getPixelRatio(context){
                                    var backingStore = context.backingStorePixelRatio ||
                                        context.webkitBackingStorePixelRatio ||
                                        context.mozBackingStorePixelRatio ||
                                        context.msBackingStorePixelRatio ||
                                        context.oBackingStorePixelRatio ||
                                        context.backingStorePixelRatio || 1;
                                    return (window.devicePixelRatio || 1) / backingStore;
                                }
                                //绘制dom 元素，生成截图canvas
                             function html2Canvas() {
                                    var shareContent = $(".page7");// 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
                                    var width = $(".page7").width();  // 获取(原生）dom 宽度
                                    var height = $(".page7").height(); // 获取(原生）dom 高
                                    var offsetTop = 0;  //元素距离顶部的偏移量

                                    var canvas_temp = document.createElement('canvas');  //创建canvas 对象
                                    var context = canvas_temp.getContext('2d');
                                    var scaleBy = getPixelRatio(context);  //获取像素密度的方法 (也可以采用自定义缩放比例)
                                    //var scaleBy = 1;
                                    canvas_temp.width = width * scaleBy;   //这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
                                    canvas_temp.height = (height + offsetTop) * scaleBy;  // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
                                    context.scale(scaleBy, scaleBy);

                                    var opts = {
                                        allowTaint:true,//允许加载跨域的图片
                                        tainttest:true, //检测每张图片都已经加载完成
                                        scale:scaleBy, // 添加的scale 参数
                                        canvas:canvas_temp, //自定义 canvas
                                        logging: true, //日志开关，发布的时候记得改成false
                                        width:width, //dom 原始宽度
                                        height:height //dom 原始高度
                                    };
                                    html2canvas(shareContent, opts).then(function (canvas_temp) {




                                        big_base64=canvas_temp.toDataURL("image/jpeg")
                                        //console.log(big_base64)


                                        setTimeout(function(){

                                            $('.page4').css('display', 'block')
                                           $('.page7').css('display', 'none')
                                           $('.p3-upload-tips').hide()
                                            $('#pic').attr('src',base64);
                                            $('.p4-show-text').html(jiyu_txt)

                                            $('#p4-big-pic').attr('src',big_base64);




                                        },1000)


                                        // var body = document.getElementsByTagName("body");
                                        // body[0].appendChild(canvas_temp);
                                    });
                                }













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

