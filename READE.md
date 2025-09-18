# Microblog 

Um microblog interativo desenvolvido com **React** no frontend e **Laravel** no backend, utilizando **PostgreSQL** como banco de dados. O projeto permite criar, editar e excluir posts, além de oferecer autenticação de usuários e feed em tempo real.  

## Tecnologias Utilizadas

### Frontend
- **React** - Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS** - Framework CSS para estilização
- **Framer Motion** - Animações e transições suaves
- **React Icons** - Ícones para botões e elementos visuais

### Backend
- **PHP 8+** com **Laravel 10**
- **Laravel Sanctum** - Autenticação e gerenciamento de tokens
- **PostgreSQL** - Banco de dados relacional

### Versionamento
- **Git** e **GitHub** para controle de versão

---

## Funcionalidades

- Cadastro de usuário com validação de email e senha segura (mínimo 8 caracteres, 1 número e 1 caractere especial)
- Login com geração de token via **Laravel Sanctum**
- Feed de posts:
  - Criação, edição e exclusão de posts
  - Posts públicos e privados (visíveis apenas para usuários logados)
- Feedback em tempo real com **toast notifications** via `react-toastify`
- Animações suaves nos formulários e interações com **Framer Motion**
- Feed atualizado em tempo real via **WebSockets (Laravel Echo + Pusher)**

---

## Pré-requisitos

- **Node.js** >= 18
- **npm** ou **yarn**
- **PHP** >= 8
- **Composer**
- **PostgreSQL** instalado e configurado

---

## Como Rodar o Projeto

### Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
Configure o .env com seu banco de dados PostgreSQL
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
