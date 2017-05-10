$(function() {
  //tween section

  $('button').on('click', function() {
    TweenMax.fromTo('.box1', 2, {
      y: -50,
      x: 0,
      opacity: 0
    }, {
      y: 0,
      x: 20,
      repeat: 1,
      opacity: 1,
      yoyo: true,
      ease: Bounce.easeOut
    });




    TweenMax.fromTo('.box2', 1, {
      y: -10,
      x: 20,
      opacity: 0
    }, {
      y: 0,
      x: 30,
      opacity: 1,
      delay: 2,
      ease: Elastic.easeOut

    });

  });
  console.log('tween box2 ok');

  var controller = new ScrollMagic.Controller();


  var wp = new TimelineMax().staggerFromTo('.flow .item', 0.5, {
    x: -50,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
  }, 0.1);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#section_01",
      reverse: true,
      offset: '300px',
      // duration: '90%'
    })

    .setTween(wp)
    .addIndicators()
    .addTo(controller);




  //場景三


  var ourScene = new ScrollMagic.Scene({
      triggerElement: "#section_02",
      offset: '200px'
    })
    .setClassToggle('.logo', 'fadein')
    .addIndicators()
    .addTo(controller);

  console.log('section03 ok');

  //場景四

  var stick_scene = new ScrollMagic.Scene({
      triggerElement: "#section_03",
      offset: '10',
      duration: '500'
    })
    .setPin('.stickbox')
    .addIndicators()
    .addTo(controller);
  console.log('section4  ok');


  //場景五


  var changecolorScene = new ScrollMagic.Scene({
      triggerElement: "#section_04",
      offset: '200px'
    })
    .setClassToggle('.section05', 'fadein')
    .addIndicators({
      name: 'changecolor start'
    })
    .addTo(controller);

  console.log('section05 ok');



  //場景六

  var move_scene = new ScrollMagic.Scene({
      triggerElement: "#section_05",
      duration: '500',
      offset: '100px',
      reverse :  true
    })

  .setTween(TweenMax.staggerTo(".titlefont" , 1 ,{
         opacity: 1,
         x : 950,
         ease: Strong.easeInOut
     }))
  .addIndicators({
       name: 'Move'
     })
   .addTo(controller);
//場景七

var dis_scene = new ScrollMagic.Scene({
    triggerElement: "#section_06",
    offset: '50px'
  })
  .setTween(TweenMax.fromTo(".centers" , 0.5 ,{
         opacity: 1
     },{
         opacity: 0
     }))
     .addIndicators({
          name: 'dis'
        })
      .addTo(controller);

       console.log('section06 ok');
//選單

$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1800);
              return false;
          }
      }
  });
  console.log('nav ok');
//選單出現


        $(window).scroll(function(){
          var offset_height = 300;
          var distance =$(window).scrollTop();

          if (distance > offset_height){
             $('.nav').addClass('in');
          }else {
            $('.nav').removeClass('in');
          }
        });




});

$('#container').stellar({
});
