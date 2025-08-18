describe('Testes de interface', () => {
  it('Cadastro usuarios', () => {
    cy.visit('http://localhost:5173/cadastro');
    cy.get("input[id=nome]").type("Joel Santos");
    cy.get("input[id=email]").type("joelsantos@email.com");
      cy.get("input[id=senha]").type("senha123");
      cy.get("input[id=telefone]").type("11999999999");
      cy.contains("Salvar").click();
      cy.contains("Usuário cadastrado com sucesso!").should("be.visible");




   
  })
})