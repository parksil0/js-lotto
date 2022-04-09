describe('step1 필수 요구사항', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
  });

  it('로또 구입 금액 input은 필수 입력이다.', () => {
    cy.get('#input-price-btn').click();
    cy.get('input:invalid').should('have.length', 1);
    cy.get('#input-price').then((input) => {
      expect(input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });
});
