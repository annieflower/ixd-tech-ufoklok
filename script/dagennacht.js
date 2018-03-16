// KLOK
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();    
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

// hieronder word de ochtend bepaald en ervoor gezorgd dat de afbeelding van de ochtend goed staat en de tekst
    if (h > 6 && h < 13) {    
        document.getElementById("morning").innerHTML = "GOODMORNING";
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('style/images/morning.jpg')";

// hieronder zorg ik ervoor dat de tekst knippert van oranje naar wit
        var tl1 = new TimelineMax()
        tl1.to('#morning', 0.5, { top: 0, color: 'orange' })
        .to('#morning', 0.5, { top: 0, color: 'white' });
    }
// hieronder word de middag bepaald en ervoor gezorgd dat de afbeelding van de middag goed staat en de tekst
    else if (h > 12 && h < 19) {
        document.getElementById("afternoon").innerHTML = "GOOD AFTERNOON!";
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('style/images/afternoon.jpg')";

// hieronder zorg ik ervoor dat de tekst knippert van blauw naar wit
        var tl2 = new TimelineMax()
        tl2.to('#afternoon', 0.5, { top: 0, color: '#14addf' })
        .to('#afternoon', 0.5, { top: 0, color: 'white' });
    }
// hieronder word de avond/nacht bepaald en ervoor gezorgd dat de afbeelding van de avond/nacht goed staat en de tekst
    else if (h > 18 && h < 7){
        document.getElementById("night").innerHTML = "GOODNIGHT!";
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('style/images/night.jpg')";

// hieronder zorg ik ervoor dat de tekst knippert van geel naar wit
        var tl3 = new TimelineMax()
        tl3.to('#night', 0.5, { top: 0, color: 'yellow' })
        .to('#night', 0.5, { top: 0, color: 'white' });
    }

    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
    	i = "0" + i
    }  // add zero in front of numbers < 10
    
    return i;
}

// Deze var zorgt ervoor dat mijn ufo door het scherm vliegt :) 
var tl4 = new TimelineMax({repeat: -1})
tl4.to('#ufo', 15, { left: 1400, ease: Power1.easeOut });

// Hieronder staat de functie beschreven waarin de datum op de pagina tevoorschijn komt.
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
var today = dd+' '+'/'+' '+mm+' '+'/'+' '+yyyy;
document.getElementById('date').innerHTML = today;

