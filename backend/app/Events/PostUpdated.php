<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use App\Models\Post;

class PostUpdated implements ShouldBroadcastNow
{
    use SerializesModels;

    public $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function broadcastOn()
    {
        return new Channel('posts');
    }

    public function broadcastAs()
    {
        return 'post.updated';
    }
}
