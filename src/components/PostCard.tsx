import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import { Post } from "@/types";

export const PostCard = ({ post }: { post: Post }) => (
  <Card className="p-4">
    <div className="flex items-center gap-3 mb-3">
      <Avatar>
        <AvatarImage src={post.user?.avatarUrl} />
        <AvatarFallback>{post.user?.name?.[0] || '?'}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{post.user?.name || 'Anonymous'}</p>
        <p className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    <p className="mb-3">{post.content}</p>
    {post.imageUrl && (
      <img
        src={post.imageUrl}
        alt=""
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
    )}
    <div className="flex items-center gap-2 text-gray-500">
      <ThumbsUp className="w-4 h-4" />
      <span>{post.likesCount}</span>
    </div>
  </Card>
);