var STORM = STORM || {};
'use strict';

$(function(){
	STORM.modernizr();
	STORM.init();
    STORM.dropdown();
    STORM.tabs();
    STORM.toggle();
});


STORM.modernizr = function() {
    //load scripts for <= IE8 - :nth-child
    Modernizr.load({
        test: Modernizr.borderradius,
        nope: ['/scripts/vendor/selectivizr-min.js']
    });
    Modernizr.load({
        test: Modernizr.input.placeholder,
        nope: ['/scripts/vendor/placeholder.min.js']
    });
};


STORM.init = function() {
    $('.open-modal').on('click', function(e) {
        e.preventDefault();
        $('.modal').show();
    });

    $('.modal-preview').on('click', function(e) {
        e.preventDefault();
        $('.modal').hide(); 
    });

};

STORM.dropdown = function() {
    var $dropdown = $('.dropdown');
    if (!$dropdown.length) return;

    $dropdown.on('click', function(e) {
        e.preventDefault();
        if($dropdown.hasClass('is-visible')) {
            $dropdown.removeClass('is-visible'); 
        } else {
            $(this).addClass('is-visible');
       }
    });
    
};

STORM.tabs = function() {
    $tabs = $('.tab-nav');
    if (!$tabs.length) return;

    // Tabs
    // Hide all tab-content
    $('.tab-content').hide();
    // Tabs function
    $('.tab-nav a').on('click', function(e) {
        e.preventDefault();
        // Active class to tav nav
        $('.tab-nav li').removeClass('active');
        $(this).parent().addClass('active');
        // Get tab ID
        var tabID = $(this).attr('href');
        // Display selected tab
        $('.tab-content').hide();
        $(tabID).fadeIn('fast');
    });
    // Activate first tab
    $('.tab-nav .active a').click();

};

STORM.toggle = function() {
    $toggle = $('.toggle-content');
    if (!$toggle.length) return;

    // Toggle
    $('.toggle-content').hide();
    $('.toggle-handle').on('click', function(e) {
        e.preventDefault(); 
        if($(this).hasClass('expanded')) {
            $(this).removeClass('expanded').next('.toggle-content').hide();
            $(this).children('span').attr('data-icon', 'f');
        } else {
            $(this).addClass('expanded').next('.toggle-content').fadeIn();
            $(this).children('span').attr('data-icon', 'd');
        }
    });

};