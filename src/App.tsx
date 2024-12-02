import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SpotDetail from "./pages/SpotDetail";
import Auth from "./pages/Auth";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import SocialProfile from "./pages/SocialProfile";
import CreateSpot from "./pages/CreateSpot";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Spots from "./pages/Spots";
import Premium from "./pages/Premium";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/spots/:id" element={<SpotDetail />} />
          <Route path="/spots/create" element={<CreateSpot />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/social/profile/:id" element={<SocialProfile />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;