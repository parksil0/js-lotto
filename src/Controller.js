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

    this.purchasedLottos = [];
    this.winningNumber = [];
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

    this.purchasedLottosView.addEventListener(
      CUSTOM_EVENT_NAME.SET_PURCHASED_LOTTOS,
      this.handleSetPurchasedLottos.bind(this),
    );

    this.modalView.addEventListener(
      CUSTOM_EVENT_NAME.RESTART,
      this.handleClickRestartButton.bind(this),
    );
  }

  handleClickRestartButton() {
    this.inputPriceFormView.initialize();
    this.inputLottoFormView.initialize();
    this.purchasedLottosView.initialize();
    this.renderInitialView();
    this.modalView.hide();
  }

  handleSetPurchasedLottos(e) {
    this.purchasedLottos = e.detail.value;
  }

  handleSubmitInputPriceForm(e) {
    const { value } = e.detail;

    this.purchasedLottosView.setNumberOfLottos(value);
    this.renderAfterInputPrice();
  }

  handleShowWinningResult(e) {
    this.winningNumber = e.detail.value;
    this.modalView.setWinningNumber(this.winningNumber, this.purchasedLottos);
    this.renderModal();
  }

  renderInitialView() {
    this.purchasedLottosView.hide();
    this.inputLottoFormView.hide();
  }

  renderAfterInputPrice() {
    this.purchasedLottosView.show();
    this.inputLottoFormView.show();
  }

  renderModal() {
    this.modalView.show();
  }
}
