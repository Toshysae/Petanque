import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: string;
  users: string;
  projects: string;
}

const plans: PricingPlan[] = [
  {
    name: "Start",
    price: "Free",
    users: "1 User",
    projects: "1 Project",
  },
  {
    name: "Premium",
    price: "€0.99/mois",
    users: "5 Users",
    projects: "20 Projects",
  },
  {
    name: "Lifetime",
    price: "€99.99",
    users: "100 Users",
    projects: "100 Projects",
  },
];

export const PricingPlans = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planName: string) => {
    // Here we can add logic later to handle different plans
    navigate("/premium");
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">3 Options de contributions</h2>
          <p className="text-white/80 text-2xl font-semibold">
            En passant à la version PREMIUM ou LIFETIME, vous soutenez le développement de l'application tout en profitant d'une expérience SANS PUBLICITÉ. Votre soutien nous permet de continuer à améliorer l'application pour toute la communauté pétanque.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white shadow-md ${
                index === 2 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{plan.users}</p>
                  <p>{plan.projects}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {plan.name === "Lifetime" ? "PASSER À LIFETIME" : "PASSER À PREMIUM"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};