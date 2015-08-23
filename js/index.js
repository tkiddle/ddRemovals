/**
 * Custom JavaScript file for project
 */
(function(window) {
  'use strict';

  var navInteractions = {
    toggler: function() {
      var $close = $('.nav-toggler'),
          $navigation = $('#js-navigation'),
          $pageContent = $('#js-page-content');

      $close.on('click', function(e) {
        e.preventDefault();
        $navigation.toggleClass('navigation--open');
        $pageContent.toggleClass('page-content--nav-open');
      });
    }
  };

  $(document).ready(function() {
    navInteractions.toggler();

  });
})(window);
