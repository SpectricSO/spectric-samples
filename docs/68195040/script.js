var time = document.getElementById("time");
var notification = document.getElementById("notification");
var notificationHeader = document.getElementById("notificationHeader");
var notificationDescription = document.getElementById("notificationDescription");
var verificationCode = Math.floor(1000 + Math.random() * 9000);
var input = document.getElementById("instagramNumberText");
var correctOrWrongCheck = document.getElementById("correctOrWrongCheck");
var verificationCodePTag = document.getElementById("verificationCode");
var instagram = document.getElementById("instagramApp");
var mail = document.getElementById("mailApp");
var createAccountButton = document.getElementById("createAccount");
var createAccountForm = document.getElementById("createAccountForm");
var verificationCodeInstagramPage = document.getElementById("verificationCodeInstagramPage");
var controlVerificationCodeButton = document.getElementById("controlVerificationCode");
var continueToInstagramAccountButton = document.getElementById("continueToInstagramAccount");
var verificationCodeEmailDescription = document.getElementById("verificationCodeEmailDescription");
var verificationCodeEmail = document.getElementById("verificationCodeEmail");
var erfolgreichAngemeldet = document.getElementById("erfolgreichAngemeldet");
var instagramAccount = document.getElementById("instagramAccount");

var instagramName = document.getElementById("instagramName");
var instagramNameInput = document.getElementById("instagramNameInput");


// Time

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

// Insta

function controlVerificationCode() {
  if (input.value == verificationCode) {
    correctOrWrongCheck.innerHTML = "Der Code war korrekt!";
    continueToInstagramAccountButton.style.display = "block";
    continueToInstagramAccountButton.style.margin = "5px auto";
    controlVerificationCodeButton.style.display = "none";
  } else if (input.value !== verificationCode) {
    correctOrWrongCheck.innerHTML = "Der Code ist leider Falsch!";
    continueToInstagramAccountButton.style.display = "none";
    controlVerificationCodeButton.style.display = "block";
  }
}

verificationCodeEmailDescription.innerHTML = "Ihr Bestätigunscode lautet: " + verificationCode;

// OPEN AND CLOSE APPS

function openVerificationCodeInstagramPage() {
  createAccountForm.style.display = "none";
  verificationCodeInstagramPage.style.display = "block"
  verificationCodeEmail.style.display = "block";
  instagramName.value = instagramNameInput.value;
  notification.style.transform = "translate(-50%, -50%) scale(0)";
  notificationDescription.innerHTML = "Ihr Bestätigunscode lautet: ...";
  setTimeout(
    function() {
      notification.style.transform = "translate(-50%, -50%) scale(1)";
    }, 1000);
  setTimeout(
    function() {
      notification.style.transform = "translate(-50%, -50%) scale(0)";
    }, 7000);
}

function continueToInstagramAccount() {
  verificationCodeInstagramPage.style.display = "none";
  instagramAccount.style.display = "flex";
  erfolgreichAngemeldet.display = "none";
  notificationDescription.innerHTML = "Erfolgreich bei Instagram angemeldet"
  notification.style.transform = "translate(-50%, -50%) scale(0)";
  erfolgreichAngemeldet.style.display = "block";

  setTimeout(
    function() {
      notification.style.transform = "translate(-50%, -50%) scale(1)";
    }, 1000);
  setTimeout(
    function() {
      notification.style.transform = "translate(-50%, -50%) scale(0)";
    }, 7000);


  var counter = 0;
  var followers = document.getElementById('followers');
  setTimeout(function() {
    var st = setInterval(function() {
      followers.innerHTML = ++counter;
    }, 100)
  }, 100);
}


function closeNotification() {
  notification.style.transform = "translate(-50%, -50%) scale(0)";
}

var isAppOpened = false;

function openInstagram() {
  isAppOpened = true;
  instagram.style.transform = "scale(1)";
}

function openMail() {
  isAppOpened = true;
  mail.style.transform = "scale(1)";
}

function closeApp() {
  isAppOpened = false;
  instagram.style.transform = "scale(0)";
  mail.style.transform = "scale(0)";
}

window.onload = function() {
  document.getElementById("instagramNumberText").value = '';
}
const slider = document.getElementById("slider");
const panels = document.querySelectorAll('.panel');
var lastX = 0;
var isDown = false;

document.addEventListener("mousedown", function(e) {
  lastX = e.pageX;
  isDown = true;
})
document.addEventListener("mousemove", function(e) {
  if (isDown && !isAppOpened) {
    const curX = e.pageX;
    const diff = lastX - curX;
    slider.scrollLeft += diff;
    lastX = curX;
  }

})
document.addEventListener("mouseup", function() {
  isDown = false;
  slider.style.scrollBehavior = "smooth";
  if (slider.scrollLeft > 175) {
    panels[1].scrollIntoView();
  } else {
    panels[0].scrollIntoView();
  }
  slider.style.scrollBehavior = "unset";
})
