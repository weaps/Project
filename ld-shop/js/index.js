
//地区选择
$(document).ready(function(){
  $("#currentCityName").mouseover(function(){
    $("#currentCityName").addClass("hover");
    $("#currentCityName .dd").css("display","block");
  });
  $("#currentCityName,#currentCityName .dd").mouseout(function(){
    $("#currentCityName").removeClass("hover");
    $("#currentCityName .dd").css("display","none");
  });

  $("#currentCityName .off").click(function(){
  	$("#currentCityName .dd").css("display","none");
  });

});
// topmenu 网站导航
$(document).ready(function(){
  $(".allCat").mouseover(function(){
    $(".allCat").addClass("hover");
    $(".allCat .dd").css("display","block");
  });
  $(".allCat,.allCat .dd").mouseout(function(){
    $(".allCat").removeClass("hover");
    $(".allCat .dd").css("display","none");
  });
});

// topmenu 帮助中心
$(document).ready(function(){
  $(".topmenu-help").mouseover(function(){
    $(".topmenu-help").addClass("hover");
    $(".topmenu-help .dd").css("display","block");
  });
  $(".topmenu-help,.topmenu-help .dd").mouseout(function(){
    $(".topmenu-help").removeClass("hover");
    $(".topmenu-help .dd").css("display","none");
  });
});

//购物车


$(document).ready(function(){
  $("#topCart").mouseover(function(){
    $("#topCart").addClass("hover");
    $("#topCart .cart_lists").css("display","block");
  });
  $("#topCart,#topCart .cart_lists").mouseout(function(){
    $("#topCart").removeClass("hover");
    $("#topCart .cart_list").css("display","none");
  });
});


//浮动购物车

$(document).ready(function(){
  $("#shopCart").click(function(){
    $(".cart-wrap").css("display","block");
  });
  $(".cart-close").click(function(){
    $(".cart-wrap").hide(50);
  });
});



//返回顶部
function b() {
  h = $(window).height(),
  t = $(document).scrollTop(),
  t > h ? $("#moquu_top").show() : $("#moquu_top").hide()
}
$(document).ready(function() {
  b(),
  $("#moquu_top").click(function() {
    $(document).scrollTop(0)
  })
}),
$(window).scroll(function() {
  b()
});



//菜单

$(document).ready(function(){
  $("#booksort .item").mouseover(function(){
    $(this).addClass("hover");
  });
  $("#booksort .item,#booksort .item .i-cm").mouseout(function(){
    $(this).removeClass("hover");
  });
});


//rSide

$(document).ready(function(){
  $(".rSide a").mouseover(function(){
    $(this).addClass("hover");
  });
  $(".rSide a").mouseout(function(){
    $(this).removeClass("hover");
  });
});


//rSide

$(document).ready(function(){
  $(".p-list li").mouseover(function(){
    $(this).addClass("hover").fadeIn();
  });
  $(".p-list li").mouseout(function(){
    $(this).removeClass("hover");
  });
});


//列表鼠标经过样式
  $(document).ready(function(){
    $(".pList li,#special .mc li").mouseover(function(){
      $(this).addClass("hover").fadeIn();
    });
    $(".pList li,#special .mc li").mouseout(function(){
      $(this).removeClass("hover");
    });
  });


  //个人详情头像鼠标经过样式
  $(document).ready(function(){
    $(".pf-avatar-box").mouseover(function(){
      $(".pf-edit-avatar").css("display","block");
    });
    $(".pf-avatar-box").mouseout(function(){
      $(".pf-edit-avatar").css("display","none");
    });
  });





