import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Files,
  FolderOpen,
  Upload,
  Download,
  Share2,
  MoreVertical,
  Search,
  Grid3X3,
  List,
  Filter,
  Plus,
  Folder,
  FileText,
  Image,
  Video,
  Archive,
  Star,
  Trash2,
  Eye,
  Edit,
  Copy
} from "lucide-react";

const folders = [
  { name: "Documentos", items: 45, modified: "2 dias atrás" },
  { name: "Imagens", items: 128, modified: "5 horas atrás" },
  { name: "Projetos", items: 23, modified: "1 semana atrás" },
  { name: "Backup", items: 12, modified: "3 dias atrás" }
];

const files = [
  {
    name: "Apresentacao_Cliente.pdf",
    size: "2.3 MB",
    modified: "2 horas atrás",
    type: "pdf",
    shared: true,
    starred: true
  },
  {
    name: "Fotos_Familia.zip", 
    size: "45.2 MB",
    modified: "1 dia atrás",
    type: "zip",
    shared: false,
    starred: false
  },
  {
    name: "Video_Tutorial.mp4",
    size: "156.8 MB",
    modified: "3 dias atrás",
    type: "video",
    shared: true,
    starred: false
  },
  {
    name: "Relatorio_Mensal.docx",
    size: "1.1 MB", 
    modified: "1 semana atrás",
    type: "docx",
    shared: false,
    starred: true
  },
  {
    name: "Logo_Empresa.png",
    size: "543 KB",
    modified: "2 semanas atrás", 
    type: "image",
    shared: true,
    starred: false
  },
  {
    name: "Planilha_Vendas.xlsx",
    size: "892 KB",
    modified: "3 semanas atrás",
    type: "excel", 
    shared: false,
    starred: false
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
    case 'docx':
      return FileText;
    case 'image':
    case 'png':
    case 'jpg':
      return Image;
    case 'video':
    case 'mp4':
      return Video;
    case 'zip':
    case 'rar':
      return Archive;
    default:
      return Files;
  }
};

const getFileColor = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'text-red-500';
    case 'docx':
      return 'text-blue-500';
    case 'image':
    case 'png':
    case 'jpg':
      return 'text-green-500';
    case 'video':
    case 'mp4':
      return 'text-purple-500';
    case 'excel':
    case 'xlsx':
      return 'text-emerald-500';
    case 'zip':
    case 'rar':
      return 'text-orange-500';
    default:
      return 'text-gray-500';
  }
};

export default function FileManager() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Meus Arquivos</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie e organize todos os seus arquivos
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar arquivos..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Fazer Upload de Arquivos</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      Arraste arquivos aqui ou clique para selecionar
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Suporta arquivos de até 2GB
                    </p>
                    <Button>
                      Selecionar Arquivos
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Nova Pasta
            </Button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground">
            Meus Arquivos
          </Button>
          <span>/</span>
          <span>Raiz</span>
        </div>

        {/* Folders */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Folder className="w-5 h-5 mr-2" />
            Pastas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {folders.map((folder, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{folder.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {folder.items} itens
                        </p>
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
                          <Edit className="w-4 h-4 mr-2" />
                          Renomear
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Compartilhar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Modificado {folder.modified}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Files */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Files className="w-5 h-5 mr-2" />
            Arquivos
          </h2>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {files.map((file, index) => {
                const FileIcon = getFileIcon(file.type);
                const fileColor = getFileColor(file.type);
                
                return (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow group">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center`}>
                            <FileIcon className={`w-5 h-5 ${fileColor}`} />
                          </div>
                          <div className="flex items-center space-x-1">
                            {file.starred && (
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            )}
                            {file.shared && (
                              <Share2 className="w-4 h-4 text-blue-500" />
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Download className="w-4 h-4 mr-2" />
                                  Baixar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  Visualizar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Renomear
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Copy className="w-4 h-4 mr-2" />
                                  Copiar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Share2 className="w-4 h-4 mr-2" />
                                  Compartilhar
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Star className="w-4 h-4 mr-2" />
                                  {file.starred ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium text-sm truncate" title={file.name}>
                            {file.name}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-muted-foreground">{file.size}</p>
                            <Badge variant="secondary" className="text-xs">
                              {file.type.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {file.modified}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {files.map((file, index) => {
                    const FileIcon = getFileIcon(file.type);
                    const fileColor = getFileColor(file.type);
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-4 hover:bg-accent transition-colors group">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <FileIcon className={`w-4 h-4 ${fileColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <p className="font-medium truncate">{file.name}</p>
                              {file.starred && (
                                <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                              )}
                              {file.shared && (
                                <Share2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {file.size} • {file.modified}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {file.type.toUpperCase()}
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
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
                                <Download className="w-4 h-4 mr-2" />
                                Baixar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                Visualizar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Renomear
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="w-4 h-4 mr-2" />
                                Copiar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="w-4 h-4 mr-2" />
                                Compartilhar
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Star className="w-4 h-4 mr-2" />
                                {file.starred ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Excluir
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
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
