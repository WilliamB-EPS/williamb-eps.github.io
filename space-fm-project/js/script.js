// JS program which finds current show based on time

var today = new Date();
var time = today.getHours();
var day = today.getDay();
var show;
var host;
// var image_path;
var image_path = "images/dj-placeholder"
// monday
if (day == 1) {
    if (19 <= time && time < 21) {
        show = "Roots Roundup";
        host = "Hosted by: Jon Noe"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
// tuesday
} else if (day == 2) {
    if (20 <= time && time < 21) {
        show = "Bargain Bin Vinyl Hour";
        host = "Megan";
        image_path = "images/megan.jpg"
    } else if (21 <= time && time < 23) {
        show = "Magnuson Blues"
        host = "Hosted by: John Wooler"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
// wednesday
} else if (day == 3) {
    if (19 <= time && time < 21) {
        show = "World Beat Adventure";
        host = "Hosted by: Mark Patterson"
    } else if (21 <= time && time < 22) {
        show = "Transcend This Temporal Plane"
        host = "Hosted by: DJ Nine"
        image_path = "images/dj-9.jpg"
    } else if (22 <= time && time < 23) {
        show = "Mulicultural Mindsets"
        host = "Hosted by: DJ Afreesha"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
// thursday
} else if (day == 4) {
    if (19 <= time && time <= 20) {
        show = "Soundtrack Cinema";
        host = "Hosted by: Mark Patterson"
    } else if (time >= 23) {
        show = "Vanishing Point"
        host = "Hosted by: Sage & Eli"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
// friday
} else if (day == 5) {
    if (19 <= time && time < 21) {
        show = "Wedgewood Rocks";
        host = "Hosted by: Eric & Jennie"
    } else if (21 <= time && time < 22) {
        show = "Pop Your New BF's Too Stupid to Know About"
        host = "Hosted by: Liz & Sean"
    } else if (22 <= time && time <= 23) {
        show = "Maximum Rock and Roll"
        host = "Hosted by: DR MRR"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
// saturday
} else if (day == 6) {
    if (16 <= time && time < 17) {
        show = "Juke in the Back";
        host = "Hosted by: Matt the Cat"
    } else if (17 <= time && time < 19) {
        show = "Up the River";
        host = "Hosted by: Johnny Ignite"
    } else if (19 <= time && time < 21) {
        show = "Jet Set";
        host = "Hosted by: Mike Fuller"
    } else if (21 <= time && time < 23) {
        show = " Head’s Up";
        host = "Hosted by: Carmen Ghia"
        image_path = "images/carmen-ghia.png"
    } else if (time >= 23) {
        show = "Story Untold";
        host = "Hosted by: PJ Noce"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    } 

} else if (day == 0) {
    if (12 <= time && time < 14) {
        show = "American Routes";
        host = "Hosted by: Nick Spitzer";
    } else if (16 <= time && time < 20) {
        show = "Fresh Licks";
        host = "Hosted by: Teigan";
    } else if (18 <= time && time < 19) {
        show = "History as Music, Music as History";
        host = "Hosted by: DJ Professor Grumpy";
        image_path = "images/prof-dj-grumpy.jpg"
    } else if (19 <= time && time < 20) {
        show = "The Soul Shakedown";
        host = "Hosted by: DJ Johnny Cool"
    } else if (20 <= time && time < 21) {
        show = "Broken Alaska";
        host ="Hosted by: Broken Alaska Cast"
    } else {
        show = "SPACE MIX";
        host = "Hosted by: Eric Z."
    }
}


    function openNav() {
        document.getElementById("myNav").style.width = "40%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }