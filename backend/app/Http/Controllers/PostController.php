<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Events\PostCreated;
use App\Events\PostUpdated;
use App\Events\PostDeleted;

class PostController extends Controller
{
    public function index() {
        $posts = Post::with('usuario')->orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }


    public function store(Request $request)
    {
        $request->validate([
            'conteudo' => 'required|string|max:280',
            'usuario_id' => 'required|exists:usuarios,id',
        ]);

        $post = Post::create([
            'conteudo' => $request->conteudo,
            'post_privado' => $request->post_privado ?? false,
            'usuario_id' => $request->usuario_id,
        ]);

        $post->load('usuario');
        event(new PostCreated($post));

        return response()->json($post, 201);
    }

    public function show($id)
    {
        return Post::with('usuario')->findOrFail($id);
    }

    public function destroy($id)
    {
        Post::destroy($id);

        event(new PostDeleted($id));

        return response()->json(null, 204);
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        if ($post->usuario_id !== $request->user()->id) {
            return response()->json(['error' => 'Não autorizado'], 403);
        }

        $post->conteudo = $request->conteudo;
        $post->save();
        $post->load('usuario');

        event(new PostUpdated($post));

        return response()->json($post);
    }

}
