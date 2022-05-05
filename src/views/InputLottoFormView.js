import { $, $$ } from '../utils/dom.js';
import View from './View.js';

export default class InputLottoFormView extends View {
  constructor() {
    super($('#input-lotto-nums'));
    this.openResultModalButton = $('.open-result-modal-button');

    this.bindEvents();
  }

  bindEvents() {
    this.openResultModalButton.addEventListener(
      'click',
      this.handleClickOpenResultModalButton.bind(this),
    );
  }

  handleClickOpenResultModalButton(e) {
    const numbers = [...$$('.winning-number'), $('.bonus-number')];

    const isEmpty = !numbers.every((el) => el.value !== '');

    if (isEmpty) {
      alert('숫자를 입력해주세요.');
      return;
    }
  }
}
