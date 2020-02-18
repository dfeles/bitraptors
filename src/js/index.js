import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});


$(window).scroll(function () {
  var a = $(window).scrollTop();
  if(a<50) {
    $('.navbar').addClass("hidden");
  } else {
    $('.navbar').removeClass("hidden");
  }
  console.log(a);
});

// Your jQuery code
