"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

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

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user for demo purposes
const MOCK_USER: User = {
  id: "user_1",
  email: "demo@skillforge.app",
  name: "Alex Morgan",
  role: "user",
  careerPath: "Full-Stack Developer",
  company: "TechVenture Inc.",
  level: 5,
  xp: 2450,
  createdAt: new Date("2024-01-15"),
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("skillforge_user")
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser)
          setUser({
            ...parsed,
            createdAt: new Date(parsed.createdAt),
          })
        } catch {
          localStorage.removeItem("skillforge_user")
        }
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // For demo, accept any credentials
    const loggedInUser = {
      ...MOCK_USER,
      email,
      name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    }
    
    localStorage.setItem("skillforge_user", JSON.stringify(loggedInUser))
    setUser(loggedInUser)
    setIsLoading(false)
    router.push("/dashboard")
  }, [router])

  const signup = useCallback(async (email: string, password: string, name: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      role: "user",
      level: 1,
      xp: 0,
      createdAt: new Date(),
    }
    
    localStorage.setItem("skillforge_user", JSON.stringify(newUser))
    setUser(newUser)
    setIsLoading(false)
    router.push("/onboarding")
  }, [router])

  const logout = useCallback(() => {
    localStorage.removeItem("skillforge_user")
    setUser(null)
    router.push("/")
  }, [router])

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev
      const updated = { ...prev, ...updates }
      localStorage.setItem("skillforge_user", JSON.stringify(updated))
      return updated
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
