import Controller from './Controller.js';
import InputPriceFormView from './Views/InputPriceFormView.js';

const lottoController = new Controller({
  inputPriceFormView: new InputPriceFormView(),
});

lottoController.initialize();
