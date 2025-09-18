import Header from '../components/Header';
import PostField from '../components/PostField';
import Post from '../components/Post';
import { useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null"); 
  const isLoggedIn = !!usuario;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const headers = isLoggedIn ? { Authorization: `Bearer ${token}` } : {};
        const response = await api.get("/posts", { headers });
        setPosts(response.data);
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
        toast.error("Erro ao buscar posts");
      }
    };

    fetchPosts();
  }, [isLoggedIn]);

  const handleDelete = async (postId) => {
    try {
      await api.delete(`/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err) {
      console.error("Erro ao apagar post:", err);
      toast.error("Não foi possível apagar o post.");
    }
  };

  const handleEdit = (postId, newContent) => {
    api.put(`/posts/${postId}`, { conteudo: newContent }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setPosts(prev =>
          prev.map(p => (p.id === postId ? { ...p, conteudo: res.data.conteudo } : p))
        );
      })
      .catch(err => {
        console.error("Erro ao editar post:", err);
        toast.error("Não foi possível editar o post.");
      });
  };


  const filteredPosts = posts.filter(post => !post.post_privado || isLoggedIn);

  return (
    <div>
      <Header />
      <div className=' flex flex-col items-center text-center p-10'>
        <div className=' w-[66rem]'>
          <h1 className='text-start font-bold text-4xl mb-8'>Início</h1>
          {isLoggedIn && (
            <PostField
              onPostCreated={(newPost) =>
                setPosts(prevPosts => [newPost, ...prevPosts])
              }
            />
          )}
          {filteredPosts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              author={post.usuario?.nome}
              content={post.conteudo}
              createdAt={post.created_at}
              image={post.usuario?.foto_perfil}
              isOwner={isLoggedIn && post.usuario_id === usuario.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage


