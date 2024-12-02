import { PricingPlans } from "@/components/PricingPlans";
import Logo from "@/components/header/Logo";

const Premium = () => {
  return (
    <div className="min-h-screen bg-primary/95">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="scale-125">
            <Logo />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Passer à Premium
            </h1>
            <p className="mt-5 text-xl text-white/90">
              Et soutenez votre application de petanque préférée
            </p>
          </div>
        </div>
        <PricingPlans />
      </div>
    </div>
  );
};

export default Premium;