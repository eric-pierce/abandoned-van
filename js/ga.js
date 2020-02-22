window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-107383933-1');

$("#targetreg").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Registry',
		'event_label': 'Target'
	});
});

$("#amazonreg").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Registry',
		'event_label': 'Amazon'
	});
});

$("#bbbreg").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Registry',
		'event_label': 'Bed Bath and Beyond'
	});
});

$("#cratereg").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Registry',
		'event_label': 'Crate and Barrel'
	});
});




$("#menuhome").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Menu',
		'event_label': 'Home'
	});
});

$("#menuwed").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Menu',
		'event_label': 'Wedding'
	});
});

$("#menuacc").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Menu',
		'event_label': 'Accomodation'
	});
});

$("#menuthings").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Menu',
		'event_label': 'Things To Do'
	});
});

$("#menureg").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Menu',
		'event_label': 'Registry'
	});
});






$("#sanibelinnexpand").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Hotels',
		'event_label': 'Sanibel Inn Expander'
	});
});

$("#songofseaexpand").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Hotels',
		'event_label': 'Song of the Sea Expander'
	});
});

$("#seasideinnexpand").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Hotels',
		'event_label': 'Seaside Inn Expander'
	});
});





$("#dunesgolf").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'GOLFING AT THE DUNES'
	});
});
$("#ding").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'DING DARLING REFUGE'
	});
});
$("#tarpon").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'TARPON BAY KAYAKING'
	});
});
$("#beaches").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'SANIBEL BEACHES'
	});
});
$("#perrywinkle").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'PERIWINKLE PLACE'
	});
});
$("#fishing").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Things To Do',
		'event_label': 'FISHING'
	});
});


$("#mucky").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'THE MUCKY DUCK'
	});
});
$("#gramma").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'GRAMMA DOTS'
	});
});
$("#lazy").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'LAZY FLAMINGO'
	});
});
$("#fords").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'DOC FORDS RUM BAR'
	});
});
$("#lighthouse").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'LIGHTHOUSE CAFE'
	});
});
$("#timbers").on("click", "img", function(){
	gtag('event', 'click', {
		'event_category': 'Restaurants',
		'event_label': 'TIMBERS'
	});
});
