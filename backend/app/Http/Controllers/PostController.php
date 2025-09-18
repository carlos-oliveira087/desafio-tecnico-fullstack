<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('usuario')->get();
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

        return response()->json($post, 201);
    }

    public function show($id)
    {
        return Post::with('usuario')->findOrFail($id);
    }

    public function destroy($id)
    {
        Post::destroy($id);

        return response()->json(null, 204);
    }
}
