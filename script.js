var imgArray = ['linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg2.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg3.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg4.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg5.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg6.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg7.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg8.jpg)',
'linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(images/bg9.jpg)'],
imgIndex = 0, body = document.querySelector('body');

function changeImage() {
    body.style.background = imgArray[imgIndex];
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.backgroundBlendMode = 'darken';
    imgIndex++;
    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
}

setInterval(changeImage,5000);

var i = 0, n = 0, speed = 100, header = document.querySelector('.about h1'), txt1 = document.querySelector('.about .p1'), txt2 = document.querySelector('.about .p2'), txt3 = document.querySelector('.about .p3'), txt4 = document.querySelector('.about .p4'), txt5 = document.querySelector('.about .p5'), txt6 = document.querySelector('.about .p6'), txt7 = document.querySelector('.about .p7'), txt8 = document.querySelector('.about .p8'), txt9 = document.querySelector('.about .p9'), txt10 = document.querySelector('.about .p10'), txt11 = document.querySelector('.about .p11'), txt12 = document.querySelector('.about .p12'), txt13 = document.querySelector('.about .p13'), headerTxt = 'Vote Wisely!';


const txtVarArr = [txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11, txt12, txt13];


const paraTxtArr = [
  `I don’t believe there is a Messiah that will solve the many problems of Nigeria in the blink of an eye.`,
`But I have found a candidate who fits my description of good leadership which is Service, selflessness and sacrifice through discipline, integrity, accountability, truth and love to the People.`,
`A leader who is mentally and physically fit, one who I believe is most competent to do the job and can begin to pilot the affairs of our dear Nation to a better place.`,
`With due respect to every other candidate and their supporters, I have chosen to vote for the candidate who has offered himself by his words and actions to Serve the People.`,
`I don’t know about you, but I will cast my vote for Peter Obi as President of Nigeria.`,
`I am committed to a better Nigeria. A Nigeria that works for all. A Nigeria where the son of Nobody can become Somebody. A Country that provides a level playground and an enabling environment for all Nigerians to succeed.`,
`I am committed to This Nigeria Now and  will remain committed even after the Elections.`,
`Fellow Nigerians, as you come out to vote for your preferred candidate, please consider your future success and prosperity and that of generations to come and kindly know that the power to elect good leaders rests upon our shoulders.`,
`May the will of the people prevail.`,
`Love always...`,
`❤️`,
`📝copied: @mr_macaroni`,
`Created with 💙 from Lex`];

function typingEffect() {
  if (i <= headerTxt.length) {
    header.innerHTML += headerTxt.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        } else {
            i = 0;
            typeEffect();
        }
    }
    function typeEffect() {
        speed = 50;
        if (i <= paraTxtArr[n].length) {
            txtVarArr[n].innerHTML += paraTxtArr[n].charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            i = 0;
            n++;
            typeEffect();
        }
    }

let bgMusic = document.getElementById('bg-music');

function playMusic(x) {
  x.play();
  x.loop = true;
}

playMusic(bgMusic);
typingEffect();
    
