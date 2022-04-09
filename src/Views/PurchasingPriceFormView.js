import { $ } from '../../utils/helper.js';
import View from './View.js';

export default class PurchasingPriceFormView extends View {
  constructor() {
    super($('.purchasing-price-form'));

    this.purchasingPriceInput = $('input', this.element);
    this.purchasingButton = $('button', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.purchasingButton.addEventListener(
      'click',
      this.handleButtonClick.bind(this),
    );
  }

  handleButtonClick(e) {
    const { value } = this.purchasingPriceInput;

    if (Number(value) >= 1000 && Number(value) % 1000 !== 0) {
      e.preventDefault();
      alert('천원단위로 입력좀!');
      this.purchasingPriceInput.value = '';
      return;
    }

    if (Number(value) >= 1000 && Number(value) % 1000 === 0) {
      e.preventDefault();
      this.emit('@purchaseingPriceFormSubmit', { value: Number(value) });
      return;
    }
  }
}
