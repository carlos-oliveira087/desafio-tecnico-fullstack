import Header from '../components/Header';
import Input from '../components/Input';
import AuthSubmitButton from '../components/AuthSubmitButton';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import { toast } from 'react-toastify';

export default function AuthPage() {
	const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmSenha: "",
  });

  const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};


  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        email: form.email,
        senha: form.senha,
      });
      const { token, usuario } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));
      toast.success("Login realizado!");
			navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Erro ao fazer login");
    }
  };

  const handleRegister = async () => {
		if (form.senha !== form.confirmSenha && form.confirmSenha) {
			return toast.error("Senhas não conferem!");
		}
		try {
			await api.post("/usuarios", {
				nome: form.nome,
				email: form.email,
				senha: form.senha,
				foto_perfil: null,
        senha_confirmation: form.confirmSenha,
			});
			toast.success("Registro realizado! Faça login.");
			setIsLogin(true);
		} catch (err) {
			toast.error(err.response?.data?.message || "Erro ao registrar");
		}
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleRegister();
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col box-border justify-center items-center">
        <h1 className="text-3xl font-bold">
          {isLogin ? "Log in" : "Crie sua conta"}
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <motion.div className="w-[32rem] m-10" layout>
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  layout
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-4 items-center"
                >
                  <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                  <Input name="senha" placeholder="Senha" type="password" value={form.senha} onChange={handleChange} />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  layout
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-4 items-center"
                >
                  <Input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
									<Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
									<Input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} />
									<Input name="confirmSenha" type="password" placeholder="Confirmação de senha" value={form.confirmSenha} onChange={handleChange} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="w-[32rem] flex flex-col items-center gap-5">
            <AuthSubmitButton type="submit">
              {isLogin ? 'Log In' : 'Cadastrar'}
            </AuthSubmitButton>
            <p className="text-quaternary mt-2">
              {isLogin ? 'Não possui uma conta? ' : 'Já tem uma conta? '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold cursor-pointer"
              >
                {isLogin ? 'Cadastre-se' : 'Faça login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
