import Header from '../components/Header';
import PostField from '../components/PostField';
import Post from '../components/Post';

function HomePage() {

  const posts = [
    { author: "Carlos", content: "Meu primeiro post!", createdAt: "2025-09-17T10:00:00Z" },
    { author: "João", content: "React é muito massa!", createdAt: "2025-09-10T10:00:00Z" },
  ];

  return (
    <div>
      <Header />
      <div className=' flex flex-col items-center text-center p-10'>
        <div className=' w-[66rem]'>
          <h1 className='text-start font-bold text-4xl mb-8'>Início</h1>
          <PostField />
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              content={post.content}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage


