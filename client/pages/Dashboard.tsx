import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Files,
  FolderOpen,
  Share2,
  Download,
  Upload,
  Clock,
  TrendingUp,
  HardDrive,
  Shield,
  Users,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const recentFiles = [
  {
    name: "Apresentacao_Cliente.pdf",
    size: "2.3 MB",
    modified: "2 horas atrás",
    type: "pdf"
  },
  {
    name: "Fotos_Familia.zip",
    size: "45.2 MB", 
    modified: "1 dia atrás",
    type: "zip"
  },
  {
    name: "Backup_Projeto.zip",
    size: "156.8 MB",
    modified: "3 dias atrás", 
    type: "zip"
  },
  {
    name: "Relatorio_Mensal.docx",
    size: "1.1 MB",
    modified: "1 semana atrás",
    type: "docx"
  }
];

const quickStats = [
  {
    title: "Arquivos Totais",
    value: "1,247",
    change: "+12%",
    icon: Files,
    color: "text-blue-500"
  },
  {
    title: "Álbuns",
    value: "23",
    change: "+3",
    icon: FolderOpen,
    color: "text-green-500"
  },
  {
    title: "Compartilhamentos",
    value: "89",
    change: "+15%",
    icon: Share2,
    color: "text-purple-500"
  },
  {
    title: "Downloads Hoje",
    value: "156",
    change: "+8%",
    icon: Download,
    color: "text-orange-500"
  }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Welcome section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Bem-vindo de volta, Mike! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Aqui está um resumo da sua atividade no LYSBOX
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button asChild>
              <Link to="/dashboard/files">
                <Upload className="w-4 h-4 mr-2" />
                Fazer Upload
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard/albums">
                <FolderOpen className="w-4 h-4 mr-2" />
                Novo Álbum
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} desde último mês
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Storage overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HardDrive className="w-5 h-5 mr-2" />
                Uso do Armazenamento
              </CardTitle>
              <CardDescription>
                Acompanhe o uso do seu espaço em nuvem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Usado: 23.5 GB</span>
                  <span>Total: 50 GB</span>
                </div>
                <Progress value={47} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Documentos</span>
                    <span className="text-sm font-medium">8.2 GB</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Imagens</span>
                    <span className="text-sm font-medium">12.1 GB</span>
                  </div>
                  <Progress value={51} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vídeos</span>
                    <span className="text-sm font-medium">2.8 GB</span>
                  </div>
                  <Progress value={12} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Outros</span>
                    <span className="text-sm font-medium">0.4 GB</span>
                  </div>
                  <Progress value={2} className="h-2" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Backup automático ativo
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard/settings/upgrade">
                    Fazer Upgrade
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Upload className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      Você fez upload de <strong>3 arquivos</strong>
                    </p>
                    <p className="text-xs text-muted-foreground">2 horas atrás</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      Arquivo compartilhado com <strong>joão@empresa.com</strong>
                    </p>
                    <p className="text-xs text-muted-foreground">5 horas atrás</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FolderOpen className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      Novo álbum <strong>Projeto 2024</strong> criado
                    </p>
                    <p className="text-xs text-muted-foreground">1 dia atrás</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Download className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <strong>maria@cliente.com</strong> baixou seu arquivo
                    </p>
                    <p className="text-xs text-muted-foreground">2 dias atrás</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/dashboard/activity">
                  Ver Toda Atividade
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent files */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Arquivos Recentes
                </CardTitle>
                <CardDescription>
                  Seus arquivos acessados recentemente
                </CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link to="/dashboard/files">
                  Ver Todos
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Files className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • {file.modified}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {file.type.toUpperCase()}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
