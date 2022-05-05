import { $ } from '../utils/dom.js';
import { getLottoNumbers } from '../utils/getRandomLottoNumbers.js';
import View from './View.js';

export default class ModalView extends View {
  constructor() {
    super($('.modal'));
    this.closeButton = $('.modal-close');
    this.winningNumber = getLottoNumbers(1);

    this.bindEvents();
  }

  bindEvents() {
    this.closeButton.addEventListener('click', () => {
      this.hide();
    });
  }

  setWinningNumber(numbers) {
    console.log(numbers, this.winningNumber);
  }

  show() {
    this.element.style.visibility = 'visible';
    this.element.style.opacity = '1';
  }

  hide() {
    this.element.style.visibility = 'hidden';
    this.element.style.opacity = '0';
  }
}
