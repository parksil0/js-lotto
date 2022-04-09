import { $ } from '../utils/dom.js';
import View from './View.js';

export default class PurchasedLottosView extends View {
  constructor() {
    super($('#purchased-lottos'));
  }
}
