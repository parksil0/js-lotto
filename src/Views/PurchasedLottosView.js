import { getLottoNumbers } from '../../utils/getRandomNumbers.js';
import { $, $$ } from '../../utils/helper.js';
import View from './View.js';

export default class PurchaseLottosView extends View {
  constructor() {
    super($('.purchased-lottos'));
    this.template = new Template();

    this.numberOfLotteries = $('.number-of-lotteries');
    this.lotteryList = $('.lottery-list');
    this.viewNumberSwitch = $('input', this.element);

    this.inputPrice = 0;

    this.bindEvents();
  }

  bindEvents() {
    this.viewNumberSwitch.addEventListener(
      'change',
      this.handleChangeViewNumberSwitch.bind(this),
    );
  }

  handleChangeViewNumberSwitch() {
    const { checked } = this.viewNumberSwitch;

    this.lotteryList.classList.toggle('flex-col');

    const foo = $$('.lotto-detail');

    if (!checked) {
      foo.forEach((el) => {
        el.style.display = 'none';
      });
      return;
    }

    foo.forEach((el) => {
      el.style.display = 'inline';
    });
  }

  setInputPrice(inputPrice) {
    this.inputPrice = inputPrice;
  }

  show() {
    const inputPrice = Number(this.inputPrice) / 1000;

    this.numberOfLotteries.innerHTML =
      this.template.getNumberOfLotteries(inputPrice);

    this.lotteryList.innerHTML = this.template.getLotteryList(
      getLottoNumbers(inputPrice),
    );

    super.show();
  }
}

class Template {
  getNumberOfLotteries(number) {
    return `총 ${number}개를 구매하였습니다.`;
  }

  getLotteryList(number) {
    return number.map((arr) => this._getLotteryListItem(arr)).join('');
  }

  _getLotteryListItem(lotto) {
    return `
      <li class="mx-1" style="list-style: none; display: flex;">
        <span class="lotto-icon text-4xl">🎟️ </span>
        <span class="lotto-detail text-4xl" style="font-size: 1.25rem; margin-left: 12px; display: none;">${lotto}</span>
      </li>
    `;
  }
}
