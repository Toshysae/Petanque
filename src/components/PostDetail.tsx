import { Post } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Repeat2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface PostDetailProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
}

export const PostDetail = ({ post, isOpen, onClose }: PostDetailProps) => {
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    toast({
      title: "Commentaire ajouté",
      description: "Votre commentaire a été publié",
    });
    
    setComment("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Publication</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
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
          </div>

          <p className="text-lg">{post.content}</p>
          
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt=""
              className="rounded-lg w-full object-cover"
            />
          )}

          <div className="flex justify-between border-t border-b py-2">
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
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Commentaires</h4>
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{comment.userName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{comment.userName}</p>
                  <p className="text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Ajouter un commentaire..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleAddComment} className="w-full">
              Commenter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};