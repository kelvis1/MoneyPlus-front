import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { useState } from "react";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accept, setAccept] = useState(false);


  async function handleRegister() {
    if (!name.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      return alert("Preencha todos os campos!");
    }

    if (password !== confirm) {
      return alert("As senhas não coincidem!");
    }

    if (!accept) {
      return alert("Você deve aceitar os termos para continuar!");
    }

    try {
      const response = await axios.post("http://localhost:8000/auth/registro", {
        name,
        email,
        password,
      });

      console.log("Resposta do servidor:", response.data);
      alert("Conta criada com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao registrar.");
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      {/* LADO ESQUERDO */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: "url('./background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Junte-se a nós!
        </Typography>

        <Typography variant="h6" sx={{ mt: 2, maxWidth: 380 }}>
          Crie sua conta e comece a aproveitar todos os recursos.
        </Typography>
      </Box>

      {/* LADO DIREITO */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          <Typography variant="h4" fontWeight="bold">
            Criar conta
          </Typography>

          <Typography sx={{ mt: 1, mb: 4, color: "gray" }}>
            Preencha os campos abaixo para criar sua conta.
          </Typography>

          {/* INPUT NOME */}
          <Typography>Nome Completo</Typography>
          <TextField
            label="Nome completo"
            fullWidth
            sx={{ mb: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* INPUT EMAIL */}
          <Typography>Email</Typography>
          <TextField
            label="Email"
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* INPUT SENHA */}
          <Typography>Senha</Typography>
          <TextField
            label="Senha"
            fullWidth
            type="password"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* CONFIRMAR SENHA */}
          <Typography>Confirmar Senha</Typography>
          <TextField
            label="Confirmar senha"
            fullWidth
            type="password"
            sx={{ mb: 2 }}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {/* ACEITAR TERMOS */}
          <FormControlLabel
            control={
              <Checkbox
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
              />
            }
            label={
              <Typography fontSize={14}>
                Concordo com os{" "}
                <span style={{ color: "#6c63ff", cursor: "pointer" }}>
                  Termos de Uso
                </span>{" "}
                e a{" "}
                <span style={{ color: "#6c63ff", cursor: "pointer" }}>
                  Política de Privacidade
                </span>{" "}
                (Em desenvolvimento)
              </Typography>
            }
          />

          {/* BOTÃO CRIAR CONTA */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleRegister}
            startIcon={<PersonOutlineIcon />}
            sx={{
              mt: 2,
              height: 48,
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(90deg, #6a11cb, #8e2de2)",
              ":hover": {
                background: "linear-gradient(90deg, #5a0fb3, #7a23c9)",
              },
            }}
          >
            Criar conta
          </Button>

          <Divider sx={{ my: 3 }}>ou continue com</Divider>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button fullWidth variant="outlined" sx={{ height: 48, gap: 1 }}>
              <img
                src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
                width={22}
                alt="Google"
              />
              Em desenvolvimento
            </Button>

            <Button fullWidth variant="outlined" sx={{ height: 48, gap: 1 }}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width={22}
                alt="GitHub"
              />
              Em desenvolvimento
            </Button>
          </Stack>

          <Typography textAlign="center">
            Já tem uma conta?{" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#6c63ff",
                fontWeight: "bold",
              }}
            >
              Fazer login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
