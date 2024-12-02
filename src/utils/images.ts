const PETANQUE_IMAGES = [
  "/lovable-uploads/15d4f3bf-03b8-4921-9b40-b36ef7619b45.png",
  "/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png",
  "/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png",
  "/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png",
];

export const getRandomPetanqueImage = () => {
  const randomIndex = Math.floor(Math.random() * PETANQUE_IMAGES.length);
  return PETANQUE_IMAGES[randomIndex];
};