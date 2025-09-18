<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index()
    {
        return Usuario::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:usuarios,email',
            'nome' => 'required|string|max:255',
            'foto_perfil' => 'nullable|image|max:2048',
            'senha' => [
                'required',
                'string',
                'min:8',
                'regex:/[0-9]/',         
                'regex:/[@$!%*#?&]/',
                'confirmed',
            ],
        ], [
            'email.email' => 'Por favor, insira um email válido.',
            'email.required' => 'O campo email é obrigatório.',
            'email.unique' => 'Este email já está cadastrado.',
            'nome.required' => 'O campo nome é obrigatório.',
            'senha.required' => 'O campo senha é obrigatório.',
            'senha.min' => 'A senha deve ter no mínimo 8 caracteres.',
            'senha.regex' => 'A senha deve conter pelo menos 1 número e 1 caractere especial.',
            'senha.confirmed' => 'A confirmação de senha não confere.',
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto_perfil')) {
            $fotoPath = $request->file('foto_perfil')->store('usuarios', 'public');
        }

        $usuario = Usuario::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'senha' => bcrypt($request->senha), 
            'foto_perfil' => $fotoPath,
        ]);

        return response()->json($usuario, 201);
    }

    public function show($id)
    {
        return Usuario::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);

        $usuario->update($request->all());

        return response()->json($usuario, 200);
    }

    public function destroy($id)
    {
        Usuario::destroy($id);

        return response()->json(null, 204);
    }
    
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'senha' => 'required',     
        ], [
            'email.email' => 'Por favor, insira um email válido.',
            'email.required' => 'O campo email é obrigatório.',
            'senha.required' => 'O campo senha é obrigatório.',
        ]);


        $usuario = Usuario::where('email', $request->email)->first();

        if (!Hash::check($request->senha, $usuario->senha)) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        $token = $usuario->createToken('api_token')->plainTextToken;

        return response()->json([
            'usuario' => $usuario,
            'token' => $token
        ]);
    }

}
