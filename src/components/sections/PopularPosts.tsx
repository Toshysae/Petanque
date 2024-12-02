import { Card } from "@/components/ui/card";
import { POPULAR_POSTS } from "@/utils/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const PopularPosts = () => {
  // Get the top 3 posts by likes
  const topPosts = [...POPULAR_POSTS]
    .sort((a, b) => b.likesCount - a.likesCount)
    .slice(0, 3);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Posts populaires</h3>
      <div className="space-y-4">
        {topPosts.map((post) => (
          <Link
            to={`/social/post/${post.id}`}
            key={post.id}
            className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.user.avatarUrl} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{post.user.name}</p>
              <p className="text-sm text-gray-600 truncate">{post.content}</p>
              <div className="flex items-center gap-1 mt-1 text-gray-500">
                <Heart className="w-4 h-4" />
                <span className="text-xs">{post.likesCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};