import { ERROR_MESSAGE } from '../src/constants/index.js';

export function $(selector, scope = document) {
  if (!selector) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  const result = scope.querySelector(selector);

  if (!result) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  return result;
}

export function $$(selector, scope = document) {
  if (!selector) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  const result = scope.querySelectorAll(selector);

  if (!result) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  return Array.from(result);
}

export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}
