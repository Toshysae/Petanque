import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Repeat2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { PostDetail } from "./PostDetail";
import { getRandomPetanqueImage } from "@/utils/images";
import { ScrollArea } from "./ui/scroll-area";
import { POPULAR_POSTS } from "@/utils/constants";

interface SocialFeedProps {
  userId?: string;
  showNewsFeed?: boolean;
}

const fetchUserPosts = async (userId: string): Promise<Post[]> => {
  // Mock data for demonstration
  return [
    {
      id: "1",
      userId: userId,
      content: "Belle journée pour jouer à la pétanque ! 🎯",
      imageUrl: getRandomPetanqueImage(),
      createdAt: new Date().toISOString(),
      likesCount: 12,
      comments: [
        {
          id: "c1",
          userId: "u2",
          userName: "Marie D.",
          text: "Profite bien !",
          rating: 0,
          createdAt: new Date().toISOString(),
        }
      ],
      user: {
        name: "Jean P.",
        avatarUrl: undefined,
      }
    }
  ];
};

const fetchNewsFeed = async (): Promise<Post[]> => {
  // Utiliser les posts de POPULAR_POSTS comme données de démonstration
  return POPULAR_POSTS;
};

export const SocialFeed = ({ userId, showNewsFeed = false }: SocialFeedProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const { data: userPosts, isLoading: isLoadingUserPosts } = useQuery({
    queryKey: ["user-posts", userId],
    queryFn: () => fetchUserPosts(userId || ""),
    enabled: !!userId,
  });

  const { data: newsFeed, isLoading: isLoadingNewsFeed } = useQuery({
    queryKey: ["news-feed"],
    queryFn: fetchNewsFeed,
    enabled: showNewsFeed,
  });

  if (isLoadingUserPosts || isLoadingNewsFeed) {
    return <div>Chargement des publications...</div>;
  }

  const PostCard = ({ post }: { post: Post }) => (
    <Card key={post.id} className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setSelectedPost(post)}>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={post.user.avatarUrl} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{post.user.name}</h3>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
              locale: fr,
            })}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt=""
            className="mt-4 rounded-lg w-full object-cover h-48"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="w-4 h-4" />
          {post.likesCount}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="w-4 h-4" />
          {post.comments.length}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Repeat2 className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <>
      {showNewsFeed && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fil d'actualité</h2>
          <ScrollArea className="h-[800px]">
            <div className="space-y-4">
              {newsFeed?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {userId && (
        <div className="space-y-4">
          {userPosts?.filter(post => post.userId === userId).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {selectedPost && (
        <PostDetail
          post={selectedPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
};