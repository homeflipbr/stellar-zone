import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Shield,
  Share2,
  Smartphone,
  FolderOpen,
  RotateCcw,
  Settings,
  CheckCircle,
  ArrowRight,
  Download,
  Lock,
  RefreshCw,
  Star,
  Users,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lysbox-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LYSBOX
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </Link>
            <Link to="/security" className="text-muted-foreground hover:text-foreground transition-colors">
              Segurança
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Suporte
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Começar Grátis</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-1" />
            Novo: Sincronização automática por álbuns
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Armazenamento em nuvem
            <br />
            seguro e inteligente
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            O LYSBOX oferece espaço em nuvem com controle total, compartilhamento seguro 
            e sincronização automática. Organize seus arquivos por álbuns e tenha a 
            tranquilidade de um sistema de recuperação completo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/signup">
                Comece Gratuitamente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/demo">
                Ver Demonstração
              </Link>
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">50GB</div>
              <div className="text-sm text-muted-foreground">Grátis para sempre</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">256-bit</div>
              <div className="text-sm text-muted-foreground">Criptografia</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido especialmente para oferecer segurança, controle e praticidade 
              no gerenciamento dos seus arquivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Controle Total de Segurança</CardTitle>
                <CardDescription>
                  Criptografia de ponta a ponta e controle granular sobre quem 
                  acessa seus arquivos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Compartilhamento Inteligente</CardTitle>
                <CardDescription>
                  Defina quantas vezes um arquivo pode ser baixado e quem tem 
                  permissão para acessá-lo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Sincronização Automática</CardTitle>
                <CardDescription>
                  Seus arquivos sempre atualizados em todos os dispositivos, 
                  automaticamente e em tempo real.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Organização por Álbuns</CardTitle>
                <CardDescription>
                  Organize arquivos em álbuns inteligentes e libere espaço no 
                  seu dispositivo facilmente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Recuperação de Arquivos</CardTitle>
                <CardDescription>
                  Sistema avançado de recuperação que mantém histórico completo 
                  dos seus arquivos excluídos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Painel Individual</CardTitle>
                <CardDescription>
                  Interface amigável com painel de controle personalizado para 
                  cada usuário.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lysbox-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos para todas as necessidades
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para você ou sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Gratuito</CardTitle>
                <CardDescription>Para uso pessoal básico</CardDescription>
                <div className="text-4xl font-bold mt-4">R$ 0<span className="text-lg text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    50GB de armazenamento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Sincronização básica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Compartilhamento simples
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Recuperação 30 dias
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/signup">Começar Grátis</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription>Para profissionais e pequenas equipes</CardDescription>
                <div className="text-4xl font-bold mt-4">R$ 29<span className="text-lg text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    2TB de armazenamento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Sincronização avançada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Controle de downloads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Álbuns ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Recuperação 1 ano
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link to="/signup?plan=pro">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <CardDescription>Para empresas e grandes equipes</CardDescription>
                <div className="text-4xl font-bold mt-4">R$ 99<span className="text-lg text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Armazenamento ilimitado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    API completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Controles administrativos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Auditoria completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Suporte prioritário
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/contact">Falar com Vendas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar como você gerencia seus arquivos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a milhares de usuários que já confiam no LYSBOX para 
            manter seus arquivos seguros e organizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/signup">
                Começar Agora - Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/demo">
                Agendar Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  LYSBOX
                </span>
              </div>
              <p className="text-muted-foreground">
                Armazenamento em nuvem seguro e inteligente para todos.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-colors">Recursos</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Preços</Link></li>
                <li><Link to="/security" className="hover:text-foreground transition-colors">Segurança</Link></li>
                <li><Link to="/api" className="hover:text-foreground transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground transition-colors">Central de Ajuda</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contato</Link></li>
                <li><Link to="/status" className="hover:text-foreground transition-colors">Status</Link></li>
                <li><Link to="/community" className="hover:text-foreground transition-colors">Comunidade</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">Sobre</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Carreiras</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 LYSBOX. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
