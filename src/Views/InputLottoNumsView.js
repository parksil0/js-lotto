import { $, $$ } from '../../utils/helper.js';
import View from './View.js';

export default class InputLottoNumsView extends View {
  constructor() {
    super($('#input-lotto-nums'));

    this.inputNumbers = $$('input', this.element);
    this.confirmaionButton = $('button', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.confirmaionButton.addEventListener(
      'click',
      this.handleClickConfirmationButton.bind(this),
    );
  }

  handleClickConfirmationButton(e) {
    // e.preventDefault();
    const [first, second, thrid, fourth, fifth, sixth, bonus] =
      this.inputNumbers;

    const foo = this.inputNumbers.map((el) => el.value);
    const bar = new Set(foo);

    if (
      first.value &&
      second.value &&
      thrid.value &&
      fourth.value &&
      fifth.value &&
      sixth.value &&
      bonus.value &&
      bar.size < 7
    ) {
      e.preventDefault();
      alert('겹치는게 있어요~');
    } else if (
      first.value &&
      second.value &&
      thrid.value &&
      fourth.value &&
      fifth.value &&
      sixth.value &&
      bonus.value &&
      bar.size >= 7
    ) {
      e.preventDefault();
      this.emit('@setIsModalOpen', { value: true });
    }
  }
}
