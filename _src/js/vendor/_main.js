(function() {
    'use strict';
    // this function is strict...
}());

// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
    // All pages
    common: {
        init: function() {

        },
        finalize: function() {
        }
    },
    // Home page
    home: {
        init: function() {
            // JS here
        }
    },
    // About page
    about: {
        init: function() {
            // JS here
        }
    }
};

var UTIL = {
    fire: function(func, funcname, args) {
        var namespace = ExampleSite;
        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
            namespace[func][funcname](args);
        }
    },
    loadEvents: function() {

        UTIL.fire('common');

        $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
            UTIL.fire(classnm);
        });

        UTIL.fire('common', 'finalize');
    }
};

$(document).ready(UTIL.loadEvents);




$(".modalDialog").click(function(){
    $(this).find(".close").dialog("close");
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
    }
}
});


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});



// $('a.cta-next-button').on('click',function(e){  

//     var slide = $(this).closest('section').next();

// });








// create a number list
// create a for loop that goes thru the list, 1,2,3,4
// match up the numbers to the sections 
// when the button is pressed the number is increased by 1
// when a number is active, it will follow the command
// the command will be triggering th a links in the menu



// for (i = 0; i < 4; i++) {

//     $('a.cta-next-button').click(function(){

//         var sectionNumber = ["1", "2", "3", "4"]
//         var currentNumber = ;

//         $('#whatwedo') = "1";
//         $('#process') = "2";
//         $('#about') = "3";
//         $('#contact') = "4";

//         if (i === "1") {
//             $('.row-right').find('#whatwedo').trigger();

//         } if (i === "2") {
//             $('.row-right').find('#process').trigger();
//         } if (i === "3") {
//             $('.row-right').find('#about').trigger();
//         } if (i === "4") {
//             $('.row-right').find('#contact').trigger();
//         }


//     })



// }












var sections = document.querySelectorAll(".sections section");
var btn = document.getElementById("btn");
var i = -1;

var goTo = function() {
  i++;
  if (i === sections.length) {
    i = 0;
  }
  btn.setAttribute("href", "#" + sections[i].getAttribute("id"));
}

btn.addEventListener("click", goTo);













// var package = [ 
// first_name: $('.first_name').val(),
// last_name: $('.last_name').val(),
// email: $('.email').val()

// ]
// 
// 


