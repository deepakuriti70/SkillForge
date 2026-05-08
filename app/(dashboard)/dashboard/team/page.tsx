"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Users, Search, MessageSquare, Mail, 
  MoreHorizontal, UserPlus, Crown, Shield 
} from "lucide-react"

const team = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Engineering Manager",
    email: "sarah@techventure.com",
    avatar: "SC",
    status: "online",
    isLead: true,
    level: 12,
  },
  {
    id: "2",
    name: "Alex Morgan",
    role: "Full-Stack Developer",
    email: "alex@techventure.com",
    avatar: "AM",
    status: "online",
    isYou: true,
    level: 5,
  },
  {
    id: "3",
    name: "Marcus Williams",
    role: "Senior Developer",
    email: "marcus@techventure.com",
    avatar: "MW",
    status: "online",
    level: 9,
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Product Designer",
    email: "elena@techventure.com",
    avatar: "ER",
    status: "away",
    level: 7,
  },
  {
    id: "5",
    name: "David Kim",
    role: "DevOps Engineer",
    email: "david@techventure.com",
    avatar: "DK",
    status: "offline",
    level: 8,
  },
  {
    id: "6",
    name: "Priya Sharma",
    role: "QA Engineer",
    email: "priya@techventure.com",
    avatar: "PS",
    status: "online",
    level: 6,
  },
]

const statusColors = {
  online: "bg-green-500",
  away: "bg-yellow-500",
  offline: "bg-gray-500",
}

export default function TeamPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground">Collaborate with your virtual teammates</p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search team..." className="pl-10" />
          </div>
          <Button className="gradient-primary border-0 shrink-0">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite
          </Button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold">{team.length}</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{team.filter(t => t.status === "online").length}</div>
            <div className="text-sm text-muted-foreground">Online Now</div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
            <Crown className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">7.8</div>
            <div className="text-sm text-muted-foreground">Avg Level</div>
          </div>
        </div>
      </div>

      {/* Team List */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">All Members</h2>
        </div>
        <div className="divide-y divide-border">
          {team.map((member) => (
            <div 
              key={member.id}
              className="p-4 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium ${
                    member.isYou ? "bg-primary/20 text-primary" : "bg-secondary text-foreground"
                  }`}>
                    {member.avatar}
                  </div>
                  <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                    statusColors[member.status as keyof typeof statusColors]
                  }`} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium truncate">{member.name}</h3>
                    {member.isYou && (
                      <Badge variant="secondary" className="text-xs">You</Badge>
                    )}
                    {member.isLead && (
                      <Crown className="h-4 w-4 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{member.role}</span>
                    <span className="hidden sm:inline">Level {member.level}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="hidden sm:flex">
                    Lvl {member.level}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
