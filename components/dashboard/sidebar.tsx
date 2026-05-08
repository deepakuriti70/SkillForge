"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Zap,
  LayoutDashboard,
  Briefcase,
  Code2,
  MessageSquare,
  Users,
  Trophy,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Brain,
  Target,
  Folder,
} from "lucide-react"

const navigation = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "My Company", href: "/dashboard/company", icon: Briefcase },
      { name: "Tasks", href: "/dashboard/tasks", icon: Target, badge: "3" },
      { name: "Projects", href: "/dashboard/projects", icon: Folder },
    ],
  },
  {
    title: "Learn",
    items: [
      { name: "Code Editor", href: "/dashboard/code", icon: Code2 },
      { name: "AI Mentor", href: "/dashboard/mentor", icon: Brain },
      { name: "Interviews", href: "/dashboard/interviews", icon: MessageSquare },
      { name: "Resources", href: "/dashboard/resources", icon: BookOpen },
    ],
  },
  {
    title: "Community",
    items: [
      { name: "Team", href: "/dashboard/team", icon: Users },
      { name: "Leaderboard", href: "/dashboard/leaderboard", icon: Trophy },
    ],
  },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            {!collapsed && (
              <span className="text-lg font-bold tracking-tight">
                Skill<span className="text-gradient">Forge</span>
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={onToggle}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="flex flex-col gap-6 px-3">
            {navigation.map((group) => (
              <div key={group.title}>
                {!collapsed && (
                  <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </h3>
                )}
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href
                    const NavLink = (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-sidebar-primary")} />
                        {!collapsed && (
                          <>
                            <span className="flex-1">{item.name}</span>
                            {item.badge && (
                              <Badge 
                                variant="secondary" 
                                className="h-5 min-w-5 px-1.5 text-xs bg-primary/20 text-primary"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Link>
                    )

                    if (collapsed) {
                      return (
                        <Tooltip key={item.name}>
                          <TooltipTrigger asChild>
                            {NavLink}
                          </TooltipTrigger>
                          <TooltipContent side="right" className="flex items-center gap-2">
                            {item.name}
                            {item.badge && (
                              <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                                {item.badge}
                              </Badge>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      )
                    }

                    return NavLink
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="p-3 border-t border-sidebar-border">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors",
                  pathname === "/dashboard/settings" && "bg-sidebar-accent text-sidebar-primary"
                )}
              >
                <Settings className="h-5 w-5 shrink-0" />
                {!collapsed && <span>Settings</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">Settings</TooltipContent>
            )}
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  )
}
