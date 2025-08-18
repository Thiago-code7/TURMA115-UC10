
import React, { useState } from "react";
import usuarios from "../../data/data";
import styles from "./Cadastro.module.css";

function Cadastro(){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !senha) {
      setMensagem("Preencha todos os campos obrigatórios!");
      return;
    }
    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
      setMensagem("Email já cadastrado!");
      return;
    }
    // Adiciona o novo usuário ao vetor de usuários
    usuarios.push({ nome, email, senha, telefone });
  
    setMensagem("Usuário cadastrado com sucesso!");
    setNome("");
    setEmail("");
    setSenha("");
    setTelefone("");
  };

  return (
    <div className={styles.cadastro}>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Cadastro;