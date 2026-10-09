import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useRoute } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import CVPrint from "./pages/CVPrint";
import Bioinformatics from "./pages/Bioinformatics";
import AI from "./pages/AI";
import Statistics from "./pages/Statistics";
import Services from "./pages/Services";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/cv"} component={CV} />
      <Route path={"/cv-print"} component={CVPrint} />
      <Route path={"/bioinformatics"} component={Bioinformatics} />
      <Route path={"/ai"} component={AI} />
      <Route path={"/statistics"} component={Statistics} />
      <Route path={"/services"} component={Services} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function AppShell() {
  const [isPrintPage] = useRoute("/cv-print");
  return (
    <>
      {!isPrintPage && <Navigation />}
      <Router />
      {!isPrintPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <AppShell />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
