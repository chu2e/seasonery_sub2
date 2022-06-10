

/*header-nav-sub*/

$(function(){
  $(".nav>li:nth-child(1)").mouseenter(function(){
    $(".sub1").stop().slideDown(300);
  });
  $(".nav>li:nth-child(1)").mouseleave(function(){
    $(".sub1").stop().slideUp(300);
  });
});
$(function(){
  $(".nav>li:nth-child(2)").mouseenter(function(){
    $(".sub2").stop().slideDown(300);
  });
  $(".nav>li:nth-child(2)").mouseleave(function(){
    $(".sub2").stop().slideUp(300);
  });
});


/*header-menubar*/

$(function(){
  $(".menu").mouseenter(function(){
    $(".menubar_sub").stop().slideDown(300);
  });
  $(".menu").mouseleave(function(){
    $(".menubar_sub").stop().slideUp(300);
  });
});




/*ROOM B link hover*/

$(function(){
  $(".con1_link li:last-child").mouseenter(function(){
    $(".con1_link_line2").stop().fadeIn(300);
  });
  $(".con1_link li:last-child").mouseleave(function(){
    $(".con1_link_line2").stop().fadeOut(300);
  });
});

$(function(){
  $(".con2_link li:last-child").mouseenter(function(){
    $(".con2_link_line2").stop().fadeIn(300);
  });
  $(".con2_link li:last-child").mouseleave(function(){
    $(".con2_link_line2").stop().fadeOut(300);
  });
});




/*화살표들 각자 다른 con 안에 있어도 style은 동일하게 지정해서 클래스 이름도 같다. 그래서 제이쿼리에 속성을 적용할 때 클래스 이름이 다 같으니 모든 화살표들에게 속성이 먹힌다.

그러므로 각 con에 있는 각각의 화살표들에게 새로운 클래스명을 각각 지정해줘서 그 클래스명을 제이쿼리에 입력한다.*/



/*con3 침실 화살표 link hover*/

$(function(){
  $(".con3_circle li:nth-child(1)").mouseenter(function(){
    $(".con3_circle li:nth-child(1) .con3_hover").stop().fadeIn();
  });
  $(".con3_circle li:nth-child(1)").mouseleave(function(){
    $(".con3_circle li:nth-child(1) .con3_hover").stop().fadeOut();
  });
});

$(function(){
  $(".con3_circle li:nth-child(2)").mouseenter(function(){
    $(".con3_circle li:nth-child(2) .con3_hover").stop().fadeIn();
  });
  $(".con3_circle li:nth-child(2)").mouseleave(function(){
    $(".con3_circle li:nth-child(2) .con3_hover").stop().fadeOut();
  });
});





/*con4 욕실 화살표 link hover*/

$(function(){
  $(".con4_circle li:nth-child(1)").mouseenter(function(){
    $(".con4_circle li:nth-child(1) .con4_hover").stop().fadeIn();
  });
  $(".con4_circle li:nth-child(1)").mouseleave(function(){
    $(".con4_circle li:nth-child(1) .con4_hover").stop().fadeOut();
  });
});

$(function(){
  $(".con4_circle li:nth-child(2)").mouseenter(function(){
    $(".con4_circle li:nth-child(2) .con4_hover").stop().fadeIn();
  });
  $(".con4_circle li:nth-child(2)").mouseleave(function(){
    $(".con4_circle li:nth-child(2) .con4_hover").stop().fadeOut();
  });
});




$(function(){
  AOS.init({
    duration: 1200
  });
});
