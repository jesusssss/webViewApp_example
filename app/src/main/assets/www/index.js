function alertName() {
    alert("What is uuuup");
}

function showAndroidToast(toast) {
        Android.showToast(toast);
    }

$(document).ready(function() {
var degree = 20;

setInterval(function() { degree = (degree +5); rotate($(".tester"), degree); },65);

function rotate($el, degrees) {
    $el.css({
  '-webkit-transform' : 'rotate('+degrees+'deg)',
     '-moz-transform' : 'rotate('+degrees+'deg)',
      '-ms-transform' : 'rotate('+degrees+'deg)',
       '-o-transform' : 'rotate('+degrees+'deg)',
          'transform' : 'rotate('+degrees+'deg)',
               'zoom' : 1
    });
}
});