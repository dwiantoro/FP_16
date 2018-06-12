// Image Swap on Links & Buttons
var sourceSwap=function() {
	var $this=$('img[data-alt-src]', this);
	var newSource=$this.data('alt-src');
	$this.data('alt-src', $this.attr('src'));
	$this.attr('src', newSource);
}

$(function() {
	$('a, button').hover(sourceSwap, sourceSwap);
});

// $(function() {
//   $(this).each(function() { 
//     new Image().src=$(this).data('alt-src'); 
//   }).hover(sourceSwap, sourceSwap); 
// });
// $('img[data-alt-src]').each(function(){
//   var $this=$(this);
//   new Image().src=$this.data('alt-src');
//   $this.hover(sourceSwap, sourceSwap);
// });

// Dropdown on Register, Upload, & Settings
$(function(){
	$('.md-select').on('click', function(){
	$(this).toggleClass('active')
	})

	$('.md-select ul li').on('click', function() {
		var v = $(this).text();
		$('.md-select ul li').not($(this)).removeClass('active');
		$(this).addClass('active');
		$('.md-select label button').text(v)
	})
});

// Slick Carousel on Home
$(function(){
	$('.slick-carousel').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}]
	})
});

// Tab Details & Settings
function openContent(evt, tabName) {
	openTab(evt, tabName)
}
function openSettings(evt, tabName) {
	openTab(evt, tabName)
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Toggle Mobile Menu
function toggleButton() {
	var x = $('.mobile-nav');
	if (x.css('display') !== 'block') {
		x.addClass("show");
	} else {
		x.removeClass("show");
	}
}