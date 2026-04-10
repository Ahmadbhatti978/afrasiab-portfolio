import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL ?? "/";

  // Relative asset base (`./`) on GitHub Pages: infer /<repo> from the URL so routes match.
  if (typeof window !== "undefined" && (base === "./" || base === ".")) {
    const host = window.location.hostname;
    if (host === "github.io" || host.endsWith(".github.io")) {
      const first = window.location.pathname.split("/").filter(Boolean)[0];
      return first ? `/${first}` : undefined;
    }
  }

  if (base.startsWith("/") && base !== "/") {
    return base.replace(/\/$/, "") || undefined;
  }

  return undefined;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
