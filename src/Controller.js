export default class Controller {
  constructor({
    purchasingPriceFormView,
    purchasedLottosView,
    inputLottoNumsView,
    modalView,
  }) {
    this.purchasingPriceFormView = purchasingPriceFormView;
    this.purchasedLottosView = purchasedLottosView;
    this.inputLottoNumsView = inputLottoNumsView;
    this.modalView = modalView;

    this.isTypedPriceInput = false;
    this.isModalOpen = false;
  }

  subscribeViewEvents() {
    this.purchasingPriceFormView.addEventListener(
      '@purchaseingPriceFormSubmit',
      this.handlePurchasingPriceFormSubmit.bind(this),
    );

    this.inputLottoNumsView.addEventListener(
      '@setIsModalOpen',
      this.handleInputLottoNumsFormSubmit.bind(this),
    );
  }

  handleInputLottoNumsFormSubmit(e) {
    this.isModalOpen = e.detail.value;

    this.render();
  }

  initialize() {
    this.subscribeViewEvents();
    this.render();
  }

  handlePurchasingPriceFormSubmit(e) {
    const { value } = e.detail;

    this.isTypedPriceInput = true;
    this.purchasedLottosView.setInputPrice(value);
    this.render();
  }

  render() {
    if (this.isTypedPriceInput) {
      this.purchasedLottosView.show();
      this.inputLottoNumsView.show();
    } else {
      this.purchasedLottosView.hide();
      this.inputLottoNumsView.hide();
    }

    if (this.isModalOpen) {
      this.modalView.show();
    } else {
      this.modalView.hide();
    }
  }
}
