import {
  CUSTOM_EVENT_NAME,
  ERROR_MESSAGE,
  MIN_INPUT_PRICE,
} from '../constants.js';
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
    const value = Number(this.inputPrice.value);

    if (value >= MIN_INPUT_PRICE && value % MIN_INPUT_PRICE) {
      e.preventDefault();
      alert(ERROR_MESSAGE.NOT_TYPE_UNIT_OF_THOUSAND);
      this.inputPrice.value = '';
      return;
    }

    if (value >= MIN_INPUT_PRICE && !(value % MIN_INPUT_PRICE)) {
      e.preventDefault();
      const numberOfLottos = value / MIN_INPUT_PRICE;
      this.emit(CUSTOM_EVENT_NAME.INPUT_PRICE_FORM_SUBMIT, {
        value: numberOfLottos,
      });
      return;
    }
  }
}
