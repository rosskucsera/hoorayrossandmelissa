// Website Scripts

$(document).ready(function(){

<!----  appstore button - google play button hover ---->
$("a.appstore_button, .footer_right a, a.team_social_icon_twitter, a.team_social_icon_dribbble").fadeTo("fast", 1.0); 
$("a.appstore_button, .footer_right a, a.team_social_icon_twitter, a.team_social_icon_dribbble").hover(function(){
$(this).fadeTo("fast", 0.6); 
},function(){
$(this).fadeTo("fast", 1.0); 
});

$("a.google_play_button").fadeTo("fast", 1.0); 
$("a.google_play_button").hover(function(){
$(this).fadeTo("fast", 0.7); 
},function(){
$(this).fadeTo("fast", 1.0); 
});

});



<!----  fadein header ---->
$(window).bind("load", function() {

$(".header").show().addClass('animated fadeInDownBig');
setTimeout(function(){
}, 600);

setTimeout(function(){

$(".header_left").show().addClass('animated fadeInLeftBig');
}, 800);

setTimeout(function(){
$(".iphone_one").show().addClass('animated fadeInRightBig');

}, 1000);

setTimeout(function(){
$(".iphone_two").show().addClass('animated fadeInRightBig');

}, 1200);


$(".rsvp, .gifts, .when_where, .about_us, .where_to_stay, .section_team, .section_features, .footer").show(); 




<!----  Waypoints (scroll animations)  ---->
$('.rsvp .waypoint').waypoint(function(direction) {
$(".rsvp .inner_section").show().addClass('animated fadeInLeftBig');
}, { offset: 0 })

$('.gifts .waypoint').waypoint(function(direction) {
$(".gifts .inner_section").show().addClass('animated fadeInLeftBig');
}, { offset: 0 })

$('.when_where .waypoint').waypoint(function(direction) {
$(".when_where .inner_section").show().addClass('animated fadeInLeftBig');
}, { offset: 0 })

$('.about_us .waypoint').waypoint(function(direction) {
$(".about_us .inner_section").show().addClass('animated fadeInRightBig');
}, { offset: 0 })

$('.where_to_stay .waypoint').waypoint(function(direction) {
$(".where_to_stay .inner_section").show().addClass('animated fadeInLeftBig');
}, { offset: 0 })



});




