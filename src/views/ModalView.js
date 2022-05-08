import { CUSTOM_EVENT_NAME } from '../constants.js';
import { $, $$ } from '../utils/dom.js';
import View from './View.js';

export default class ModalView extends View {
  constructor() {
    super($('.modal'));
    this.closeButton = $('.modal-close');
    this.restartButton = $('#restart');

    this.bindEvents();
  }

  bindEvents() {
    this.closeButton.addEventListener('click', () => {
      this.hide();
    });
    this.restartButton.addEventListener('click', () => {
      this.emit(CUSTOM_EVENT_NAME.RESTART, {});
    });
  }

  setWinningNumber(winningNumber, purchasedLottos) {
    const matchNumbers = Array.from({ length: 5 }, () => 0);
    const winningPrices = [5000, 50000, 1500000, 30000000, 2000000000];
    const bonusNumber = winningNumber.pop();

    purchasedLottos.forEach((numbers) => {
      const matchNumber = numbers.filter(
        (number) => winningNumber.indexOf(number) > -1,
      ).length;

      if (matchNumber === 5 && numbers.indexOf(bonusNumber) > -1)
        matchNumbers[matchNumber - 2] += 1;

      if (matchNumber >= 3) matchNumbers[matchNumber - 3] += 1;
    });

    const yieldPrice = matchNumbers.reduce((prev, curr, idx) => {
      return prev + winningPrices[idx] * curr;
    }, 0);

    const $matchNumbers = $$('.result-table tbody tr td:nth-child(3n)');
    $matchNumbers.forEach((el, index) => {
      el.textContent = `${matchNumbers[index]}개`;
    });

    $('#yield').textContent = `당신의 총 수익률은 ${
      (yieldPrice / (purchasedLottos.length * 1000)) * 100 - 100
    }% 입니다.`;
  }

  show() {
    this.element.style.visibility = 'visible';
    this.element.style.opacity = '1';
  }

  hide() {
    this.element.style.visibility = 'hidden';
    this.element.style.opacity = '0';
  }
}
