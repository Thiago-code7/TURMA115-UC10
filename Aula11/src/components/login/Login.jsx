import { useState } from "react";
import styles from "./Login.module.css";

function Login({onLogin}){
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(email && senha){
            onLogin(email, senha)
        }else{
            alert("Preencha todos os campos!");
        }
    };
    return(
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>Email</label>
                <input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                 <label>Senha</label>
                <input 
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>

            </form>
        </>
    )


}

export default Login;