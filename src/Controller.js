import { CUSTOM_EVENT_NAME } from './constants.js';

export default class Controller {
  constructor({
    inputPriceFormView,
    purchasedLottosView,
    inputLottoFormView,
    modalView,
  }) {
    this.inputPriceFormView = inputPriceFormView;
    this.purchasedLottosView = purchasedLottosView;
    this.inputLottoFormView = inputLottoFormView;
    this.modalView = modalView;
  }

  initialize() {
    this.renderInitialView();
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

    this.purchasedLottosView.setNumberOfLottos(value);
    this.renderWholeView();
  }

  renderInitialView() {
    this.purchasedLottosView.hide();
    this.inputLottoFormView.hide();
  }

  renderWholeView() {
    this.purchasedLottosView.show();
    this.inputLottoFormView.show();
  }
}
