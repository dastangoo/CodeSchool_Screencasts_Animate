// Animate on Scroll
var $triggerElement = $('#purchase img');
var triggerPosition = $triggerElement.offset().top;
var $window = $(window);
var windowHeight = $window.height();
var threshold = thresholdPosition - (0.5 * windowHeight);

$window.on('scroll', function() {
  var scrollPosition = $window.scrollTop();
  if (scrollPosition > threshold) {
    $triggerElement.addClass('jello');
  }
});