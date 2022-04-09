import { ERROR_MESSAGE } from '../../src/constants.js';

describe('step1 필수 요구사항', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
  });

  it('초기 화면에는 로또 구입 form만 보인다.', () => {
    cy.get('#input-price-form').should('be.visible');
    cy.get('#purchased-lottos').should('not.be.visible');
    cy.get('#input-lotto-nums').should('not.be.visible');
  });

  it('로또 구입 금액 input은 필수 입력이다.', () => {
    cy.get('#input-price-btn').click();
    cy.get('input:invalid').should('have.length', 1);
    cy.get('#input-price').then((input) => {
      expect(input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('로또 구입 금액이 1000원 미만인 경우, 에러메세지를 호출한다.', () => {
    cy.get('#input-price').type(500);
    cy.get('#input-price-btn').click();
    cy.get('#input-price').then((input) => {
      expect(input[0].validationMessage).to.eq(
        'Value must be greater than or equal to 1000.',
      );
    });
  });

  it('로또 구입 금액이 1000원 단위가 아닌 경우, alert창을 호출한다.', () => {
    const stub = cy.stub();

    cy.on('window:alert', stub);

    cy.get('#input-price').type(1200);
    cy.get('#input-price-btn')
      .click()
      .then(() => {
        expect(stub.getCall(0).lastArg).to.contains(
          ERROR_MESSAGE.NOT_TYPE_UNIT_OF_THOUSAND,
        );
      });
  });
});
