import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { MapPin, Users, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { fetchSpotDetail } from '@/utils/api';

const SpotDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(5);

  const { data: spot, isLoading, isError } = useQuery({
    queryKey: ['spot', id],
    queryFn: () => fetchSpotDetail(id!),
    enabled: !!id,
  });

  const handleAddComment = () => {
    toast({
      title: "Commentaire ajouté",
      description: "Merci pour votre contribution !",
    });
    setNewComment('');
  };

  if (isLoading) return <div>Chargement...</div>;
  if (isError || !spot) return <div>Spot non trouvé</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/spots" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Retour à la carte
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">{spot.name}</h1>
              
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{spot.address}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{spot.terrainCount} terrains</span>
                </div>
                <div>
                  <strong>Surface :</strong> {spot.surfaceType}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>{spot.rating} / 5</span>
                </div>
              </div>
            </div>

            {spot.images.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Photos</h2>
                <div className="grid grid-cols-2 gap-4">
                  {spot.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${spot.name} - Photo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Commentaires</CardTitle>
                <CardDescription>Partagez votre expérience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 cursor-pointer ${
                          star <= userRating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setUserRating(star)}
                      />
                    ))}
                  </div>
                  <Textarea
                    placeholder="Partagez votre expérience..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button onClick={handleAddComment} className="w-full">
                    Ajouter un commentaire
                  </Button>
                </div>

                <div className="space-y-4">
                  {spot.comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{comment.userName}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="ml-1">{comment.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{comment.text}</p>
                      <span className="text-sm text-gray-400">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetail;