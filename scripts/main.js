/* jshint esversion: 6 */

(function () {
  "use strict";

  let attachRipple = (selector) => {
    let itensNumber = document.querySelectorAll(selector).length;

    for (var i = 0; i < itensNumber; i++) {
      mdc.ripple.MDCRipple.attachTo(document.querySelectorAll(selector)[i]);
    }
  };

  attachRipple('.mdc-button');
  attachRipple('.mdc-ripple-surface');
  mdc.tabs.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

  $('.mdc-button').on('click',function () {
    alert('aaaaaaaaaaaa');
  });

  let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
  $('.menu').on('click', () => drawer.open = true);
})();
