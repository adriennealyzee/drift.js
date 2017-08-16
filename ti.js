var driftHTML = $('.drift.wiggle').html();
var driftHTML2 = '<span class="wiggleText wiggleStatic">' + driftHTML + '</span>';
$('.drift.wiggle').html(driftHTML2);

$('.drift.wiggle').on('click', function(e) {

  // Resizing
  var target = $(this).find('.wiggleText');
  console.log('target', target);
  // target.data('original-size', $(this).css('fontSize'));
  // var originalSize = target.data('original-size');
  // $(this).animate({ fontSize: '+=2' });
  // $(this).animate({ fontSize: originalSize });

  target.addClass('wiggleAnimate').delay(300).queue(function(next) {
    target.removeClass('wiggleAnimate');
    next();
  })

  // $(this).addClass('animate').delay(300).queue(function(next) {
  //   $(this).removeClass('animate');
  //   next();
  // })

});

// Sliding animation
$('.slide').hover(function() {
  $(this).addClass('slideAnimate')
}, function() {
  $(this).removeClass('slideAnimate');
});



