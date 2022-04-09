export default class Controller {
  constructor({ inputPriceFormView, purchasedLottosView, inputLottoNumsView }) {
    this.inputPriceFormView = inputPriceFormView;
    this.purchasedLottosView = purchasedLottosView;
    this.inputLottoNumsView = inputLottoNumsView;

    this.isPassedInputPrice = false;
  }

  initialize() {
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
