(function() {

    // slide menu
    var $body = $('body');
    $body.on('click', '#slide-menu-button', function(e) {
      e.preventDefault();
      $body.toggleClass('slide-menu-active');

      if ($body.hasClass('slide-menu-active')) {
        $body.one('click.body-wrapper', '.body-wrapper', function(e) {
          e.preventDefault();
          $body
            .removeClass('slide-menu-active')
            .off('touchend.body-wrapper');
        }).one('touchend.body-wrapper', '.body-wrapper', function(e) {
          e.preventDefault();
          $body
            .removeClass('slide-menu-active')
            .off('click.body-wrapper');
        });
      }
    });

    // sub menu
    $body.on('click', '.has-sub-menu > a', function(e) {
      e.preventDefault();
      var $menu = $(this).parent();
      var $subMenu = $('.sub-menus ' + '[data-parent-menu-id=' + $menu.data('menu-id') + ']');

      if ($subMenu.length) {
        $subMenu.addClass('active');
        $('.sub-menus').addClass('active');
        $('.main-menu').addClass('unactive');
      }
    });
    
    // go back to main menu
    $body.on('click', '.back-to-main', function(e) {
      e.preventDefault();
      var $thisSubMenu = $(this).closest('.sub-menu');

      $('.sub-menus').removeClass('active');
      $('.main-menu').removeClass('unactive');

      setTimeout(function() {
        $thisSubMenu.removeClass('active');
      }, 300);
    });

})();