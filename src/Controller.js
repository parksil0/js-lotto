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

    this.inputLottoFormView.addEventListener(
      CUSTOM_EVENT_NAME.GET_WINNING_RESULT,
      this.handleShowWinningResult.bind(this),
    );
  }

  handleSubmitInputPriceForm(e) {
    const { value } = e.detail;

    this.purchasedLottosView.setNumberOfLottos(value);
    this.renderWholeView();
  }

  handleShowWinningResult(e) {
    const { value } = e.detail;
    this.modalView.setWinningNumber(value);
    this.renderModal();
  }

  renderInitialView() {
    this.purchasedLottosView.hide();
    this.inputLottoFormView.hide();
  }

  renderWholeView() {
    this.purchasedLottosView.show();
    this.inputLottoFormView.show();
  }

  renderModal() {
    this.modalView.show();
  }
}
