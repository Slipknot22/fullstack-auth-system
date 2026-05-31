import { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin(e) {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:3000/login",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            senha
          })

        }
      );

      const data = await response.json();

      console.log(data);

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        alert("Login realizado 🚀");

      } else {

        alert(data.msg);

      }

    } catch (error) {

      console.log(error);

      alert("Erro no servidor ❌");

    }

  }

  return (

    <section className="login-page">

      <div className="login-container">

        <div className="login-card">

          <h1 className="login-title">
            Bem-vindo
          </h1>

          <p className="login-subtitle">
            Faça login para continuar
          </p>

          <form
            onSubmit={fazerLogin}
            className="login-form"
          >

            <div className="input-group">

              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="input-group">

              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) =>
                  setSenha(e.target.value)
                }
              />

            </div>

            <button type="submit">
              Entrar
            </button>

          </form>

          {/* BOTÃO VOLTAR */}
          <Link
            to="/"
            className="btn-voltar-home"
          >
            ← Voltar para Home
          </Link>

        </div>

      </div>

    </section>

  );

}