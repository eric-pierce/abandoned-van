/*==============================
	- MAP JS (ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function($) {

'use strict';

	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#71424A" },
        			{ saturation: -50 }
      			]
    		}
  		];

		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});


		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
    		center: new google.maps.LatLng(26.4400128,-82.0807525),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			scrollwheel: false,

  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});

		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.439986,-82.0397067),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="wedding-marker" class="med-icon-wrapper scale-animation"><div class="med-circle"></div><div class="med-icon-text">Ceremony</div></div>',
       		labelAnchor: new google.maps.Point(38, 38),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.454651, -82.042420),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="gift-marker" class="med-icon-wrapper scale-animation"><div class="med-circle"></div><div class="med-icon-text">Reception</div></div>',
       		labelAnchor: new google.maps.Point(38, 38),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.445470, -82.112330),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="bus-marker" class="de-icon circle medium-size" style="background-color:#e9c24c;"><i class="de-icon-bicycle-1"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.442311, -82.083214),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="food-marker" class="de-icon circle medium-size" style="background-color:#bfd730;"><i class="de-icon-tree"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.453073, -82.013745),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="train-marker" class="de-icon circle medium-size" style="background-color:#8fcbda;"><i class="de-icon-ship"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.463658, -82.032119),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-harbor"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.522423, -82.193018),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-fast-food"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker8 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.450930, -82.031271),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker9 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.446647, -82.041327),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-beer-1"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker10 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.434406, -82.080595),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-bar"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker11 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.451039, -82.023444),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-coffee"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker12 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.437555, -82.079610),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-restaurant"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker13 = new MarkerWithLabel({
       		position: new google.maps.LatLng(26.437867, -82.069216),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map,
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-shopping-bag"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});




		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Sanibel Inn</h6>'+
			'<div class="info-window-desc">Where it\'s all going down!</div>'+
      	'</div>';

		var marker1_infowindow = new google.maps.InfoWindow({
      		content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//OPEN INFO WINDOWS ON LOAD
  		marker1_infowindow.open(map,marker1);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});


		//INFO WINDOWS 2
		//=======================================================================================
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>The Dunes of Sanibel</h6>'+
      	'</div>';

		var marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function() {
			marker2_infowindow.open(map,marker2);
			marker1_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});


		//INFO WINDOWS 3
		//=======================================================================================
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Ding Darling Refuge</h6>'+
      	'</div>';

		var marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function() {
			marker3_infowindow.open(map,marker3);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});


		//INFO WINDOWS 4
		//=======================================================================================
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Tarpon Bay Kayaking</h6>'+
      	'</div>';

		var marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function() {
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.open(map,marker4);
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 5
		//=======================================================================================
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Sanibel Beaches</h6>'+
      	'</div>';

		var marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker5, 'click', function() {
			marker5_infowindow.open(map,marker5);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 6
		//=======================================================================================
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Fishing</h6>'+
      	'</div>';

		var marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker6, 'click', function() {
			marker6_infowindow.open(map,marker6);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 7
		//=======================================================================================
		var contentString7 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>The Mucky Duck</h6>'+
      	'</div>';

		var marker7_infowindow = new google.maps.InfoWindow({
      		content: contentString7,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker7, 'click', function() {
			marker7_infowindow.open(map,marker7);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 8
		//=======================================================================================
		var contentString8 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Gramma Dots</h6>'+
      	'</div>';

		var marker8_infowindow = new google.maps.InfoWindow({
      		content: contentString8,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker8, 'click', function() {
			marker8_infowindow.open(map,marker8);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 9
		//=======================================================================================
		var contentString9 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Lazy Flamingo</h6>'+
      	'</div>';

		var marker9_infowindow = new google.maps.InfoWindow({
      		content: contentString9,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker9, 'click', function() {
			marker9_infowindow.open(map,marker9);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 10
		//=======================================================================================
		var contentString10 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Doc Ford\'s Rum Bar</h6>'+
      	'</div>';

		var marker10_infowindow = new google.maps.InfoWindow({
      		content: contentString10,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker10, 'click', function() {
			marker10_infowindow.open(map,marker10);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});


		//INFO WINDOWS 11
		//=======================================================================================
		var contentString11 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Lighthouse Café</h6>'+
      	'</div>';

		var marker11_infowindow = new google.maps.InfoWindow({
      		content: contentString11,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker11, 'click', function() {
			marker11_infowindow.open(map,marker11);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker12_infowindow.close();
			marker13_infowindow.close();
  		});

		//INFO WINDOWS 12
		//=======================================================================================
		var contentString12 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Timbers Restaurant</h6>'+
      	'</div>';

		var marker12_infowindow = new google.maps.InfoWindow({
      		content: contentString12,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker12, 'click', function() {
			marker12_infowindow.open(map,marker12);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker13_infowindow.close();
  		});


		//INFO WINDOWS 13
		//=======================================================================================
		var contentString13 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Periwinkle Place</h6>'+
      	'</div>';

		var marker13_infowindow = new google.maps.InfoWindow({
      		content: contentString13,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker13, 'click', function() {
			marker13_infowindow.open(map,marker13);
			marker1_infowindow.close();
			marker2_infowindow.close();
			marker3_infowindow.close();
			marker4_infowindow.close();
			marker5_infowindow.close();
			marker6_infowindow.close();
			marker7_infowindow.close();
			marker8_infowindow.close();
			marker9_infowindow.close();
			marker10_infowindow.close();
			marker11_infowindow.close();
			marker12_infowindow.close();
  		});

		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);