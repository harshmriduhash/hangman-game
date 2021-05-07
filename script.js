var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "⑨"];
var touhous= ["CIRNO", "CIRNOCIRNO", "CIRNOCIRNOCIRNO"];
var strongest = ["Who is Str⑨ng3sT Touhou in ALLov GEnS0ky0?!?! ?@  ?!?  !?!??!1!?", "Wh⑨'Da Sm4r73ST ToUOHOU??! So Sm4test @ m4TH!! Was wuz 1+4 aG1n?? ⑨???!!", "Who isDA BEST3ST T⑨uhu⑨?!?1 ⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨"];
var victorymessage = ["I Knew3d3D u Wuz 2nd Str⑨ng3sT TO D3f34t my brains!!! ! ! ! !", "I Kn0wed U wwere 2nd Sm4r73ST ToUOHOU! So Sm4rtuR!! ⑨⑨⑨", "That's R1gh7! I'm da BEST T⑨uHu⑨ Around :D!! ⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨"];
var gameovermessage = ["I R THE Str⑨ng3sT!! ME! CIRNO!! ! ! !!1!?", "SM4t3st at M4TH is I!! CIRNO!! 4+4 = ⑨ !!1!!", "CIRNO DA BEST! ⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨⑨"];
var numletters = 0;
var globalright = 0;
var word = "start";
var dastrongest = "strongest";
var lives = 2;
var lunatic = 0;
var sndcorrect = new Audio('audio/TWINKLE3.wav');
var sndwrong = new Audio('audio/ATTACK3.wav');
var sndgameover = new Audio('audio/DEAD.wav');
var sndezmode = new Audio('audio/BONUS2.wav');
var sndlunatic = new Audio('audio/SPELLCARD.wav');
var sndvictory = new Audio('audio/ORIN.wav');
var sndlunaticvictory = new Audio('audio/MASTERSPARK.wav');
var ezmodesong = new Audio('audio/ez2.mp3');
var lunaticsong = new Audio('audio/lunatic.mp3')

