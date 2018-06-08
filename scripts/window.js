/* jshint esversion: 6 */

(function () {
  'use strict';

  let _d = document;
  const minBtn = _d.querySelector('.js-title-bar__btn--min');
  const maxBtn = _d.querySelector('.js-title-bar__btn--max');
  const closeBtn = _d.querySelector('.js-title-bar__btn--close');

  const {app, BrowserWindow} = require('electron');
  let remote = require('electron').remote;

  function init() {
    minBtn.addEventListener('click', function (e) {
      let app = remote.getCurrentWindow();
      app.minimize();
    });

    maxBtn.addEventListener('click', function (e) {
      if(remote.getCurrentWindow().isMaximized()) {
        maxBtn.classList.remove('title-bar__btn--unmax');
        maxBtn.classList.add('title-bar__btn--max');

        remote.getCurrentWindow().unmaximize();
      }
      else {
        maxBtn.classList.remove('title-bar__btn--max');
        maxBtn.classList.add('title-bar__btn--unmax');
        remote.getCurrentWindow().maximize();
      }
    });

    closeBtn.addEventListener('click', function (e) {
      let app = remote.getCurrentWindow();
      app.close();
    });
  }

  _d.onreadystatechange = function () {
    if (_d.readyState == 'complete') init();
  };
})();
