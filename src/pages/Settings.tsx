
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe, Palette } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    maintenance: true,
    booking: true,
    fuel: false
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: "en",
    timezone: "UTC-5",
    currency: "USD",
    distanceUnit: "km",
    fuelUnit: "liters"
  });

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage your fleet management system preferences</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Navigation */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="w-5 h-5" />
                    <span>Settings Menu</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { icon: User, label: "Profile", active: true },
                    { icon: Bell, label: "Notifications", active: false },
                    { icon: Palette, label: "Appearance", active: false },
                    { icon: Shield, label: "Security", active: false },
                    { icon: Database, label: "System", active: false },
                    { icon: Globe, label: "Integrations", active: false }
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        item.active 
                          ? 'bg-fleet-blue-600 text-white' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Settings Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Profile Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Admin" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="User" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="admin@fleettrack.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 234-567-8900" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" defaultValue="FleetTrack Pro" />
                    </div>
                    <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                      Save Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={notifications.email}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, email: checked }))
                          }
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                        </div>
                        <Switch
                          id="sms-notifications"
                          checked={notifications.sms}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, sms: checked }))
                          }
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified about vehicle maintenance</p>
                        </div>
                        <Switch
                          id="maintenance-alerts"
                          checked={notifications.maintenance}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, maintenance: checked }))
                          }
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="booking-alerts">Booking Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified about new bookings</p>
                        </div>
                        <Switch
                          id="booking-alerts"
                          checked={notifications.booking}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, booking: checked }))
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* System Preferences */}
                <Card>
                  <CardHeader>
                    <CardTitle>System Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <select
                          id="language"
                          value={preferences.language}
                          onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <select
                          id="timezone"
                          value={preferences.timezone}
                          onChange={(e) => setPreferences(prev => ({ ...prev, timezone: e.target.value }))}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="UTC-5">UTC-5 (EST)</option>
                          <option value="UTC-6">UTC-6 (CST)</option>
                          <option value="UTC-7">UTC-7 (MST)</option>
                          <option value="UTC-8">UTC-8 (PST)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <select
                          id="currency"
                          value={preferences.currency}
                          onChange={(e) => setPreferences(prev => ({ ...prev, currency: e.target.value }))}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="CAD">CAD ($)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="distance">Distance Unit</Label>
                        <select
                          id="distance"
                          value={preferences.distanceUnit}
                          onChange={(e) => setPreferences(prev => ({ ...prev, distanceUnit: e.target.value }))}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="km">Kilometers</option>
                          <option value="miles">Miles</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Enable dark theme</p>
                      </div>
                      <Switch
                        id="dark-mode"
                        checked={preferences.darkMode}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, darkMode: checked }))
                        }
                      />
                    </div>

                    <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
