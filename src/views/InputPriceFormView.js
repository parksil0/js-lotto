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

    this.bindEvents();
  }

  bindEvents() {
    this.element.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = e.srcElement['input-price'];

    if (value >= MIN_INPUT_PRICE && value % MIN_INPUT_PRICE) {
      alert(ERROR_MESSAGE.NOT_TYPE_UNIT_OF_THOUSAND);
      e.srcElement['input-price'] = '';
      return;
    }

    const numberOfLottos = value / MIN_INPUT_PRICE;
    this.emit(CUSTOM_EVENT_NAME.INPUT_PRICE_FORM_SUBMIT, {
      value: numberOfLottos,
    });
  }
}
