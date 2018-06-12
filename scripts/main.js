/* jshint esversion: 6 */

(function () {
  "use strict";

  let _d = document;

  for (var i = 0; i < 50; i++) {
    $('.main-container__content')
      .append(
        '<div class="mdc-card">' +
          '<div class="mdc-card__media mdc-card__media--square">' +
            '<div class="mdc-card__media-content">' +
              '<img src="./img/sample/teste.jpg">' +
            '</div>' +
          '</div>' +
          '<div class="material-card--title">Fulano de Tal</div>' +
          '<div class="mdc-card__actions">' +
            '<div class="mdc-card__action-icons">' +
              '<a class="material-icons mdc-ripple-surface mdc-ripple-surface--primary material-ripple--bounded mdc-icon-button mdc-card__action mdc-card__action--icon" title="Mark as Favorite">favorite</a>' +
              '<a class="material-icons mdc-ripple-surface mdc-ripple-surface--primary material-ripple--bounded mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</a>' +
              '<button id="demo-menu-top-right-' + i + '" class="mdl-js-button material-icons mdc-ripple-surface mdc-ripple-surface--primary material-ripple--bounded mdc-icon-button mdc-card__action mdc-card__action--icon">' +
                    '<i class="material-icons">more_vert</i>' +
                  '</button>' +
                  '<ul class="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect"' +
                      'data-mdl-for="demo-menu-top-right-' + i + '">' +
                    '<li class="mdl-menu__item">EDITAR</li>' +
                    '<li class="mdl-menu__item">REMOVER</li>' +
                  '</ul>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
  }




  document.ondragover = document.ondrop = (e) => {
    e.preventDefault();
  };

  document.body.ondrop = (e) => {
    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
      console.log(e.dataTransfer.files[i].path);
    }
    e.preventDefault();
  };




// Material Design functions
  let attachRipple = (selector) => {
    let itensNumber = _d.querySelectorAll(selector)
      .length;

    for (var i = 0; i < itensNumber; i++) {
      mdc.ripple.MDCRipple.attachTo(_d.querySelectorAll(selector)[i]);
    }
  };

  attachRipple('.mdc-button');
  attachRipple('.mdc-icon-button');
  attachRipple('.mdc-ripple-surface');
  mdc.tabs.MDCTabBar.attachTo(_d.querySelector('.mdc-tab-bar'));


  let drawer = new mdc.drawer.MDCTemporaryDrawer(_d.querySelector('.mdc-drawer--temporary'));
  $('.menu')
    .on('click', () => drawer.open = true);

  $('img')
    .attr('draggable', false);

})();
