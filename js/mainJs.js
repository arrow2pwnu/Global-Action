function one() {
  document.getElementById("navhome").className = "active";
  document.getElementById("navresearch").className = "";
  document.getElementById("navsubstances").className = "";
}

function two() {
  document.getElementById("navhome").className = "";
  document.getElementById("navresearch").className = "active";
  document.getElementById("navsubstances").className = "";
}

function three() {
  document.getElementById("navhome").className = "";
  document.getElementById("navresearch").className = "";
  document.getElementById("navsubstances").className = "active";
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
