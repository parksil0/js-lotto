import Controller from './Controller.js';
import InputLottoNumsView from './Views/InputLottoNumsView.js';
import InputPriceFormView from './Views/InputPriceFormView.js';
import PurchasedLottosView from './Views/PurchasedLottosView.js';

const lottoController = new Controller({
  inputPriceFormView: new InputPriceFormView(),
  purchasedLottosView: new PurchasedLottosView(),
  inputLottoNumsView: new InputLottoNumsView(),
});

lottoController.initialize();
