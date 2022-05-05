import { $ } from '../utils/dom.js';
import View from './View.js';

export default class ModalView extends View {
  constructor() {
    super($('.modal'));
    this.closeButton = $('.modal-close');

    this.bindEvents();
  }

  bindEvents() {
    this.closeButton.addEventListener('click', () => {
      this.hide();
    });
  }

  show() {
    this.element.style.visibility = 'visible';
    this.element.style.opacity = '1';
  }

  hide() {
    this.element.style.visability = 'hidden';
    this.element.style.opacity = '0';
  }
}
