# Aula de Testes de Performance com Artillery na API de Livros

## Objetivo

Apresentar os conceitos básicos e aplicar testes de performance na API RESTful de livros utilizando a ferramenta **Artillery**.  
Ao final, o aluno saberá criar cenários simples de carga, executar os testes e interpretar os resultados.

---

## Pré-requisitos

- Ter a API de livros rodando localmente (Express + Sequelize + Postgres)  
- Node.js instalado  
- Projeto configurado com Jest, Supertest (testes funcionais já implementados)  

---

## 1. Introdução à Testes de Performance

- Testes de performance medem como a aplicação se comporta sob carga (quantidade de requisições simultâneas).  
- Objetivos principais: medir latência, throughput, detectar gargalos e garantir escalabilidade.  
- Ferramentas populares: Artillery, k6, JMeter, Locust.  

---

## 2. Por que usar o Artillery?

- Fácil instalação e uso com Node.js.  
- Configuração simples via arquivo YAML.  
- Permite simular diferentes cenários e taxas de requisição.  
- Integra-se bem com pipelines de CI/CD.  

---

## 3. Instalação

No terminal, dentro do projeto:

```bash
npm install --save-dev artillery
```

---

## 4. Configurando um Cenário de Teste com Artillery

Crie um arquivo chamado `artillery-config.yml` na raiz do projeto com o seguinte conteúdo de exemplo:

```yaml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - flow:
      - get:
          url: "/livros"
```

- **target**: URL da sua API local.
- **phases**: Define duração e taxa de chegada de requisições.
- **scenarios**: Lista de ações simuladas (neste exemplo, uma requisição GET em `/livros`).

---

## 5. Executando o Teste

No terminal, execute:

```bash
npx artillery run artillery-config.yml
```

- O Artillery irá simular o cenário definido e gerar um relatório ao final.

---

## 6. Interpretando os Resultados

Após a execução, o Artillery exibirá métricas como:

- **latency**: tempo de resposta das requisições.
- **requests per second**: taxa de requisições processadas.
- **errors**: quantidade de falhas.
- **throughput**: volume de dados transferidos.

Exemplo de saída:

```
Scenarios launched:  10
Scenarios completed: 10
Requests completed:  10
RPS sent: 10.01
Request latency:
  min: 20 ms
  max: 120 ms
  median: 35 ms
  p95: 100 ms
  p99: 115 ms
```

---

## 7. Dicas para Testes de Performance

- Teste diferentes endpoints e métodos (GET, POST, PUT, DELETE).
- Varie a taxa de chegada e duração para simular picos de uso.
- Analise gargalos e otimize o código conforme necessário.
- Integre os testes ao pipeline de CI/CD para monitoramento contínuo.

---

## 8. Referências

- [Documentação Artillery](https://www.artillery.io/docs/)
- [Testes de Performance com Node.js](https://nodejs.org/en/docs/guides/performance/)
- [Boas práticas de APIs RESTful](https://restfulapi.net/)

---
