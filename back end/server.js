const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");
const rateLimit = require("express-rate-limit");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// =========================
// MIDDLEWARES
// =========================

app.use(cors());
app.use(express.json());

// =========================
// ANTI-SPAM
// =========================

const limiter = rateLimit({

  windowMs: 15 * 60 * 1000,

  max: 5,

  message: {
    msg: "Muitas mensagens enviadas. Tente novamente mais tarde ❌"
  }

});

app.use("/contato", limiter);

// =========================
// MYSQL
// =========================

const db = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "",
  database: "contatos_db"

});

db.connect((err) => {

  if (err) {

    console.log("Erro no MySQL:", err);

  } else {

    console.log("Conectado no MySQL 🔥");

  }

});

// =========================
// JWT MIDDLEWARE
// =========================

function verificarToken(req, res, next) {

  const authHeader = req.headers.authorization;

  // verificar token
  if (!authHeader) {

    return res.status(401).json({
      msg: "Token não fornecido ❌"
    });

  }

  // separar Bearer TOKEN
  const token = authHeader.split(" ")[1];

  // validar token
  jwt.verify(token, "segredo_super_forte", (err, decoded) => {

    if (err) {

      return res.status(403).json({
        msg: "Token inválido ❌"
      });

    }

    req.usuario = decoded;

    next();

  });

}

// =========================
// SERVIR FRONTEND
// =========================

app.use(express.static(path.join(__dirname, "../frontend")));

// =========================
// ROTA FORMULÁRIO
// =========================

app.post("/contato", (req, res) => {

  if (!req.body) {

    return res.status(400).json({
      msg: "Body da requisição ausente ❌"
    });

  }

  const { nome, email, mensagem } = req.body;

  const ip = req.ip;

  // =========================
  // VALIDAÇÕES
  // =========================

  if (!nome || !email || !mensagem) {

    return res.status(400).json({
      msg: "Preencha todos os campos ❌"
    });

  }

  if (!email.includes("@") || !email.includes(".")) {

    return res.status(400).json({
      msg: "Email inválido ❌"
    });

  }

  if (mensagem.trim().length < 10) {

    return res.status(400).json({
      msg: "Mensagem muito curta ❌"
    });

  }

  // =========================
  // SQL
  // =========================

  const sql = `
    INSERT INTO contatos (nome, email, mensagem, ip)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [nome, email, mensagem, ip], (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        msg: "Erro ao salvar ❌"
      });

    }

    console.log("Mensagem salva 🔥");

    res.status(200).json({
      msg: "Mensagem enviada com sucesso 🚀"
    });

  });

});

// =========================
// LISTAR MENSAGENS
// =========================

app.get("/mensagens", verificarToken, (req, res) => {

  const sql = `
    SELECT * FROM contatos
    ORDER BY data DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        msg: "Erro ao buscar mensagens ❌"
      });

    }

    res.status(200).json({

      total: result.length,
      mensagens: result

    });

  });

});

// =========================
// DELETAR MENSAGEM
// =========================

app.delete("/mensagens/:id", verificarToken, (req, res) => {

  const { id } = req.params;

  const sql = `
    DELETE FROM contatos
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        msg: "Erro ao deletar ❌"
      });

    }

    if (result.affectedRows === 0) {

      return res.status(404).json({
        msg: "Mensagem não encontrada ❌"
      });

    }

    res.status(200).json({
      msg: "Mensagem deletada com sucesso 🗑️"
    });

  });

});

// =========================
// ATUALIZAR MENSAGEM
// =========================

app.put("/mensagens/:id", verificarToken, (req, res) => {

  const { id } = req.params;

  if (!req.body) {

    return res.status(400).json({
      msg: "Body da requisição ausente ❌"
    });

  }

  const { nome, email, mensagem } = req.body;

  // =========================
  // VALIDAÇÕES
  // =========================

  if (!nome || !email || !mensagem) {

    return res.status(400).json({
      msg: "Preencha todos os campos ❌"
    });

  }

  if (!email.includes("@") || !email.includes(".")) {

    return res.status(400).json({
      msg: "Email inválido ❌"
    });

  }

  if (mensagem.trim().length < 10) {

    return res.status(400).json({
      msg: "Mensagem muito curta ❌"
    });

  }

  // =========================
  // SQL
  // =========================

  const sql = `
    UPDATE contatos
    SET nome = ?, email = ?, mensagem = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [nome, email, mensagem, id],
    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          msg: "Erro ao atualizar ❌"
        });

      }

      if (result.affectedRows === 0) {

        return res.status(404).json({
          msg: "Mensagem não encontrada ❌"
        });

      }

      res.status(200).json({
        msg: "Mensagem atualizada com sucesso ✏️"
      });

    }
  );

});

// =========================
// CADASTRO USUÁRIO
// =========================

app.post("/registro", async (req, res) => {

  if (!req.body) {

    return res.status(400).json({
      msg: "Body da requisição ausente ❌"
    });

  }

  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {

    return res.status(400).json({
      msg: "Preencha todos os campos ❌"
    });

  }

  try {

    const senhaHash = await bcrypt.hash(senha, 10);

    const sql = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES (?, ?, ?)
    `;

    db.query(
      sql,
      [nome, email, senhaHash],
      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({
            msg: "Erro ao registrar ❌"
          });

        }

        res.status(201).json({
          msg: "Usuário registrado com sucesso 🚀"
        });

      }
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      msg: "Erro no servidor ❌"
    });

  }

});

// =========================
// LOGIN
// =========================

app.post("/login", (req, res) => {

  if (!req.body) {

    return res.status(400).json({
      msg: "Body da requisição ausente ❌"
    });

  }

  const { email, senha } = req.body;

  if (!email || !senha) {

    return res.status(400).json({
      msg: "Preencha todos os campos ❌"
    });

  }

  const sql = `
    SELECT * FROM usuarios
    WHERE email = ?
  `;

  db.query(sql, [email], async (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        msg: "Erro no servidor ❌"
      });

    }

    if (result.length === 0) {

      return res.status(404).json({
        msg: "Usuário não encontrado ❌"
      });

    }

    const usuario = result[0];

    const senhaCorreta = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaCorreta) {

      return res.status(401).json({
        msg: "Senha incorreta ❌"
      });

    }

    const token = jwt.sign(

      {
        id: usuario.id,
        email: usuario.email
      },

      "segredo_super_forte",

      {
        expiresIn: "1d"
      }

    );

    res.status(200).json({

      msg: "Login realizado com sucesso 🚀",

      token

    });

  });

});

// =========================
// ROTA PRINCIPAL
// =========================

app.get("/", (req, res) => {

  res.sendFile(
    path.join(__dirname, "../frontend/index.html")
  );

});

// =========================
// SERVIDOR
// =========================

app.listen(3000, () => {

  console.log("Servidor rodando em http://localhost:3000");

});