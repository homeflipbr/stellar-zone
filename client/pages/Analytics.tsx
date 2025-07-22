import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Download,
  Upload,
  Share2,
  Eye,
  Users,
  Globe,
  Calendar,
  Clock,
  HardDrive,
  Activity,
  FileText,
  Image,
  Video,
  Archive,
  Smartphone,
  Monitor,
  MapPin
} from "lucide-react";

const storageData = [
  { name: "Documentos", value: 8.2, color: "bg-blue-500", percentage: 35 },
  { name: "Imagens", value: 12.1, color: "bg-green-500", percentage: 51 },
  { name: "Vídeos", value: 2.8, color: "bg-purple-500", percentage: 12 },
  { name: "Outros", value: 0.4, color: "bg-gray-500", percentage: 2 }
];

const activityData = [
  { date: "2024-03-15", uploads: 12, downloads: 45, shares: 3 },
  { date: "2024-03-14", uploads: 8, downloads: 32, shares: 5 },
  { date: "2024-03-13", uploads: 15, downloads: 28, shares: 2 },
  { date: "2024-03-12", uploads: 6, downloads: 18, shares: 1 },
  { date: "2024-03-11", uploads: 22, downloads: 67, shares: 8 },
  { date: "2024-03-10", uploads: 4, downloads: 23, shares: 4 },
  { date: "2024-03-09", uploads: 18, downloads: 41, shares: 6 }
];

const topFiles = [
  { name: "Apresentacao_Cliente.pdf", views: 156, downloads: 23, size: "2.3 MB" },
  { name: "Manual_Usuario.docx", views: 89, downloads: 45, size: "1.8 MB" },
  { name: "Video_Tutorial.mp4", views: 234, downloads: 12, size: "145 MB" },
  { name: "Planilha_Vendas.xlsx", views: 67, downloads: 34, size: "890 KB" },
  { name: "Fotos_Produto.zip", views: 45, downloads: 18, size: "23 MB" }
];

const deviceStats = [
  { device: "Desktop", sessions: 145, percentage: 65, icon: Monitor },
  { device: "Mobile", sessions: 78, percentage: 35, icon: Smartphone }
];

const locationStats = [
  { country: "Brasil", sessions: 180, percentage: 80 },
  { country: "Estados Unidos", sessions: 25, percentage: 11 },
  { country: "Portugal", sessions: 12, percentage: 5 },
  { country: "Outros", sessions: 8, percentage: 4 }
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Estatísticas</h1>
            <p className="text-muted-foreground mt-1">
              Análise detalhada do uso dos seus arquivos e atividades
            </p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Select defaultValue="7days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 dias</SelectItem>
                <SelectItem value="30days">30 dias</SelectItem>
                <SelectItem value="90days">90 dias</SelectItem>
                <SelectItem value="1year">1 ano</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Views
              </CardTitle>
              <Eye className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.5% desde último mês
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Downloads
              </CardTitle>
              <Download className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.2% desde último mês
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Compartilhamentos
              </CardTitle>
              <Share2 className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingDown className="w-3 h-3 mr-1" />
                -3.1% desde último mês
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Usuários Únicos
              </CardTitle>
              <Users className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.7% desde último mês
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="storage" className="space-y-6">
          <TabsList>
            <TabsTrigger value="storage">Armazenamento</TabsTrigger>
            <TabsTrigger value="activity">Atividade</TabsTrigger>
            <TabsTrigger value="files">Arquivos</TabsTrigger>
            <TabsTrigger value="access">Acesso</TabsTrigger>
          </TabsList>

          {/* Storage Analytics */}
          <TabsContent value="storage">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HardDrive className="w-5 h-5 mr-2" />
                    Uso por Tipo de Arquivo
                  </CardTitle>
                  <CardDescription>
                    Distribuição do armazenamento por categoria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {storageData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.name}</span>
                          <span>{item.value} GB ({item.percentage}%)</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Crescimento do Armazenamento
                  </CardTitle>
                  <CardDescription>
                    Evolução do uso de espaço nos últimos 30 dias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">23.5 GB</div>
                      <div className="text-sm text-muted-foreground">Usado de 50 GB</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Crescimento mensal</span>
                        <span className="font-medium text-green-600">+2.1 GB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Média diária</span>
                        <span className="font-medium">~70 MB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estimativa para atingir limite</span>
                        <span className="font-medium text-orange-600">12 meses</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Analytics */}
          <TabsContent value="activity">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Atividade dos Últimos 7 Dias
                  </CardTitle>
                  <CardDescription>
                    Uploads, downloads e compartilhamentos por dia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activityData.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">
                            {new Date(day.date).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <Upload className="w-3 h-3 text-blue-500" />
                            <span>{day.uploads} uploads</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3 text-green-500" />
                            <span>{day.downloads} downloads</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Share2 className="w-3 h-3 text-purple-500" />
                            <span>{day.shares} shares</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Files Analytics */}
          <TabsContent value="files">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Arquivos Mais Acessados
                </CardTitle>
                <CardDescription>
                  Seus arquivos com maior número de visualizações e downloads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-medium">{file.views}</div>
                          <div className="text-muted-foreground">views</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{file.downloads}</div>
                          <div className="text-muted-foreground">downloads</div>
                        </div>
                        <Badge variant="secondary">
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Access Analytics */}
          <TabsContent value="access">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Acesso por Dispositivo
                  </CardTitle>
                  <CardDescription>
                    Distribuição de acessos por tipo de dispositivo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceStats.map((device, index) => {
                      const DeviceIcon = device.icon;
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <DeviceIcon className="w-5 h-5 text-muted-foreground" />
                            <span className="font-medium">{device.device}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-20 bg-secondary rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${device.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-16 text-right">
                              {device.sessions} ({device.percentage}%)
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Acesso por Localização
                  </CardTitle>
                  <CardDescription>
                    Origem geográfica dos acessos aos seus arquivos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {locationStats.map((location, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{location.country}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-20 bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${location.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-16 text-right">
                            {location.sessions} ({location.percentage}%)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Performance Insights */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-blue-900">Insights de Performance</h3>
                <div className="space-y-2 text-blue-700 text-sm">
                  <p>• Seus arquivos de apresentação têm 3x mais visualizações que a média</p>
                  <p>• Horário de pico de acesso: 14h às 17h (horário de Brasília)</p>
                  <p>• 85% dos downloads acontecem via desktop</p>
                  <p>• Tempo médio de visualização: 2min 34s</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
