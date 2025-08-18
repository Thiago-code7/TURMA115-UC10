import Cadastro from "../../components/cadastro/Cadastro";
import styles from "./CadastroPage.module.css";
function CadastroPage() {
  return (
    <>
    <div className={styles.cadastroPage}>
        <h1>Cadastro de Usuário</h1>
      <Cadastro />
      </div>
    </>
  );
}
export default CadastroPage;
// CadastroPage.jsx