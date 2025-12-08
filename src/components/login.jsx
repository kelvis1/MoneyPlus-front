import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Stack,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  async function handleLogin() {
    const emailValido = email.trim() !== "";
    const senhaValida = password.trim() !== "";

    setErrorEmail(!emailValido);
    setErrorPassword(!senhaValida);

    if (!emailValido || !senhaValida) {
      alert("Preencha todos os campos antes de entrar!");
      return;
    }

    try {
      const res = await axios.post("https://money-plus-back.vercel.app/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login realizado com sucesso!");

    } catch (err) {
      console.error(err);
      alert("Email ou senha incorretos");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
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
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          px: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Bem vindo de volta!
        </Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>
          Acesse sua conta.
        </Typography>
      </Box>

      {/* LADO DIREITO */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          px: 6,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h4" fontWeight="bold">
            Fazer Login
          </Typography>

          <Typography variant="body1" color="gray" sx={{ mt: 1 }}>
            Entre com suas credenciais para acessar sua conta
          </Typography>

          {/* EMAIL */}
          <Typography sx={{ mt: 3 }}>Email</Typography>
          <TextField
            fullWidth
            placeholder="seu@email.com"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errorEmail}
            helperText={errorEmail ? "Campo obrigatório" : ""}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />

          {/* SENHA */}
          <Typography sx={{ mt: 2 }}>Senha</Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="••••••••"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorPassword}
            helperText={errorPassword ? "Campo obrigatório" : ""}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" sx={{ color: "#c77dff" }} />}
              label="Lembrar-me"
            />

            <Typography sx={{ color: "#c77dff", cursor: "pointer" }}>
              Esqueceu a senha?
            </Typography>
          </Box>

          {/* BOTÃO LOGIN */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              mt: 2,
              py: 1.3,
              borderRadius: 3,
              background:
                "linear-gradient(45deg, #7b2ff7 0%, #9d4edd 50%, #c77dff 100%)",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                background:
                  "linear-gradient(45deg, #6a11cb 0%, #8e2de2 100%)",
              },
            }}
          >
            Entrar
          </Button>

          {/* DIVISOR */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 3,
            }}
          >
            <Divider sx={{ flex: 1 }} />
            <Box sx={{ px: 2, color: "gray" }}>ou continue com</Box>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* BOTÕES SOCIAL */}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                height: 48,
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: 2,
                borderColor: "#ccc",
              }}
            >
              <img
                src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
                width={22}
                alt="Google"
              />
              Em desenvolvimento
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                height: 48,
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: 2,
                borderColor: "#ccc",
              }}
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width={22}
                alt="GitHub"
              />
              Em desenvolvimento
            </Button>
          </Stack>

          <Typography sx={{ textAlign: "center", mt: 3 }}>
            Não tem uma conta?{" "}
            <Link
              to="/registro"
              style={{
                textDecoration: "none",
                color: "#6c63ff",
                fontWeight: "bold",
              }}
            >
              Criar Conta
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
