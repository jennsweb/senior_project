

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

//Hide "JavaScript disabled" error message when JavaScript loads
document.getElementById("gallery__filters__message").style.display = "none";

//Store a function that loops through .process-step element and shows it
//The filterSelection() function looks for the CSS class named in the parameter, here variable "c"
function filterSelection(c) {
  var thumbnails = document.getElementsByClassName("gallery__column");
  if (c == "all") c = "";
  // Add the "filter--show" class (display:block) to the filtered thumbnails, and remove the "filter--show" class from the elements that are not selected
  for (var i = 0; i < thumbnails.length; i++) {
    removeFilter(thumbnails[i], "filter--show");
    if (thumbnails[i].className.indexOf(c) > -1) addFilter(thumbnails[i], "filter--show");
  }
}

// Store a function that shows filtered elements
function addFilter(element, name) {
  //Used in filterSelection() as addFilter(thumbnails[i], "filter--show")
  //Then element is document.getElementsByClassName("gallery__column")[i]
  //Then name is CSS class .filter--show in the above example; filterSelection("filter--logos") would find all logo elements
  //Saves an array listing all the CSS classes an element has (since CSS classes are listed w/spaces in between in HTML)
  var arr1 = element.className.split(" ");
  //Saves an array of number of elements with the .filter--show class as instances of how many times .filter--show occurs
  var arr2 = name.split(" ");
  //Loops as many times as there are instances of .filter--show
  for (var i = 0; i < arr2.length; i++) {
    // .indexOF() searches for the occurence of .filter--show in arr2; result of -1 means there are 0 occurrences
    //If the list of CSS classes includes 0 occurrences of .filter--show, then add .filter--show to that element
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Store a function that hides elements that are not selected
function removeFilter(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    // As long as the CSS class list has ANY occurrences of .filter--show...
    while (arr1.indexOf(arr2[i]) > -1) {
      // ...remove the latest occurrence of .filter--show in the CSS class list (removes 1 at a time)
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  // Re-join the ammended CSS class list back to the HTML element
  element.className = arr1.join(" ");
}

//On page load, show all thumbnails
filterSelection("all");

// Highlight the filter currently active
var gallery__filterContainer = document.getElementById("gallery__filters");
var gallery__filters = gallery__filterContainer.getElementsByClassName("gallery__filter");
// For as many filter buttons are found within the parent container...
for (var i = 0; i < gallery__filters.length; i++) {
  //Listen for a mouse click on each
  gallery__filters[i].addEventListener("click", function() {
    //If one registers a click then remove the CSS class .tag--active from the old button and give it instead to the new button that registered the click
    var current = document.getElementsByClassName("tag--active");
    current[0].className = current[0].className.replace(" tag--active", "");
    this.className += " tag--active";
  });
}

//Run a query function when a button is clicked
document.getElementById('filter--show-all').addEventListener("click", function() {
  filterSelection("all");
}, false);
document.getElementById('filter--logos').addEventListener("click", function() {
  filterSelection("tag--logos");
}, false);
document.getElementById('filter--identity').addEventListener("click", function() {
  filterSelection("tag--identity");
}, false);
document.getElementById('filter--illustration').addEventListener("click", function() {
  filterSelection("tag--illustration");
}, false);
document.getElementById('filter--web-development').addEventListener("click", function() {
  filterSelection("tag--web-development");
}, false);
document.getElementById('filter--packaging').addEventListener("click", function() {
  filterSelection("tag--packaging");
}, false);



