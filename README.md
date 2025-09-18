# Microblog

Um microblog interativo desenvolvido com **React** no frontend e **Laravel** no backend, utilizando **PostgreSQL** como banco de dados. O projeto permite criar, editar e excluir posts, além de oferecer autenticação de usuários e feed em tempo real.

## Documentação da API

Para facilitar testes e integração, disponibilizei uma **coleção do Postman** com todas as rotas da API.

- A coleção está no repositório dentro da pasta `docs` no arquivo: microblog.postman_collection.json

### Como usar a coleção

1. Abra o **Postman**.
2. Vá em **File → Import → Upload Files**.
3. Selecione o arquivo `docs/microblog.postman_collection.json`.
4. Configure as variáveis de ambiente, se necessário:
   - `{{TOKEN}}` → token do usuário logado
   - `{{USUARIO_ID}}` → ID do usuário para criar posts
5. Agora você pode testar todas as rotas da API diretamente pelo Postman.

## Tecnologias Utilizadas

### Frontend

* **React** - Biblioteca JavaScript para construção de interfaces
* **Tailwind CSS** - Framework CSS para estilização
* **Axios** - Cliente HTTP para requisições à API
* **Framer Motion** - Animações e transições suaves
* **React Icons** - Ícones para botões e elementos visuais

### Backend

* **PHP** com **Laravel**
* **Laravel Sanctum** - Autenticação e gerenciamento de tokens
* **PostgreSQL** - Banco de dados relacional
* **Pusher** - Comunicação em tempo real via WebSockets

### Versionamento

* **Git** e **GitHub** para controle de versão

---

## Funcionalidades

* Cadastro de usuário com validação de email e senha segura (mínimo 8 caracteres, 1 número e 1 caractere especial)
* Cadastro de usuário com foto de perfil opcional
  * Se o usuário não enviar uma imagem, o **Gravatar** é utilizado automaticamente com base no email
  * A foto do perfil é exibida nos posts e no feed
* Login com geração de token via **Laravel Sanctum**

* Feed de posts:
  * Criação, edição e exclusão de posts
  * Posts públicos e privados (visíveis apenas para usuários logados)
  * Listagem de usuários (somente para usuários logados)
  * Logout

* Feedback em tempo real com **toast notifications** via `react-toastify`
* Animações suaves nos formulários e interações com **Framer Motion**
* Feed atualizado em tempo real via **WebSockets (Pusher)**

---

## Pré-requisitos

* **Node.js** >= 18
* **npm** ou **yarn**
* **PHP** >= 8
* **Composer**
* **PostgreSQL** instalado e configurado

---

### Versões das Tecnologias

- **PHP:** 8.2.12
- **Laravel:** 12.28.1
- **PostgreSQL:** 17.6
- **Laravel Sanctum:** 4.2.0
- **Pusher PHP Server:** 7.2.7

- **Node.js:** 22.14.0
- **npm:** 11.1.0
- **React:** 19.1.1
- **Axios** 1.12.2
- **Framer Motion:** 12.23.13
- **React Icons:** 5.5.0
- **React Router DOM:** 7.9.1
- **React Toastify:** 11.0.5
- **Tailwind CSS:** 3.4.17

---

## Configuração de Variáveis de Ambiente

### Backend (Laravel)

1. Copie o arquivo `.env.example` para `.env` na raiz do backend:

```bash
cp .env.example .env
```

2. Preencha suas credenciais do banco de dados e do Pusher:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=microblog
DB_USERNAME=SEU_USUARIO
DB_PASSWORD=SUA_SENHA

BROADCAST_DRIVER=pusher

PUSHER_APP_ID=SEU_APP_ID
PUSHER_APP_KEY=SEU_APP_KEY
PUSHER_APP_SECRET=SEU_APP_SECRET
PUSHER_APP_CLUSTER=SEU_CLUSTER
```

3. Gere a chave da aplicação e rode as migrations:

```bash
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend (React/Vite)

1. Copie o arquivo `.env.example` para `.env.local` na raiz do frontend:

```bash
cp .env.example .env.local
```

2. Preencha suas chaves públicas do Pusher:

```env
VITE_PUSHER_KEY=SUA_CHAVE_PUBLICA
VITE_PUSHER_CLUSTER=SEU_CLUSTER
```

3. Instale as dependências e rode o servidor do Vite:

```bash
npm install
npm run dev
```

---

## Observações

* O backend usa as **chaves privadas do Pusher** para emitir eventos.
* O frontend usa a **chave pública do Pusher** para escutar os eventos em tempo real.
* Se tudo estiver configurado corretamente, os posts criados serão atualizados em tempo real no frontend.
