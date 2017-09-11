//文本框默认提示文字
function textFocus(el) {
    if (el.defaultValue == el.value) { el.value = ''; el.style.color = '#333'; }
}
function textBlur(el) {
    if (el.value == '') { el.value = el.defaultValue; el.style.color = '#999'; }
}


//注册页面的提示文字
$(function(){

    //姓名栏失去焦点
    $(".user").blur(function(){
        reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

        if( $(".user").val()==""|| $(".user").val()=="请填写真实姓名")
        { 
            $(".user").addClass("errorC");
            $(".error0").html("请输入您的姓名");
            $(".error0").css("display","block");
        }
        else
        {
            $(".user").addClass("checkedN");
            $(".user").removeClass("errorC");
            $(".error0").css("display","none");
        }
    });
   //手机号栏失去焦点
    $(".phone").blur(function(){
        reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

        if( $(".phone").val()==""|| $(".phone")
            .val()=="请输入您的手机号")
        { 
            $(".phone").parent().addClass("errorC");
            $(".error1").html("请输入您的手机号");
            $(".error1").css("display","block");
        }
        else if($(".phone").val().length<11)
        {   
            $(".phone").parent().addClass("errorC");
            $(".error1").html("手机号长度有误！");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".phone").val()))
        {   
            $(".phone").parent().addClass("errorC");
            $(".error1").html("逗我呢吧，你确定这是你的手机号!!");
            $(".error1").css("display","block");
        }
        else
        {
            $(".phone").parent().addClass("checkedN");
            $(".phone").removeClass("errorC");
            $(".error1").css("display","none");
        }
    });

    //验证码栏失去焦点
    $(".kapkey").blur(function(){
        reg=/^.*[\u4e00-\u9fa5]+.*$/;
        if( $(".kapkey").val()=="" || $(".kapkey").val()=="请输入验证码")
        {
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("请填写验证码");
            $(".error2").css("display","block");
        }
        else if($(".kapkey").val().length<6)
        {   
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("验证码长度有误！");
            $(".error2").css("display","block");
        }
        else if(reg.test($(".kapkey").val()))
        {
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("动态密码不能为空");
            $(".error2").css("display","block");
        }
        else 
        {
            $(".kapkey").parent().removeClass("errorC");
            $(".error2").css("display","none");
            $(".kapkey").parent().addClass("checkedN");
      }
    });


   //动态密码栏失去焦点
    $(".phonekey").blur(function(){
        reg=/^.*[\u4e00-\u9fa5]+.*$/;
        if( $(".phonekey").val()=="" ||$(".phonekey").val()=="动态密码")
        {
            //$(".phonekey").addClass("errorC");
            $(".phonekey").parent().addClass("errorC");
            $(".error3").html("动态密码不能为空");
            $(".error3").css("display","block");
        }
        
        else if(reg.test($(".phonekey").val()))
        {
            $(".phonekey").parent().addClass("errorC");
            $(".error3").html("动态密码不支持中文字符！");
            $(".error3").css("display","block");
        }
        else if($(".phonekey").val().length<6)
        {   
            $(".phonekey").parent().addClass("errorC");
            $(".error3").html("动态密码长度有误！");
            $(".error3").css("display","block");
        }
        else 

        {
            //$(".phonekey").removeClass("errorC");
            $(".phonekey").parent().removeClass("errorC");
            $(".error3").css("display","none");
            $(".phonekey").parent().addClass("checkedN");
        }
    });


    //动态密码栏失去焦点
    $(".password-input").blur(function(){
        reg=/^.*[\u4e00-\u9fa5]+.*$/;
        if( $(".password-input").val()=="" ||$(".password-input").val()=="密码")
        {
            $(".password-input").parent().addClass("errorC");
            $(".error4").html("用户密码不能为空");
            $(".error4").css("display","block");
        }
        
        else if($(".password-input").val().length<8)
        {   
            $(".password-input").parent().addClass("errorC");
            $(".error4").html("用户密码长度为8-16个字符，区分大小写，至少包含两种类型！");
            $(".error4").css("display","block");
        }
        else 
        {
            $(".password-input").parent().removeClass("errorC");
            $(".error4").css("display","none");
            $(".phonekey").addClass("checkedN");
            
        }
    });

    $(".password-input").focus(function(){  

        $(".password-input").parent().removeClass("errorC");
        $(".error4").css("display","none");
    })

    $(".kapkey").focus(function(){  

        $(".kapkey").parent().removeClass("errorC");
        $(".error2").css("display","none");
    })

    //密码栏获得焦点(mainform1)
    $(".password-input").focus(function(){    
        $(".password-title").css("display","none");

        reg=/^.*[\u4e00-\u9fa5]+.*$/;
        if( $(".password-input").val()=="" ||$(".password-input").val()=="密码")
        {
            //$(".password-input").addClass("errorC");
            //$(".error4").html("用户密码不能为空");
            //$(".error4").css("display","block");
            $(".password-title").css("display","block");
        }
        
        else if($(".password-input").val().length<80)
        {   
            //$(".password-input").addClass("errorC");
            //$(".error4").html("用户密码长度为8-16个字符，区分大小写，至少包含两种类型！");
            //$(".error4").css("display","block");
            $(".password-title").css("display","none");
        }
    });



})