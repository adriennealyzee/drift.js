
// Wiggle
var driftHTML = $('.drift.wiggle').html();
var driftHTML2 = '<span class="wiggleText wiggleStatic">' + driftHTML + '</span>';
$('.drift.wiggle').html(driftHTML2);

$('.drift.wiggle').on('click', function(e) {
  var target = $(this).find('.wiggleText');
  target.addClass('wiggleAnimate').delay(300).queue(function(next) {
    target.removeClass('wiggleAnimate');
    next();
  })

});

// Sliding animation
$('.slide').click(function() {
  $(this).toggleClass('slideAnimate');
});


// Bounce
$('.bounce').click(function() {
  $(this).addClass('bounceAnimate').delay(300).queue(function(next) {
    $(this).removeClass('bounceAnimate');
    next();
  });
});

// Glow
$('.glow').click(function() {
  $(this).addClass('glowAnimate').delay(300).queue(function(next) {
    $(this).removeClass('glowAnimate');
    next();
  });
});


