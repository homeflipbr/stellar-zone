import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
  Settings,
  User,
  Shield,
  Bell,
  Smartphone,
  Cloud,
  HardDrive,
  Globe,
  Monitor,
  Moon,
  Sun,
  Download,
  Upload,
  Wifi,
  Lock,
  Key,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Languages,
  Zap,
  RefreshCw,
  Trash2,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    name: "Mike Feldman",
    email: "mike.feldman@example.com",
    phone: "+55 11 99999-9999",
    location: "São Paulo, Brasil",
    timezone: "America/Sao_Paulo",
    language: "pt-BR"
  });

  const [syncSettings, setSyncSettings] = useState({
    autoSync: true,
    wifiOnly: true,
    lowPowerMode: false,
    syncFrequency: "realtime",
    deviceBackup: true
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    downloadAlerts: true,
    securityAlerts: true,
    storageAlerts: false,
    weeklyReports: true
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: false,
    analyticsSharing: true,
    marketingEmails: false,
    thirdPartyIntegrations: true
  });

  const handleProfileUpdate = () => {
    // Handle profile update logic
    console.log("Updating profile:", profileData);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie suas preferências, segurança e configurações da conta
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="sync">Sincronização</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="billing">Cobrança</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Informações Pessoais
                  </CardTitle>
                  <CardDescription>
                    Atualize suas informações de perfil e preferências
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <Select value={profileData.timezone} onValueChange={(value) => setProfileData({...profileData, timezone: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Sao_Paulo">Brasília (GMT-3)</SelectItem>
                          <SelectItem value="America/New_York">Nova York (GMT-4)</SelectItem>
                          <SelectItem value="Europe/London">Londres (GMT+0)</SelectItem>
                          <SelectItem value="Asia/Tokyo">Tóquio (GMT+9)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Idioma</Label>
                      <Select value={profileData.language} onValueChange={(value) => setProfileData({...profileData, language: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="es-ES">Español</SelectItem>
                          <SelectItem value="fr-FR">Français</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleProfileUpdate}>
                    Salvar Alterações
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Aparência
                  </CardTitle>
                  <CardDescription>
                    Personalize a interface do LYSBOX
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Moon className="w-4 h-4" />
                      <Label>Modo Escuro</Label>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <Label>Animações Reduzidas</Label>
                    </div>
                    <Switch />
                  </div>

                  <div>
                    <Label>Densidade da Interface</Label>
                    <Select defaultValue="normal">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compacta</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="comfortable">Confortável</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sync Settings */}
          <TabsContent value="sync">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Sincronização Automática
                  </CardTitle>
                  <CardDescription>
                    Configure como seus arquivos são sincronizados entre dispositivos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4" />
                      <div>
                        <Label>Sincronização Automática</Label>
                        <p className="text-sm text-muted-foreground">Mantenha arquivos atualizados automaticamente</p>
                      </div>
                    </div>
                    <Switch 
                      checked={syncSettings.autoSync}
                      onCheckedChange={(checked) => setSyncSettings({...syncSettings, autoSync: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4" />
                      <div>
                        <Label>Apenas Wi-Fi</Label>
                        <p className="text-sm text-muted-foreground">Sincronizar apenas quando conectado ao Wi-Fi</p>
                      </div>
                    </div>
                    <Switch 
                      checked={syncSettings.wifiOnly}
                      onCheckedChange={(checked) => setSyncSettings({...syncSettings, wifiOnly: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <div>
                        <Label>Backup de Dispositivo</Label>
                        <p className="text-sm text-muted-foreground">Fazer backup automático de fotos e documentos</p>
                      </div>
                    </div>
                    <Switch 
                      checked={syncSettings.deviceBackup}
                      onCheckedChange={(checked) => setSyncSettings({...syncSettings, deviceBackup: checked})}
                    />
                  </div>

                  <div>
                    <Label>Frequência de Sincronização</Label>
                    <Select value={syncSettings.syncFrequency} onValueChange={(value) => setSyncSettings({...syncSettings, syncFrequency: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Tempo Real</SelectItem>
                        <SelectItem value="every5min">A cada 5 minutos</SelectItem>
                        <SelectItem value="every15min">A cada 15 minutos</SelectItem>
                        <SelectItem value="hourly">A cada hora</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HardDrive className="w-5 h-5 mr-2" />
                    Gerenciamento de Espaço
                  </CardTitle>
                  <CardDescription>
                    Configure como o espaço local é gerenciado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Limpeza Automática</Label>
                      <p className="text-sm text-muted-foreground">Remove arquivos antigos automaticamente quando o espaço fica baixo</p>
                    </div>
                    <Switch />
                  </div>

                  <div>
                    <Label>Manter arquivos localmente por</Label>
                    <Select defaultValue="30days">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">7 dias</SelectItem>
                        <SelectItem value="30days">30 dias</SelectItem>
                        <SelectItem value="90days">90 dias</SelectItem>
                        <SelectItem value="never">Sempre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Preferências de Notificação
                </CardTitle>
                <CardDescription>
                  Escolha quais notificações você deseja receber
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <div>
                        <Label>Notificações por Email</Label>
                        <p className="text-sm text-muted-foreground">Receba updates importantes por email</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <div>
                        <Label>Notificações Push</Label>
                        <p className="text-sm text-muted-foreground">Receba notificações em tempo real no dispositivo</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <div>
                        <Label>Alertas de Download</Label>
                        <p className="text-sm text-muted-foreground">Quando alguém baixa seus arquivos compartilhados</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.downloadAlerts}
                      onCheckedChange={(checked) => setNotifications({...notifications, downloadAlerts: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <div>
                        <Label>Alertas de Segurança</Label>
                        <p className="text-sm text-muted-foreground">Notificações sobre atividades suspeitas</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.securityAlerts}
                      onCheckedChange={(checked) => setNotifications({...notifications, securityAlerts: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-4 h-4" />
                      <div>
                        <Label>Alertas de Armazenamento</Label>
                        <p className="text-sm text-muted-foreground">Quando o espaço está ficando baixo</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.storageAlerts}
                      onCheckedChange={(checked) => setNotifications({...notifications, storageAlerts: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <div>
                        <Label>Relatórios Semanais</Label>
                        <p className="text-sm text-muted-foreground">Resumo semanal de atividades</p>
                      </div>
                    </div>
                    <Switch 
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Autenticação
                  </CardTitle>
                  <CardDescription>
                    Gerencie suas opções de segurança e autenticação
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Autenticação em Duas Etapas (2FA)</Label>
                      <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                    </div>
                    <Button variant="outline">
                      Configurar
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Alterar Senha</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input type="password" placeholder="Senha atual" />
                      <Input type="password" placeholder="Nova senha" />
                    </div>
                    <Input type="password" placeholder="Confirmar nova senha" />
                    <Button>Alterar Senha</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="w-5 h-5 mr-2" />
                    Sessões Ativas
                  </CardTitle>
                  <CardDescription>
                    Gerencie onde você está conectado ao LYSBOX
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="font-medium">Chrome - Windows</p>
                          <p className="text-sm text-muted-foreground">São Paulo, Brasil • Ativo agora</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Atual</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium">App Mobile - iOS</p>
                          <p className="text-sm text-muted-foreground">São Paulo, Brasil • 2 horas atrás</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Desconectar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Plano Atual
                  </CardTitle>
                  <CardDescription>
                    Gerencie sua assinatura e cobrança
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold">Plano Gratuito</h3>
                        <Badge variant="secondary">Atual</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">50 GB de armazenamento</p>
                      <p className="text-sm text-muted-foreground">Recursos básicos incluídos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">R$ 0</p>
                      <p className="text-sm text-muted-foreground">/mês</p>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/dashboard/settings/upgrade">
                      Fazer Upgrade para Pro
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uso do Armazenamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Usado: 23.5 GB</span>
                      <span>Total: 50 GB</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Você está usando 47% do seu armazenamento
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-destructive">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Zona de Perigo
                  </CardTitle>
                  <CardDescription>
                    Ações irreversíveis relacionadas à sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Excluir Conta</Label>
                      <p className="text-sm text-muted-foreground">Exclua permanentemente sua conta e todos os dados</p>
                    </div>
                    <Button variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
