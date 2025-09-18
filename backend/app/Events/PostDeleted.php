<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class PostDeleted implements ShouldBroadcastNow
{
    use SerializesModels;

    public $post; 

    public function __construct($postId)
    {
        $this->post = ['id' => $postId]; 
    }

    public function broadcastOn()
    {
        return new Channel('posts');
    }

    public function broadcastAs()
    {
        return 'post.deleted';
    }
}
