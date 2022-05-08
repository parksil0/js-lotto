import { CUSTOM_EVENT_NAME } from '../constants.js';
import { $, $$ } from '../utils/dom.js';
import View from './View.js';

export default class InputLottoFormView extends View {
  constructor() {
    super($('#input-lotto-nums'));
    this.openResultModalButton = $('.open-result-modal-button');

    this.bindEvents();
  }

  bindEvents() {
    this.openResultModalButton.addEventListener(
      'click',
      this.handleClickOpenResultModalButton.bind(this),
    );
  }

  initialize() {
    const numbers = [...$$('.winning-number'), $('.bonus-number')];
    numbers.forEach(($el) => {
      $el.value = '';
    });
  }

  handleClickOpenResultModalButton(e) {
    const numbers = [...$$('.winning-number'), $('.bonus-number')];

    const isEmpty = !numbers.every((el) => el.value !== '');

    if (isEmpty) {
      alert('숫자를 입력해주세요.');
      return;
    }

    const lottoNums = Array.from(new Set(numbers.map((el) => el.value)));

    if (lottoNums.length < 7) {
      alert('로또 번호에는 중복된 숫자를 입력할 수 없습니다.');
      return;
    }

    this.emit(CUSTOM_EVENT_NAME.GET_WINNING_RESULT, {
      value: numbers.map((el) => Number(el.value)),
    });
  }
}
