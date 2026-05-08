"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Target, Clock, Zap, Filter, Plus, 
  CheckCircle2, Circle, AlertCircle, ArrowRight 
} from "lucide-react"

type TaskStatus = "todo" | "in-progress" | "completed"
type TaskPriority = "high" | "medium" | "low"

interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  xp: number
  dueDate: string
  category: string
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Implement user authentication flow",
    description: "Create login, signup, and password reset functionality using NextAuth.js",
    status: "in-progress",
    priority: "high",
    xp: 150,
    dueDate: "Today",
    category: "Backend",
  },
  {
    id: "2",
    title: "Design dashboard wireframes",
    description: "Create low-fidelity wireframes for the main dashboard views",
    status: "todo",
    priority: "high",
    xp: 100,
    dueDate: "Tomorrow",
    category: "Design",
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Document all REST endpoints with examples and error codes",
    status: "todo",
    priority: "medium",
    xp: 75,
    dueDate: "In 3 days",
    category: "Documentation",
  },
  {
    id: "4",
    title: "Code review: PR #142",
    description: "Review the payment integration pull request",
    status: "todo",
    priority: "medium",
    xp: 50,
    dueDate: "Today",
    category: "Review",
  },
  {
    id: "5",
    title: "Fix navigation bug on mobile",
    description: "Menu doesn't close properly on iOS Safari",
    status: "completed",
    priority: "low",
    xp: 25,
    dueDate: "Completed",
    category: "Bug Fix",
  },
  {
    id: "6",
    title: "Set up CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing and deployment",
    status: "completed",
    priority: "high",
    xp: 200,
    dueDate: "Completed",
    category: "DevOps",
  },
]

const statusConfig = {
  "todo": { label: "To Do", icon: Circle, color: "text-muted-foreground" },
  "in-progress": { label: "In Progress", icon: AlertCircle, color: "text-yellow-500" },
  "completed": { label: "Completed", icon: CheckCircle2, color: "text-green-500" },
}

const priorityConfig = {
  "high": { label: "High", color: "bg-red-500/10 text-red-500" },
  "medium": { label: "Medium", color: "bg-yellow-500/10 text-yellow-500" },
  "low": { label: "Low", color: "bg-green-500/10 text-green-500" },
}

export default function TasksPage() {
  const [filter, setFilter] = useState<TaskStatus | "all">("all")
  
  const filteredTasks = filter === "all" 
    ? tasks 
    : tasks.filter(t => t.status === filter)

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "completed").length,
    inProgress: tasks.filter(t => t.status === "in-progress").length,
    totalXP: tasks.filter(t => t.status === "completed").reduce((sum, t) => sum + t.xp, 0),
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage your assigned work and track progress</p>
        </div>
        <Button className="gradient-primary border-0">
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.completed}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalXP}</div>
              <div className="text-sm text-muted-foreground">XP Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Sprint Progress</h3>
          <span className="text-sm text-muted-foreground">
            {stats.completed} of {stats.total} tasks completed
          </span>
        </div>
        <Progress value={(stats.completed / stats.total) * 100} className="h-3" />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {(["all", "todo", "in-progress", "completed"] as const).map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
            className={filter === status ? "gradient-primary border-0" : ""}
          >
            {status === "all" ? "All Tasks" : statusConfig[status].label}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => {
          const StatusIcon = statusConfig[task.status].icon
          return (
            <div 
              key={task.id} 
              className="glass-card p-5 rounded-xl hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <StatusIcon className={`h-5 w-5 mt-0.5 shrink-0 ${statusConfig[task.status].color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        +{task.xp} XP
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-sm">
                    <Badge variant="secondary" className={priorityConfig[task.priority].color}>
                      {priorityConfig[task.priority].label}
                    </Badge>
                    <Badge variant="outline">{task.category}</Badge>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
