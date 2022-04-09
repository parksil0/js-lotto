import { CUSTOM_EVENT_NAME } from './constants.js';

export default class Controller {
  constructor({ inputPriceFormView, purchasedLottosView, inputLottoNumsView }) {
    this.inputPriceFormView = inputPriceFormView;
    this.purchasedLottosView = purchasedLottosView;
    this.inputLottoNumsView = inputLottoNumsView;

    this.isPassedInputPrice = false;
  }

  initialize() {
    this.render();
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.inputPriceFormView.addEventListener(
      CUSTOM_EVENT_NAME.INPUT_PRICE_FORM_SUBMIT,
      this.handleSubmitInputPriceForm.bind(this),
    );
  }

  handleSubmitInputPriceForm(e) {
    const { value } = e.detail;

    this.isPassedInputPrice = true;
    this.render();
  }

  render() {
    if (this.isPassedInputPrice) {
      this.purchasedLottosView.show();
      this.inputLottoNumsView.show();
    } else {
      this.purchasedLottosView.hide();
      this.inputLottoNumsView.hide();
    }
  }
}
