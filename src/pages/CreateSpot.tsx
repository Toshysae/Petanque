import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

const CreateSpot = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerified, setIsVerified] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    terrainCount: "",
    surfaceType: "",
    description: "",
    position: { lat: 43.2951, lng: 5.3860 },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValid = file.type.startsWith('image/') || file.type.startsWith('video/');
      if (!isValid) {
        toast({
          title: "Format non supporté",
          description: "Seuls les images et vidéos sont acceptées",
          variant: "destructive",
        });
      }
      return isValid;
    });

    setSelectedFiles(prev => [...prev, ...validFiles]);

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      toast({
        title: "Erreur",
        description: "Veuillez valider le captcha",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Succès",
      description: "Votre spot a été créé avec succès !",
    });
    navigate("/");
  };

  const handleCaptchaChange = (value: string | null) => {
    setIsVerified(!!value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Créer un nouveau spot</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nom du spot</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Boule du Canet"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Adresse</label>
          <Input
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Ex: 12 Bd Charles Moretti"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ville</label>
          <Input
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="Ex: Marseille"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Nombre de terrains</label>
          <Input
            type="number"
            value={formData.terrainCount}
            onChange={(e) => setFormData({ ...formData, terrainCount: e.target.value })}
            placeholder="Ex: 8"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Type de surface</label>
          <Input
            required
            value={formData.surfaceType}
            onChange={(e) => setFormData({ ...formData, surfaceType: e.target.value })}
            placeholder="Ex: Gravier stabilisé"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description du spot..."
            className="h-32"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Photos et Vidéos</label>
          <Input
            type="file"
            onChange={handleFileChange}
            accept="image/*,video/*"
            multiple
            className="mb-4"
          />
          {previews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative group">
                  {selectedFiles[index].type.startsWith('image/') ? (
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={preview}
                      className="w-full h-32 object-cover rounded-lg"
                      controls
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="my-6">
          <ReCAPTCHA
            sitekey="6LfYXIQpAAAAANUf7rrfEOZFVy2VlA8v9YG2FHKt"
            onChange={handleCaptchaChange}
          />
        </div>

        <Button type="submit" className="w-full">
          Créer le spot
        </Button>
      </form>
    </div>
  );
};

export default CreateSpot;
