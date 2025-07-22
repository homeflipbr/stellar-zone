import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Share2,
  Plus,
  Search,
  MoreVertical,
  Copy,
  Eye,
  Edit,
  Trash2,
  Download,
  Users,
  Clock,
  Shield,
  Link as LinkIcon,
  Mail,
  Settings,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Calendar
} from "lucide-react";

const sharedItems = [
  {
    id: 1,
    name: "Apresentacao_Cliente.pdf",
    type: "file",
    sharedWith: "joao@empresa.com",
    permissions: "view",
    downloadLimit: 5,
    downloadsUsed: 2,
    expiresAt: "2024-04-15",
    createdAt: "2024-03-10",
    status: "active",
    size: "2.3 MB",
    link: "https://lysbox.com/s/abc123"
  },
  {
    id: 2,
    name: "Pasta Projeto ABC",
    type: "folder", 
    sharedWith: "equipe@projeto.com",
    permissions: "edit",
    downloadLimit: null,
    downloadsUsed: 45,
    expiresAt: null,
    createdAt: "2024-03-08",
    status: "active",
    size: "156 MB",
    link: "https://lysbox.com/s/def456"
  },
  {
    id: 3,
    name: "Fotos_Evento.zip",
    type: "file",
    sharedWith: "maria@cliente.com",
    permissions: "download",
    downloadLimit: 3,
    downloadsUsed: 3,
    expiresAt: "2024-03-20",
    createdAt: "2024-03-05", 
    status: "expired",
    size: "45.2 MB",
    link: "https://lysbox.com/s/ghi789"
  },
  {
    id: 4,
    name: "Video_Tutorial.mp4",
    type: "file",
    sharedWith: "publico",
    permissions: "view",
    downloadLimit: 50,
    downloadsUsed: 12,
    expiresAt: null,
    createdAt: "2024-02-28",
    status: "active",
    size: "156.8 MB", 
    link: "https://lysbox.com/s/jkl012"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-700';
    case 'expired':
      return 'bg-red-100 text-red-700';
    case 'limited':
      return 'bg-yellow-100 text-yellow-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getPermissionIcon = (permission: string) => {
  switch (permission) {
    case 'view':
      return Eye;
    case 'download':
      return Download;
    case 'edit':
      return Edit;
    default:
      return Eye;
  }
};

export default function Sharing() {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareEmail, setShareEmail] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [downloadLimit, setDownloadLimit] = useState("");
  const [hasExpiration, setHasExpiration] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You would show a toast notification here
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Compartilhamentos</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie arquivos compartilhados e controle de downloads
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar compartilhamentos..."
                className="pl-10 w-64"
              />
            </div>
          </div>

          <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Compartilhar Arquivo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Compartilhar Arquivo</DialogTitle>
                <DialogDescription>
                  Configure as permissões e controles de acesso
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Email do destinatário</Label>
                  <Input
                    value={shareEmail}
                    onChange={(e) => setShareEmail(e.target.value)}
                    placeholder="usuario@email.com"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label>Mensagem (opcional)</Label>
                  <Textarea
                    value={shareMessage}
                    onChange={(e) => setShareMessage(e.target.value)}
                    placeholder="Adicione uma mensagem para o destinatário..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Limite de downloads</Label>
                  <Input
                    value={downloadLimit}
                    onChange={(e) => setDownloadLimit(e.target.value)}
                    placeholder="Ex: 5 (deixe vazio para ilimitado)"
                    type="number"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Defina quantas vezes o arquivo pode ser baixado
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={hasExpiration}
                    onCheckedChange={setHasExpiration}
                  />
                  <Label>Definir data de expiração</Label>
                </div>

                {hasExpiration && (
                  <div>
                    <Label>Data de expiração</Label>
                    <Input
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      type="date"
                      className="mt-1"
                    />
                  </div>
                )}

                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Controles de Segurança:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Rastreamento de downloads em tempo real</li>
                    <li>• Notificações de acesso por email</li>
                    <li>• Links únicos com criptografia</li>
                    <li>• Revogação de acesso a qualquer momento</li>
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShareDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setShareDialogOpen(false)}>
                  Compartilhar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Share2 className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{sharedItems.length}</p>
                  <p className="text-sm text-muted-foreground">Compartilhados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">62</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Pessoas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Expirado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shared items list */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Arquivos Compartilhados
            </CardTitle>
            <CardDescription>
              Gerencie todos os seus compartilhamentos e controles de acesso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sharedItems.map((item) => {
                const PermissionIcon = getPermissionIcon(item.permissions);
                const isExpired = item.status === 'expired';
                const isLimited = item.downloadLimit && item.downloadsUsed >= item.downloadLimit;
                
                return (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {item.type === 'folder' ? (
                          <Share2 className="w-5 h-5 text-primary" />
                        ) : (
                          <Share2 className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-medium truncate">{item.name}</p>
                          <Badge variant="outline" className="text-xs">
                            {item.size}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                            {item.status === 'active' ? 'Ativo' : 'Expirado'}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{item.sharedWith}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <PermissionIcon className="w-3 h-3" />
                            <span className="capitalize">{item.permissions}</span>
                          </div>
                          
                          {item.downloadLimit && (
                            <div className="flex items-center space-x-1">
                              <Download className="w-3 h-3" />
                              <span>
                                {item.downloadsUsed}/{item.downloadLimit} downloads
                              </span>
                            </div>
                          )}
                          
                          {item.expiresAt && (
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>Expira em {item.expiresAt}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(item.link)}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copiar Link
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Estatísticas
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            Configurar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" />
                            Reenviar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Copy className="w-4 h-4 mr-2" />
                            Duplicar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Revogar Acesso
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Security notice */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-blue-900">Compartilhamento Seguro</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Todos os seus compartilhamentos são protegidos com criptografia de ponta a ponta. 
                  Monitore downloads, defina limites e revogue acessos a qualquer momento.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                    Ver Política de Segurança
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                    Configurar Notificações
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
