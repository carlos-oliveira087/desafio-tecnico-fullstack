<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Broadcaster
    |--------------------------------------------------------------------------
    |
    | Este valor controla o driver de broadcast padrão que será usado
    | pelo framework. Pode ser "pusher", "redis", "log", ou "null".
    |
    */

    'default' => env('BROADCAST_DRIVER', 'log'),

    /*
    |--------------------------------------------------------------------------
    | Conexões de Broadcast
    |--------------------------------------------------------------------------
    |
    | Aqui você pode configurar cada conexão de broadcast que será usada
    | pelo seu aplicativo. Você pode adicionar Pusher, Redis, log, etc.
    |
    */

    'connections' => [

        'pusher' => [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'secret' => env('PUSHER_APP_SECRET'),
            'app_id' => env('PUSHER_APP_ID'),
            'options' => [
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'useTLS' => true,
            ],
        ],

        'redis' => [
            'driver' => 'redis',
            'connection' => 'default',
        ],

        'log' => [
            'driver' => 'log',
        ],

        'null' => [
            'driver' => 'null',
        ],

    ],

];
