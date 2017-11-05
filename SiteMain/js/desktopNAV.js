// DESKTOP SCRIPT JQUERY
$(function() {
	// on hover, expand width and turn opacity up
	$('.DesktopNAV').hover(function() {
	  $('.Navigation-label').css('opacity', '100');
	  $('.Navigation-label').css('right', '0.9375rem');
	  $('.DesktopNAV').css('width', '240px');
	  $('.DesktopNAV').css('background', 'rgba(5, 11, 11, 0.5)');
	}, function() {
	  // on mouseout, reset the opacity & width
	  $('.Navigation-label').css('opacity', '0');
	  $('.Navigation-label').css('right', ' 2.9375rem');
	  $('.DesktopNAV').css('width','70px');
	  $('.DesktopNAV').css('background', 'rgba(5, 11, 11, 0)');
	});
          });