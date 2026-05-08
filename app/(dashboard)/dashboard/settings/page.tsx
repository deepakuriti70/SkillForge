"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useAuth } from "@/lib/auth-context"
import { 
  User, Bell, Shield, Palette, CreditCard, 
  LogOut, Save, Camera, Mail, Lock 
} from "lucide-react"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "billing", label: "Billing", icon: CreditCard },
]

export default function SettingsPage() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("profile")
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    tasks: true,
    achievements: true,
    newsletter: false,
  })

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                activeTab === tab.id
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-secondary/50 text-muted-foreground"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </button>
          ))}
          
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-500 hover:bg-red-500/10 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>

        {/* Content */}
        <div className="glass-card p-6 rounded-2xl">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Profile Settings</h2>
                <p className="text-sm text-muted-foreground">Update your personal information</p>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-2xl font-bold text-primary">
                    {user?.name?.split(" ").map(n => n[0]).join("") || "U"}
                  </div>
                  <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <Button variant="outline" size="sm">Upload Photo</Button>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user?.name} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="career">Career Path</Label>
                  <Input id="career" defaultValue={user?.careerPath || ""} className="mt-1.5" disabled />
                </div>
                <div>
                  <Label htmlFor="company">Virtual Company</Label>
                  <Input id="company" defaultValue={user?.company || ""} className="mt-1.5" disabled />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <Button className="gradient-primary border-0">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Notification Preferences</h2>
                <p className="text-sm text-muted-foreground">Choose how you want to be notified</p>
              </div>

              <div className="space-y-4">
                {[
                  { key: "email", label: "Email Notifications", description: "Receive updates via email" },
                  { key: "push", label: "Push Notifications", description: "Browser push notifications" },
                  { key: "tasks", label: "Task Reminders", description: "Get reminded about pending tasks" },
                  { key: "achievements", label: "Achievement Alerts", description: "Celebrate your wins" },
                  { key: "newsletter", label: "Weekly Newsletter", description: "Tips and platform updates" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <Switch 
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, [item.key]: checked }))}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Security Settings</h2>
                <p className="text-sm text-muted-foreground">Keep your account secure</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Password</div>
                        <div className="text-sm text-muted-foreground">Last changed 30 days ago</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500">Not enabled</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Recovery Email</div>
                        <div className="text-sm text-muted-foreground">{user?.email}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Appearance</h2>
                <p className="text-sm text-muted-foreground">Customize how SkillForge looks</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <div className="font-medium mb-3">Theme</div>
                  <div className="flex gap-3">
                    <button className="flex-1 p-4 rounded-xl bg-background border-2 border-primary text-center">
                      <div className="font-medium">Dark</div>
                      <div className="text-xs text-muted-foreground">Current</div>
                    </button>
                    <button className="flex-1 p-4 rounded-xl bg-white text-black text-center border-2 border-transparent">
                      <div className="font-medium">Light</div>
                      <div className="text-xs text-gray-500">Coming soon</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Billing & Plan</h2>
                <p className="text-sm text-muted-foreground">Manage your subscription</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge className="bg-primary text-primary-foreground mb-2">Pro Plan</Badge>
                    <h3 className="text-2xl font-bold">$19/month</h3>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your next billing date is June 1, 2026
                </p>
              </div>

              <div className="p-4 rounded-xl bg-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Payment Method</div>
                      <div className="text-sm text-muted-foreground">Visa ending in 4242</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
