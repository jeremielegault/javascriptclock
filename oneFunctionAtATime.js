var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Display current time on the page
var showCurrentTime = () => {
  // display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  //   Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //   Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //   Put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

var updateClock = () => {
  var time = new Date().getHours();
  var messageText;
  var image =
    "https://t1.uc.ltmcdn.com/en/images/8/3/2/img_should_i_cover_my_dog_with_a_blanket_11238_600_square.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById("lolcatImage");

  if (time == partytime) {
    image =
      "https://d3nuqriibqh3vw.cloudfront.net/jardiland_fete_du_chien_aotw.jpg";
    messageText = "Let's Party";
  } else if (time == wakeuptime) {
    image =
      "http://ic.pics.livejournal.com/agilejack/53691925/74307/74307_600.jpg";
    messageText = "Wake up!";
  } else if (time == lunctime) {
    image =
      "https://s36700.pcdn.co/wp-content/uploads/2017/10/A-hungry-dog-looking-up-near-his-food-and-water-bowl-600x400.jpg.optimal.jpg";
    messageText = "Let's have some lunch";
  } else if (time == naptime) {
    image =
      "https://images.ctfassets.net/7ybtdzdgha5d/3qDXwqwbLv4QqxFuIXYfxw/d6a90f91fec439d1c31e047274799f9d/Canva_-_Cute_pug_dog_sleep_on_pillow_in_bed_and_wrap_with_blanket_feel_happy_time.jpg?w=730&q=65";
    messageText = "Sleep tight!!";
  } else if (time < noon) {
    image =
      "https://static.onecms.io/wp-content/uploads/sites/20/2017/08/dog-bowties.jpg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image =
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1667,w_2477,x_11,y_0/v1554740690/shape/mentalfloss/560787-istock-92211517.jpg?itok=IoqSrxyF";
    messageText = "Good evening!";
  } else {
    image =
      "https://petlifetoday.com/wp-content/uploads/2018/05/dog-blanket.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the party time button to work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = () => {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party Over! :(";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    partytime = -1;
    partyTimeButton.innerText = "Party Time! :)";
    partyTimeButton.style.backgroundColor = "#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = () => {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = () => {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = () => {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