$(document).ready(function() {

$("#wholepage").get("index2.html");
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//     document.getElementById('#songplayer').style.display = "block";
// }

  // function music() {
  //   audioElement.play();
  // };

  // music();

  // $(".pause-button").on("click", function() {
  //   audioElement.pause();
  // });

//Button Creation
  function makebuttons() {
    for (var i = 0; i < letters.length; i++) {
      letterBtn = $("<button>");
      letterBtn.attr("class", "letter-button letter letter-button-color fly"+i);
      letterBtn.attr("data-letter", letters[i]);
      letterBtn.text(letters[i]);
      $("#buttons").append(letterBtn);
    }
  }

  makebuttons(); 
//End Button Creation

//Choose Word and Underline

  function gamestart() {
    random = Math.floor(Math.random()*touhous.length);
    word=touhous[random];
    dastrongest=strongest[random];
    $('#whois').text(dastrongest);
    $('#lives').text("Lives : "+lives);
    document.getElementById('startingpage').style.display = "none";
    document.getElementById('gamepagenormal').style.display = "block";
    $('#victorymessagehtml').text(victorymessage[random]);
    $('#gameovermessagehtml').text(gameovermessage[random]);

    var x = word.length;
    var y = x-1;    

    while (x>0){
      numletters++;
      var letter = word.substring(y,x);
      document.getElementById('letter'+x).innerHTML = letter;
      document.getElementById('letter'+x).style.visibility = "hidden";
      document.getElementById('underline'+x).style.display = "block";     
      document.getElementById('underline'+x).style.borderBottom = "3px solid black";
      document.getElementById('underline'+x).className = "underline";
      x--;
      y--;
    }
  }

  $(".startgame").on("click", gamestart);
//End Choose Word and Underline

//Click on a letter

  $(".letter-button").on("click", function() {

    var correct=0;
    var target = event.target || event.srcElement;
    var selectedletter = target.dataset.letter;
    console.log(selectedletter);
    var checked = 0;
    target.style.visibility = "hidden";

    for (var i = 1; i < word.length+1; i++) {

      if(document.getElementById('letter'+i).innerHTML === selectedletter){
        console.log(selectedletter);
        document.getElementById('letter'+i).style.visibility = "visible";
        // sndcorrect.stop();
        sndcorrect.play();
        correct++;
        globalright++;
      }
     
      else{
        checked++;
      }

      if(correct==0 && checked==word.length) {
        var wrongletter = $("<div>");
        wrongletter.addClass("wrongletter");
        wrongletter.text($(this).attr("data-letter"));
        $("#wrongguesses").append(wrongletter);
        console.log("wrong");
        lives--;
        $('#lives').text("Lives : "+lives);
        $('#lives').text("Lives : "+lives);
        sndwrong.play();
      }

      if(globalright == word.length && lunatic==0) {
        console.log("victory");
        document.getElementById('gamepagenormal').style.display = "none";
        document.getElementById('victory').style.display = "block";
        document.getElementById('button-container').style.display = "block";
        document.getElementById('animate').style.display = "block";
        sndvictory.play();
      }
      
      if(lives == 0 && lunatic==0) {
        console.log("gameover");
        document.getElementById('gamepagenormal').style.display = "none";
        document.getElementById('gameover').style.display = "block";
        document.getElementById('button-container').style.display = "block";
        document.getElementById('animate').style.display = "none";
        sndgameover.play();
      }

      if(globalright == word.length && lunatic==1) {
        console.log("victory");
        document.getElementById('gamepagenormal').style.display = "none";
        document.getElementById('victory').style.display = "block";
        document.getElementById('button-container').style.display = "block";
        document.getElementById('animate').style.display = "block";
        document.getElementById('restart').style.display = "none";
        $('#victorymessagehtml').text("U R Lunatic!! "+victorymessage[random]);
        sndlunaticvictory.play();

      }
      
      if(lives == 0 && lunatic==1) {
        console.log("gameover");
        document.getElementById('gamepagenormal').style.display = "none";
        document.getElementById('gameover').style.display = "block";
        document.getElementById('button-container').style.display = "block";
        document.getElementById('animate').style.display = "block";
        document.getElementById('restart').src = "none";
        sndgameover.play();
      }

      if(selectedletter === "⑨" && lunatic==1){
        console.log("victory");
        document.getElementById('gamepagenormal').style.display = "none";
        document.getElementById('gameover').style.display = "none";
        document.getElementById('victory').style.display = "block";
        document.getElementById('button-container').style.display = "block";
        document.getElementById('animate').style.display = "block";
        document.getElementById('restart').style.display = "none";
        $('#victorymessagehtml').text("U R Lunatic!! "+victorymessage[random]);
        sndlunaticvictory.play();
      }
    }

  });

//End Click on Letter

//Clear Button

  $("#restart").on("click", function() {
    sndezmode.play();
    restart()
  });

  function restart(){

    $("#wrongguesses").empty();
    document.getElementById('startingpage').style.display = "block";
    document.getElementById('gamepagenormal').style.display = "none";
    document.getElementById('victory').style.display = "none";
    document.getElementById('gameover').style.display = "none";
    document.getElementById('button-container').style.display = "none";
    // document.getElementsByClassName("letter-button").style.visibility = "visible";

    var x = 20;
    globalright = 0;
    lives = 2;
    word = "start";
    while (x>0){
      document.getElementById('letter'+x).innerHTML = "";
      document.getElementById('letter'+x).style.visibility = "hidden";
      document.getElementById('underline'+x).style.borderBottom = "0px";
      x--;
    }
    var showbuttons = document.getElementById("buttons").querySelectorAll("button");
    for(b = 0; b < 27; b++){
        showbuttons[b].style.visibility = "visible";
    }

    gamestart();
  };
  

//End Clear Button

//Animate Button
  
  $("#animate").on("click", function() {
    if (lunatic==0) {
      var audioElement = document.getElementById("songplayer");
      audioElement.setAttribute("src", "audio/lunatic.mp3");
      sndlunatic.play();
      document.getElementById("buttoncirno").style.backgroundImage = "url('images/cirnolunatic.gif')";
      document.getElementById("victoryimage").src = "images/lunaticclear.gif";
      lunatic++;
      animateletterbutton0();
      animateletterbutton1();
      animateletterbutton2();
      animateletterbutton3();
      animateletterbutton4();
      animateletterbutton5();
      animateletterbutton6();
      animateletterbutton7();
      animateletterbutton8();
      animateletterbutton9();
      animateletterbutton10();
      animateletterbutton11();
      animateletterbutton12();
      animateletterbutton13();
      animateletterbutton14();
      animateletterbutton15();
      animateletterbutton16();
      animateletterbutton17();
      animateletterbutton18();
      animateletterbutton19();
      animateletterbutton20();
      animateletterbutton21();
      animateletterbutton22();
      animateletterbutton23();
      animateletterbutton24();
      animateletterbutton25();
      animateletterbutton26();
    }
    else {
      sndlunatic.play();
    }
      restart();
    });



  function makeNewPosition($flybox) {

      // Get viewport dimensions (remove the dimension of the div)
      $flybox = ($flybox || $(div))
      var h = $flybox.height() + 250;
      var w = $flybox.width() - 500;
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh, nw];
  }

  function animateletterbutton0() {
      var $target = $('.fly0');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly0').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton0();
      });
  };

  function animateletterbutton1() {
      var $target = $('.fly1');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly1').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton1();
      });
  };

  function animateletterbutton2() {
      var $target = $('.fly2');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly2').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton2();
      });
  };

  function animateletterbutton3() {
      var $target = $('.fly3');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly3').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton3();
      });
  };  

  function animateletterbutton4() {
      var $target = $('.fly4');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly4').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton4();
      });
  };

  function animateletterbutton5() {
      var $target = $('.fly5');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly5').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton5();
      });
  };

  function animateletterbutton6() {
      var $target = $('.fly6');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly6').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton6();
      });
  };

  function animateletterbutton7() {
      var $target = $('.fly7');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly7').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton7();
      });
  };

  function animateletterbutton8() {
      var $target = $('.fly8');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly8').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton8();
      });
  };

  function animateletterbutton9() {
      var $target = $('.fly9');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly9').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton9();
      });
  };

  function animateletterbutton10() {
      var $target = $('.fly10');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly10').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton10();
      });
  };

  function animateletterbutton11() {
      var $target = $('.fly11');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly11').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton11();
      });
  };

  function animateletterbutton12() {
      var $target = $('.fly12');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly12').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton12();
      });
  };

  function animateletterbutton13() {
      var $target = $('.fly13');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly13').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton13();
      });
  };  

  function animateletterbutton14() {
      var $target = $('.fly14');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly14').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton14();
      });
  };

  function animateletterbutton15() {
      var $target = $('.fly15');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly15').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton15();
      });
  };

  function animateletterbutton16() {
      var $target = $('.fly16');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly16').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton16();
      });
  };

  function animateletterbutton17() {
      var $target = $('.fly17');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly17').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton17();
      });
  };

  function animateletterbutton18() {
      var $target = $('.fly18');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly18').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton18();
      });
  };

  function animateletterbutton19() {
      var $target = $('.fly19');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly19').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton19();
      });
  };

  function animateletterbutton20() {
      var $target = $('.fly20');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly20').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton20();
      });
  };

  function animateletterbutton21() {
      var $target = $('.fly21');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly21').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton21();
      });
  };

  function animateletterbutton22() {
      var $target = $('.fly22');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly22').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton22();
      });
  };

  function animateletterbutton23() {
      var $target = $('.fly23');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly23').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton23();
      });
  };  

  function animateletterbutton24() {
      var $target = $('.fly24');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly24').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton24();
      });
  };

  function animateletterbutton25() {
      var $target = $('.fly25');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly25').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton25();
      });
  };

  function animateletterbutton26() {
      var $target = $('.fly26');
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $('.fly26').animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateletterbutton26();
      });
  };

  function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);
      var greatest = x > y ? x : y;
      var speedModifier = .75;
      var speed = Math.ceil(greatest / speedModifier);
      return speed;
  }



});
