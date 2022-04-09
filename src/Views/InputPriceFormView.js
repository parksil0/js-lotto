import { $ } from '../utils/dom.js';
import View from './View.js';

export default class InputPriceFormView extends View {
  constructor() {
    super($('#input-price-form'));

    this.inputPrice = $('#input-price');
    this.inputPriceButton = $('#input-price-btn');

    this.bindEvents();
  }

  bindEvents() {
    this.inputPriceButton.addEventListener(
      'click',
      this.handleButtonClick.bind(this),
    );
  }

  handleButtonClick(e) {
    const { value } = this.inputPrice;

    if (Number(value) >= 1000 && Number(value) % 1000 !== 0) {
      e.preventDefault();
      alert('로또 구입 금액을 1,000원 단위로 입력해 주세요.');
      this.inputPrice.value = '';
      return;
    }
  }
}
