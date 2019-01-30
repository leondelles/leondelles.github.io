const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
function expand() {
    $(".search").toggleClass("close");
    $(".input").toggleClass("square");
    if ($('.search').hasClass('close')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }
  $('button').on('click', expand);



// ===============================================

var wrapper = document.querySelector(".title");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.row .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
});


var header = $('header');
 var navbar = $('.navbar');
 var fixed = true;
 var link = $('.navbar .nav-link');
 var up = $('.up');
 var show = true;
 var countbox = "#counts";
 $(window).on("scroll load resize", function () {
 if (!show) return false;
 var w_top = $(window).scrollTop();
 var e_top = $(countbox).offset().top;
 var w_height = $(window).height();
 var d_height = $(document).height();
 var e_height = $(countbox).outerHeight();
 if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
 $(".spincrement").spincrement({
 from: 0,
 to: false,
 // thousandSeparator: "",
 duration: 3000
 });
 show = false;
 }
 });

 function navbarfixed() {
 if (scrollY >= header.innerHeight() && !fixed) {
 fixed = true;
 navbar.addClass('fixed-top fix').css('opacity', 0).animate({
 opacity: 1
 }, 700);
 header.css({
 paddingTop: navbar.innerHeight()
 });
 } else if (scrollY <= header.innerHeight() && fixed) {
 fixed = false;
 navbar.animate({
 opacity: 0,
 }, 700, function () {
 navbar.removeClass('fixed-top fix');
 navbar.removeAttr('style');
 header.removeAttr('style');
 });

 }
 }



