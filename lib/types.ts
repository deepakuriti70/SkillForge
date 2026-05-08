// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "user" | "admin"
  careerPath?: string
  company?: string
  level: number
  xp: number
  createdAt: Date
}

// Career Path types
export interface CareerPath {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
  skills: string[]
  averageSalary: string
  growthRate: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

// Company types
export interface Company {
  id: string
  name: string
  description: string
  industry: string
  size: "startup" | "small" | "medium" | "enterprise"
  culture: string[]
  logo?: string
  projects: Project[]
  team: TeamMember[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
  isAI: boolean
  personality?: string
}

// Project types
export interface Project {
  id: string
  name: string
  description: string
  status: "not_started" | "in_progress" | "completed"
  progress: number
  tasks: Task[]
  dueDate: Date
  teamMembers: string[]
}

// Task types
export interface Task {
  id: string
  title: string
  description: string
  type: "coding" | "design" | "documentation" | "review" | "meeting"
  priority: "low" | "medium" | "high"
  status: "todo" | "in_progress" | "review" | "completed"
  projectId: string
  assigneeId: string
  dueDate: Date
  estimatedHours: number
  actualHours?: number
  xpReward: number
  skills: string[]
}

// Interview types
export interface Interview {
  id: string
  type: "behavioral" | "technical" | "system_design" | "coding"
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  duration: number // minutes
  questions: InterviewQuestion[]
  completed: boolean
  score?: number
  feedback?: string
}

export interface InterviewQuestion {
  id: string
  question: string
  type: "open" | "coding" | "multiple_choice"
  expectedAnswer?: string
  hints?: string[]
}

// Achievement types
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  xpReward: number
  unlockedAt?: Date
  category: "tasks" | "coding" | "interviews" | "streaks" | "social"
}

// Message types (for AI Mentor)
export interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
}

// Notification types
export interface Notification {
  id: string
  type: "task" | "achievement" | "mentor" | "team" | "system"
  title: string
  message: string
  read: boolean
  createdAt: Date
  actionUrl?: string
}

// Leaderboard types
export interface LeaderboardEntry {
  userId: string
  name: string
  avatar?: string
  xp: number
  level: number
  rank: number
  weeklyXp: number
  achievements: number
}

// Activity types
export interface Activity {
  id: string
  userId: string
  type: "task_completed" | "achievement_unlocked" | "project_joined" | "level_up" | "interview_completed"
  title: string
  description?: string
  xpEarned?: number
  timestamp: Date
}
