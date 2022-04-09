import Controller from './Controller.js';
import PurchasingPriceFormView from './Views/PurchasingPriceFormView.js';
import PurchasedLottosView from './Views/PurchasedLottosView.js';
import InputLottoNumsView from './Views/InputLottoNumsView.js';
import ModalView from './Views/ModalView.js';

const lottoController = new Controller({
  purchasingPriceFormView: new PurchasingPriceFormView(),
  purchasedLottosView: new PurchasedLottosView(),
  inputLottoNumsView: new InputLottoNumsView(),
  modalView: new ModalView(),
});

lottoController.initialize();
