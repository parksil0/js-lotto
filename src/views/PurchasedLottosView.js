import { $, $$, setDisplay } from '../utils/dom.js';
import { getLottoNumbers } from '../utils/getRandomLottoNumbers.js';
import View from './View.js';

export default class PurchasedLottosView extends View {
  constructor() {
    super($('#purchased-lottos'));
    this.totalPurchased = $('#total-purchased');
    this.lottoIcons = $('#lotto-icons');
    this.numberViewSwitch = $('.lotto-numbers-toggle-button');

    this.numberOfLottos = 0;

    this.bindEvents();
  }

  bindEvents() {
    this.numberViewSwitch.addEventListener(
      'change',
      this.handleChangeNumberViewSwitch.bind(this),
    );
  }

  handleChangeNumberViewSwitch() {
    const { checked } = this.numberViewSwitch;

    this.lottoIcons.classList.toggle('flex-col');

    const lottoDetails = $$('.lotto-detail');

    if (!checked) {
      lottoDetails.forEach((el) => setDisplay(el, 'none'));
      return;
    }

    lottoDetails.forEach((el) => setDisplay(el, 'inline'));
  }

  setNumberOfLottos(numberOfLottos) {
    this.numberOfLottos = numberOfLottos;
  }

  show() {
    this.totalPurchased.innerHTML = this.getNumberOfLotteries(
      this.numberOfLottos,
    );

    this.lottoIcons.innerHTML = this.getLottoList(
      getLottoNumbers(this.numberOfLottos),
    );

    super.show();
  }

  getNumberOfLotteries(numberOfLottos) {
    return `총 ${numberOfLottos}개를 구매하였습니다.`;
  }

  getLottoList(number) {
    return number.map((arr) => this._getLottoListItem(arr)).join('');
  }

  _getLottoListItem(lotto) {
    return `
      <li class="mx-1">
        <span class="lotto-icon text-4xl">🎟️ </span>
        <span class="lotto-detail text-4xl">${lotto}</span>
      </li>
    `;
  }
}
