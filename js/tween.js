$(function(){
//tween section

$('button').on('click' , function(){
 TweenMax.fromTo('.box1',2,{
     y: -50,
     x: 0,
     opacity: 0
 },{
     y: 0,
     x: 20,
     repeat: 1,
     opacity: 1,
     yoyo: true,
     ease : Bounce.easeOut
    });




 TweenMax.fromTo('.box2',1,{
     y: -10,
     x: 20,
     opacity: 0
 },{
     y: 0,
     x: 30,
     opacity: 1,
     delay: 2,
     ease : Elastic.easeOut

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
             offset:'300px',
             // duration: '90%'
         })

      .setTween(wp)
      .addIndicators()
      .addTo(controller);






















})
