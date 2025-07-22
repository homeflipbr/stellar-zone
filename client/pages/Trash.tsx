import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Trash2,
  RotateCcw,
  Search,
  MoreVertical,
  Download,
  AlertCircle,
  CheckCircle,
  Calendar,
  Files,
  FolderOpen,
  Image,
  Video,
  FileText,
  Archive,
  Filter,
  Clock,
  Shield,
  RefreshCw,
  X
} from "lucide-react";

const deletedItems = [
  {
    id: 1,
    name: "Apresentacao_Antiga.pdf",
    type: "pdf",
    size: "2.3 MB",
    deletedAt: "2024-03-15",
    deletedBy: "Você",
    originalPath: "/Documentos/Trabalho",
    recoverable: true,
    autoDeleteAt: "2024-04-14",
    reason: "Excluído manualmente"
  },
  {
    id: 2,
    name: "Backup_Sistema.zip", 
    type: "zip",
    size: "156 MB",
    deletedAt: "2024-03-12",
    deletedBy: "Sincronização",
    originalPath: "/Backup",
    recoverable: true,
    autoDeleteAt: "2024-04-11",
    reason: "Removido do dispositivo"
  },
  {
    id: 3,
    name: "Video_Teste.mp4",
    type: "video",
    size: "45.8 MB",
    deletedAt: "2024-03-10",
    deletedBy: "Você",
    originalPath: "/Videos/Projetos",
    recoverable: true,
    autoDeleteAt: "2024-04-09",
    reason: "Excluído manualmente"
  },
  {
    id: 4,
    name: "Fotos_Duplicadas",
    type: "folder",
    size: "2.1 GB",
    deletedAt: "2024-03-08",
    deletedBy: "Sistema",
    originalPath: "/Imagens",
    recoverable: true,
    autoDeleteAt: "2024-04-07",
    reason: "Limpeza automática"
  },
  {
    id: 5,
    name: "Documento_Temporario.docx",
    type: "docx", 
    size: "890 KB",
    deletedAt: "2024-02-28",
    deletedBy: "Você",
    originalPath: "/Documentos/Temp",
    recoverable: false,
    autoDeleteAt: "2024-03-29",
    reason: "Permanentemente excluído"
  },
  {
    id: 6,
    name: "Cache_Aplicativo",
    type: "folder",
    size: "512 MB", 
    deletedAt: "2024-02-25",
    deletedBy: "Sistema",
    originalPath: "/Sistema/Cache",
    recoverable: false,
    autoDeleteAt: "2024-03-26",
    reason: "Auto-limpeza expirada"
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
    case 'folder':
      return FolderOpen;
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
    case 'zip':
    case 'rar':
      return 'text-orange-500';
    case 'folder':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};

export default function Trash() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [bulkActionType, setBulkActionType] = useState<'restore' | 'delete'>('restore');

  const recoverableItems = deletedItems.filter(item => item.recoverable);
  const permanentlyDeleted = deletedItems.filter(item => !item.recoverable);

  const handleSelectItem = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === recoverableItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(recoverableItems.map(item => item.id));
    }
  };

  const handleBulkAction = (action: 'restore' | 'delete') => {
    setBulkActionType(action);
    setConfirmDialogOpen(true);
  };

  const executeBulkAction = () => {
    // Here you would implement the actual restore/delete logic
    console.log(`${bulkActionType}ing items:`, selectedItems);
    setConfirmDialogOpen(false);
    setSelectedItems([]);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Lixeira</h1>
            <p className="text-muted-foreground mt-1">
              Recupere arquivos excluídos ou gerencie exclusões permanentes
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar na lixeira..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {selectedItems.length > 0 && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkAction('restore')}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Recuperar ({selectedItems.length})
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleBulkAction('delete')}
              >
                <X className="w-4 h-4 mr-2" />
                Excluir Permanentemente
              </Button>
            </div>
          )}
        </div>

        {/* Info Alert */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Arquivos na lixeira são automaticamente excluídos permanentemente após 30 dias. 
            Arquivos não recuperáveis já passaram deste período ou foram excluídos permanentemente.
          </AlertDescription>
        </Alert>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Trash2 className="w-4 h-4 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{deletedItems.length}</p>
                  <p className="text-sm text-muted-foreground">Itens Excluídos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{recoverableItems.length}</p>
                  <p className="text-sm text-muted-foreground">Recuperáveis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {recoverableItems.reduce((total, item) => {
                      const daysLeft = Math.ceil((new Date(item.autoDeleteAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                      return Math.min(total, daysLeft);
                    }, 30)}d
                  </p>
                  <p className="text-sm text-muted-foreground">Próximo Expire</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {(deletedItems.reduce((total, item) => {
                      const sizeInMB = parseFloat(item.size.replace(/[^\d.]/g, ''));
                      const multiplier = item.size.includes('GB') ? 1024 : 1;
                      return total + (sizeInMB * multiplier);
                    }, 0) / 1024).toFixed(1)} GB
                  </p>
                  <p className="text-sm text-muted-foreground">Espaço Usado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recoverable items */}
        {recoverableItems.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <RotateCcw className="w-5 h-5 mr-2 text-green-500" />
                    Arquivos Recuperáveis
                  </CardTitle>
                  <CardDescription>
                    Estes arquivos podem ser restaurados para sua localização original
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedItems.length === recoverableItems.length}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-sm text-muted-foreground">Selecionar todos</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recoverableItems.map((item) => {
                  const FileIcon = getFileIcon(item.type);
                  const fileColor = getFileColor(item.type);
                  const daysLeft = Math.ceil((new Date(item.autoDeleteAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                  
                  return (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => handleSelectItem(item.id)}
                        />
                        
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileIcon className={`w-5 h-5 ${fileColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="font-medium">{item.name}</p>
                            <Badge variant="outline" className="text-xs">
                              {item.size}
                            </Badge>
                            {daysLeft <= 7 && (
                              <Badge variant="destructive" className="text-xs">
                                {daysLeft}d restantes
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span>Excluído em {item.deletedAt}</span>
                            <span className="mx-2">•</span>
                            <span>{item.originalPath}</span>
                            <span className="mx-2">•</span>
                            <span>{item.reason}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Recuperar
                        </Button>
                        
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <RotateCcw className="w-4 h-4 mr-2" />
                              Recuperar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="w-4 h-4 mr-2" />
                              Baixar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <X className="w-4 h-4 mr-2" />
                              Excluir Permanentemente
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

        {/* Permanently deleted items */}
        {permanentlyDeleted.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <X className="w-5 h-5 mr-2 text-red-500" />
                Arquivos Permanentemente Excluídos
              </CardTitle>
              <CardDescription>
                Estes arquivos não podem mais ser recuperados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {permanentlyDeleted.map((item) => {
                  const FileIcon = getFileIcon(item.type);
                  const fileColor = getFileColor(item.type);
                  
                  return (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg bg-muted/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center opacity-50">
                          <FileIcon className={`w-5 h-5 ${fileColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="font-medium text-muted-foreground">{item.name}</p>
                            <Badge variant="secondary" className="text-xs">
                              {item.size}
                            </Badge>
                            <Badge variant="destructive" className="text-xs">
                              Não Recuperável
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span>Excluído permanentemente em {item.deletedAt}</span>
                            <span className="mx-2">•</span>
                            <span>{item.reason}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty state */}
        {deletedItems.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lixeira Vazia</h3>
              <p className="text-muted-foreground mb-4">
                Não há arquivos excluídos no momento. Todos os seus dados estão seguros!
              </p>
              <Button variant="outline" asChild>
                <a href="/dashboard/files">
                  <Files className="w-4 h-4 mr-2" />
                  Voltar aos Arquivos
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Confirmation Dialog */}
        <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {bulkActionType === 'restore' ? 'Recuperar Arquivos' : 'Excluir Permanentemente'}
              </DialogTitle>
              <DialogDescription>
                {bulkActionType === 'restore' 
                  ? `Você está prestes a recuperar ${selectedItems.length} arquivo(s). Eles serão restaurados para suas localizações originais.`
                  : `Você está prestes a excluir permanentemente ${selectedItems.length} arquivo(s). Esta ação não pode ser desfeita.`
                }
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
                Cancelar
              </Button>
              <Button 
                variant={bulkActionType === 'restore' ? 'default' : 'destructive'}
                onClick={executeBulkAction}
              >
                {bulkActionType === 'restore' ? (
                  <>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Recuperar
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 mr-2" />
                    Excluir Permanentemente
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
