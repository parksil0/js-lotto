import { $ } from '../../utils/helper.js';
import View from './View.js';

export default class ModalView extends View {
  constructor() {
    super($('.modal'));

    this.originalDisplay = 'flex';

    this.modalCloseButton = $('.modal-close');
    this.retryButton = $('button', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.modalCloseButton.addEventListener('click', () => {
      this.hide();
    });

    this.retryButton.addEventListener('click', () => {
      window.location.reload();
    });
  }
}
