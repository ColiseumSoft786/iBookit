jQuery(function($){

// Check mobile

    $('#example-3').fCarousel({
        'centerItem'	:	2,
        'separation'	:	30,
        'orientation'	:	'vertical',
        'distance' 		: 	300,
        // 'mousewheel'	:	true,
        'responsive'	:	{
            0		:	{ 'separation' : 100, 'mousewheel' : false},
            768		:	{ 'mousewheel' : true },
            1024	:	{ 'separation' : 100 }
        },
        // 'autoplay'		:	3000,
        'onChange'		:	function(carousel){

            $('.next').removeClass('next');
            $('.pre').removeClass('pre');
            var pre = carousel.data('prevItem').index() + 1;
            var next = carousel.data('nextItem').index() + 1;
            $('.item-'+pre).addClass('pre transit');
            $('.item-'+next).addClass('next');

        },
        'afterChange'	:	function(carousel, centerItem){

            // alert(next_value);
        },
    });
	
// Example 3
// 	$('#example-3').fCarousel({
// 		'centerItem'	:	2,
// 		'separation'	:	250,
// 		'orientation'	:	'vertical',
// 		// 'mousewheel'	:	true,
// 		'responsive'	:	{
// 								0		:	{ 'separation' : 200, 'mousewheel' : false },
// 								768		:	{ 'mousewheel' : true },
// 								1024	:	{ 'separation' : 250 }
// 							},
// 		// 'autoplay'		:	3000,
// 		'afterChange'	:	function(carousel, centerItem){
// 								$('.next').removeClass('next');
// 								$('.pre').removeClass('pre');
// 								var pre = carousel.data('prevItem').index() + 1;
// 								var next = carousel.data('nextItem').index() + 1;
// 								$('.item-'+pre).addClass('pre');
// 								$('.item-'+next).addClass('next');
// 								// alert(next_value);
// 							},
// 	});
	
});