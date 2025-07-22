import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Dashboard from "./pages/Dashboard";
import FileManager from "./pages/FileManager";
import Albums from "./pages/Albums";
import Sharing from "./pages/Sharing";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Main Navigation Routes */}
          <Route path="/features" element={
            <PlaceholderPage
              title="Recursos do LYSBOX"
              description="Descubra todas as funcionalidades que fazem do LYSBOX a melhor escolha para armazenamento em nuvem."
              pageType="recursos"
            />
          } />
          <Route path="/pricing" element={
            <PlaceholderPage
              title="Planos e Preços"
              description="Escolha o plano ideal para suas necessidades de armazenamento e compartilhamento."
              pageType="preços"
            />
          } />
          <Route path="/security" element={
            <PlaceholderPage
              title="Segurança e Privacidade"
              description="Conheça como protegemos seus dados com criptografia de ponta e controles avançados."
              pageType="segurança"
            />
          } />
          <Route path="/support" element={
            <PlaceholderPage
              title="Suporte ao Cliente"
              description="Nossa equipe está pronta para ajudar você a aproveitar ao máximo o LYSBOX."
              pageType="suporte"
            />
          } />

          {/* Authentication Routes */}
          <Route path="/login" element={
            <PlaceholderPage
              title="Entrar na Sua Conta"
              description="Acesse seus arquivos e configurações do LYSBOX."
              pageType="login"
            />
          } />
          <Route path="/signup" element={
            <PlaceholderPage
              title="Criar Conta Gratuita"
              description="Comece a usar o LYSBOX hoje mesmo com 50GB gratuitos."
              pageType="cadastro"
            />
          } />

          {/* Additional Routes */}
          <Route path="/demo" element={
            <PlaceholderPage
              title="Demonstração do LYSBOX"
              description="Veja como o LYSBOX pode transformar sua forma de gerenciar arquivos."
              pageType="demonstração"
            />
          } />
          <Route path="/contact" element={
            <PlaceholderPage
              title="Fale Conosco"
              description="Entre em contato com nossa equipe para esclarecer dúvidas ou solicitar informações."
              pageType="contato"
            />
          } />
          <Route path="/api" element={
            <PlaceholderPage
              title="API do LYSBOX"
              description="Integre o LYSBOX aos seus sistemas com nossa API robusta e documentada."
              pageType="API"
            />
          } />
          <Route path="/help" element={
            <PlaceholderPage
              title="Central de Ajuda"
              description="Encontre respostas para as perguntas mais frequentes e tutoriais detalhados."
              pageType="ajuda"
            />
          } />
          <Route path="/status" element={
            <PlaceholderPage
              title="Status do Sistema"
              description="Acompanhe o status em tempo real dos serviços do LYSBOX."
              pageType="status"
            />
          } />
          <Route path="/community" element={
            <PlaceholderPage
              title="Comunidade LYSBOX"
              description="Participe da nossa comunidade e compartilhe experiências com outros usuários."
              pageType="comunidade"
            />
          } />
          <Route path="/about" element={
            <PlaceholderPage
              title="Sobre o LYSBOX"
              description="Conheça nossa história, missão e os valores que nos movem."
              pageType="sobre"
            />
          } />
          <Route path="/blog" element={
            <PlaceholderPage
              title="Blog do LYSBOX"
              description="Acompanhe as últimas novidades, dicas e insights sobre armazenamento em nuvem."
              pageType="blog"
            />
          } />
          <Route path="/careers" element={
            <PlaceholderPage
              title="Trabalhe Conosco"
              description="Faça parte da equipe que está revolucionando o armazenamento em nuvem."
              pageType="carreiras"
            />
          } />
          <Route path="/privacy" element={
            <PlaceholderPage
              title="Política de Privacidade"
              description="Saiba como coletamos, usamos e protegemos suas informações pessoais."
              pageType="privacidade"
            />
          } />
          <Route path="/terms" element={
            <PlaceholderPage
              title="Termos de Uso"
              description="Leia os termos e condições para uso dos serviços do LYSBOX."
              pageType="termos"
            />
          } />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/files" element={<FileManager />} />
          <Route path="/dashboard/albums" element={<Albums />} />
          <Route path="/dashboard/shared" element={<Sharing />} />

          {/* Dashboard Pages */}
          <Route path="/dashboard/trash" element={<Trash />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {/* Dashboard Placeholder Routes */}
          <Route path="/dashboard/settings/profile" element={
            <PlaceholderPage
              title="Perfil"
              description="Gerencie suas informações pessoais e preferências de conta."
              pageType="perfil"
            />
          } />
          <Route path="/dashboard/settings/security" element={
            <PlaceholderPage
              title="Segurança"
              description="Configure autenticação em duas etapas e outras opções de segurança."
              pageType="segurança"
            />
          } />
          <Route path="/dashboard/settings/upgrade" element={
            <PlaceholderPage
              title="Upgrade de Plano"
              description="Expanda seu armazenamento e recursos com nossos planos premium."
              pageType="upgrade"
            />
          } />
          <Route path="/dashboard/help" element={
            <PlaceholderPage
              title="Central de Ajuda"
              description="Encontre tutoriais, guias e suporte para usar o LYSBOX."
              pageType="ajuda"
            />
          } />
          <Route path="/dashboard/activity" element={
            <PlaceholderPage
              title="Atividade"
              description="Veja todo o histórico de ações e atividades da sua conta."
              pageType="atividade"
            />
          } />
          <Route path="/logout" element={
            <PlaceholderPage
              title="Logout"
              description="Você foi desconectado com segurança do LYSBOX."
              pageType="logout"
            />
          } />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
