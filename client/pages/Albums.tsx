import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import DashboardLayout from "@/components/DashboardLayout";
import {
  FolderOpen,
  Plus,
  Search,
  MoreVertical,
  Settings,
  Share2,
  Download,
  Trash2,
  Eye,
  Edit,
  Calendar,
  HardDrive,
  Image,
  FileText,
  Video,
  Archive,
  Smartphone,
  Monitor,
  Camera
} from "lucide-react";

const albums = [
  {
    id: 1,
    name: "Fotos de Família",
    description: "Momentos especiais em família",
    items: 245,
    size: "1.2 GB",
    created: "15 Mar 2024",
    synced: true,
    autoSync: true,
    thumbnail: "family",
    type: "photos"
  },
  {
    id: 2, 
    name: "Documentos Importantes",
    description: "Contratos, certidões e documentos pessoais",
    items: 42,
    size: "156 MB", 
    created: "10 Mar 2024",
    synced: true,
    autoSync: false,
    thumbnail: "documents",
    type: "documents"
  },
  {
    id: 3,
    name: "Projeto Cliente ABC",
    description: "Arquivos do projeto em andamento",
    items: 89,
    size: "3.8 GB",
    created: "8 Mar 2024", 
    synced: false,
    autoSync: true,
    thumbnail: "work",
    type: "work"
  },
  {
    id: 4,
    name: "Backup Smartphone",
    description: "Backup automático do celular",
    items: 1247,
    size: "8.9 GB",
    created: "1 Mar 2024",
    synced: true,
    autoSync: true,
    thumbnail: "phone",
    type: "backup"
  },
  {
    id: 5,
    name: "Vídeos Pessoais", 
    description: "Vídeos de viagens e eventos",
    items: 23,
    size: "12.4 GB",
    created: "28 Fev 2024",
    synced: true,
    autoSync: false,
    thumbnail: "videos",
    type: "videos"
  },
  {
    id: 6,
    name: "Backup Desktop",
    description: "Arquivos importantes do computador",
    items: 567,
    size: "5.2 GB", 
    created: "25 Fev 2024",
    synced: false,
    autoSync: true,
    thumbnail: "desktop",
    type: "backup"
  }
];

const getAlbumIcon = (type: string) => {
  switch (type) {
    case 'photos':
      return Camera;
    case 'documents':
      return FileText;
    case 'work':
      return FolderOpen;
    case 'backup':
      return HardDrive;
    case 'videos':
      return Video;
    default:
      return FolderOpen;
  }
};

const getAlbumColor = (type: string) => {
  switch (type) {
    case 'photos':
      return 'text-green-500 bg-green-50';
    case 'documents':
      return 'text-blue-500 bg-blue-50';
    case 'work':
      return 'text-purple-500 bg-purple-50';
    case 'backup':
      return 'text-orange-500 bg-orange-50';
    case 'videos':
      return 'text-red-500 bg-red-50';
    default:
      return 'text-gray-500 bg-gray-50';
  }
};

export default function Albums() {
  const [newAlbumDialogOpen, setNewAlbumDialogOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");

  const handleCreateAlbum = () => {
    // Here you would implement the album creation logic
    setNewAlbumDialogOpen(false);
    setAlbumName("");
    setAlbumDescription("");
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Álbuns</h1>
            <p className="text-muted-foreground mt-1">
              Organize seus arquivos por álbuns e libere espaço no dispositivo
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar álbuns..."
                className="pl-10 w-64"
              />
            </div>
          </div>

          <Dialog open={newAlbumDialogOpen} onOpenChange={setNewAlbumDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Álbum
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Novo Álbum</DialogTitle>
                <DialogDescription>
                  Organize seus arquivos criando um novo álbum personalizado
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nome do Álbum</label>
                  <Input
                    value={albumName}
                    onChange={(e) => setAlbumName(e.target.value)}
                    placeholder="Ex: Fotos de Viagem"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Descrição (Opcional)</label>
                  <Textarea
                    value={albumDescription}
                    onChange={(e) => setAlbumDescription(e.target.value)}
                    placeholder="Descreva o conteúdo deste álbum..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Recursos do Álbum:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sincronização automática configurável</li>
                    <li>• Organização inteligente por tipo de arquivo</li>
                    <li>• Backup automático do dispositivo</li>
                    <li>• Liberação de espaço no dispositivo</li>
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewAlbumDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleCreateAlbum}>
                  Criar Álbum
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
                <FolderOpen className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{albums.length}</p>
                  <p className="text-sm text-muted-foreground">Álbuns Totais</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Sync Ativo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">31.7 GB</p>
                  <p className="text-sm text-muted-foreground">Espaço Total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Monitor className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">15.8 GB</p>
                  <p className="text-sm text-muted-foreground">Liberado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Albums grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => {
            const AlbumIcon = getAlbumIcon(album.type);
            const albumColorClass = getAlbumColor(album.type);
            
            return (
              <Card key={album.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${albumColorClass}`}>
                        <AlbumIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{album.name}</CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {album.description}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Abrir
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="w-4 h-4 mr-2" />
                          Configurar Sync
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Compartilhar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Baixar Tudo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{album.items} arquivos</span>
                      <span className="font-medium">{album.size}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {album.synced ? (
                          <Badge variant="secondary" className="text-xs">
                            <Smartphone className="w-3 h-3 mr-1" />
                            Sincronizado
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">
                            Pendente
                          </Badge>
                        )}
                        
                        {album.autoSync && (
                          <Badge className="text-xs bg-green-100 text-green-700">
                            Auto-Sync
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {album.created}
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help section */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <HardDrive className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Como funciona a organização por álbuns?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Os álbuns permitem organizar seus arquivos de forma inteligente e liberar espaço no seu dispositivo. 
                  Configure a sincronização automática para manter apenas os arquivos mais importantes localmente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Saiba Mais
                  </Button>
                  <Button variant="outline" size="sm">
                    Configurar Auto-Sync
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
