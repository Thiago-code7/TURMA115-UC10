describe('Testes de interface', () => {
  it('Login com Erro', () => {
    cy.visit('http://localhost:5173/');
    cy.get("input[placeholder=E-mail]").type("joelsantos@email.com");
    cy.get("input[placeholder=Senha]").type("senha123");
    cy.contains("Entrar").click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal("Usuário ou senha inválidos!");
    });
  })
  it('faz login com sucesso', () => {
    cy.visit('http://localhost:5173/');
    // Preenche os campos
    cy.get("input[placeholder=E-mail]").type("joao@email.com");
    cy.get("input[placeholder=Senha]").type("senhaJoao");
    // Clica no botão
    cy.contains("Entrar").click();
    // Valida se login deu certo
    cy.contains("Bem-vindo, joao@email.com").should("be.visible");
  });
  it('Login com dados vazios', () => {
    cy.visit('http://localhost:5173/');
    // cy.get("input[placeholder=E-mail]").type();
    // cy.get("input[placeholder=Senha]").type();
    cy.contains("Entrar").click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal("Preencha todos os campos!");
    });
  })
})