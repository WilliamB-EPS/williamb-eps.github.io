// JS program which finds current show based on time

var today = new Date();
var time = today.getHours();
var day = today.getDay();
var show;
// monday
if (day == 1) {
    if (19 <= time <= 21) {
        show = "Roots Roundup";
    } else {
        show = "SPACE MIX ";
    }
// tuesday
} else if (day == 2) {
    if (17 <= time && time < 21) {
        show = "Northest Orbit";
    } else if (21 <= time && time <= 23) {
        show = "Magnuson Blues"
    } else {
        show = "SPACE MIX";
    }
// wednesday
} else if (day == 3) {
    if (17 <= time && time < 21) {
        show = "World Beat Adventure";
    } else if (21 <= time && time < 22) {
        show = "Transcend This Temporal Plane"
    } else if (22 <= time && time <= 23) {
        show = "PM Love Potion no. 69"
    } else {
        show = "SPACE MIX";
    }
// thursday
} else if (day == 4) {
    if (14 <= time && time <= 14.5) {
        show = "SoundPages";
    } else if (15 <= time && time <= 16) {
        show = "The Bridge";
    } else if (19 <= time && time < 20) {
        show = "Soundtrack Cinema";
    } else if (20 <= time && time < 21) {
        show = "Vinyl Jacket";
    } else if (21 <= time && time < 23) {
        show = "Jazz Punks";
    } else if (time >= 23) {
        show = "Vanishing Point"
    } else {
        show = "SPACE MIX";
    }
// friday
} else if (day == 5) {
    if (19 <= time && time < 21) {
        show = "WedgWood Rocks";
    } else if (21 <= time && time < 22) {
        show = "Pop Songs Your New Boyfriend's Too Stupid to Know About"
    } else if (22 <= time && time <= 23) {
        show = "Maximum Rock and Roll"
    } else {
        show = "SPACE MIX";
    }
// saturday
} else if (day == 6) {
    if (16 <= time && time < 17) {
        show = "Juke in the Back";
    } else if (17 <= time && time < 19) {
        show = "Up the River";
    } else if (19 <= time && time < 21) {
        show = "Jet Set";
    } else if (21 <= time && time < 23) {
        show = " Head’s Up";
    } else if (time >= 23) {
        show = "Story Untold";
    } else {
        show = "SPACE MIX";
    }
// sunday
} else if (day == 0) {
    if (0 <= time && time <= 2) {
        show = "Story Untold";
    } else if (7 <= time && time <= 8) {
        show = "Radio Survivor";
    } else if (12 <= time && time < 14) {
        show = "American Routes";
    } else if (18 <= time && time < 19) {
        show = "History as Music, Music as History";
    } else if (19 <= time && time < 20) {
        show = "Johnny Cool's Happy Hour";
    } else if (20 <= time && time < 20.5) {
        show = "Broken, Alaska";
    } else if (21 <= time && time <= 22) {
        show = "Sound Improv Live! (2nd Sunday)";
    } 
    } else {
        show = "SPACE MIX";
}
