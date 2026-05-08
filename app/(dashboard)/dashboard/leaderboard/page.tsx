"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Trophy, Medal, Crown, TrendingUp, 
  TrendingDown, Minus, Zap, Target, Clock 
} from "lucide-react"

const leaderboard = [
  { rank: 1, name: "Jessica Park", avatar: "JP", xp: 15420, level: 15, change: "up", streak: 42 },
  { rank: 2, name: "Ryan Thompson", avatar: "RT", xp: 14850, level: 14, change: "up", streak: 38 },
  { rank: 3, name: "Maria Garcia", avatar: "MG", xp: 13200, level: 13, change: "down", streak: 25 },
  { rank: 4, name: "James Wilson", avatar: "JW", xp: 12100, level: 12, change: "same", streak: 30 },
  { rank: 5, name: "Alex Morgan", avatar: "AM", xp: 11500, level: 11, change: "up", streak: 15, isYou: true },
  { rank: 6, name: "Sarah Chen", avatar: "SC", xp: 10800, level: 11, change: "down", streak: 12 },
  { rank: 7, name: "Marcus Williams", avatar: "MW", xp: 9950, level: 10, change: "up", streak: 20 },
  { rank: 8, name: "Elena Rodriguez", avatar: "ER", xp: 9200, level: 10, change: "same", streak: 8 },
  { rank: 9, name: "David Kim", avatar: "DK", xp: 8500, level: 9, change: "down", streak: 5 },
  { rank: 10, name: "Priya Sharma", avatar: "PS", xp: 7800, level: 9, change: "up", streak: 18 },
]

const timeFilters = ["This Week", "This Month", "All Time"]

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />
  if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
  if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />
  return null
}

const getChangeIcon = (change: string) => {
  if (change === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
  if (change === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
  return <Minus className="h-4 w-4 text-muted-foreground" />
}

export default function LeaderboardPage() {
  const yourRank = leaderboard.find(l => l.isYou)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other learners</p>
        </div>
        <div className="flex gap-2">
          {timeFilters.map((filter, index) => (
            <Button
              key={filter}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "gradient-primary border-0" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Your Stats */}
      {yourRank && (
        <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                {yourRank.avatar}
              </div>
              <div>
                <h2 className="text-xl font-bold">Your Ranking</h2>
                <p className="text-muted-foreground">Keep pushing to climb higher!</p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-xl bg-background/50">
                <div className="text-2xl font-bold text-gradient">#{yourRank.rank}</div>
                <div className="text-xs text-muted-foreground">Rank</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-background/50">
                <div className="text-2xl font-bold">{yourRank.xp.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Total XP</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-background/50">
                <div className="text-2xl font-bold">{yourRank.level}</div>
                <div className="text-xs text-muted-foreground">Level</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-background/50">
                <div className="text-2xl font-bold">{yourRank.streak}</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top 3 */}
      <div className="grid sm:grid-cols-3 gap-4">
        {leaderboard.slice(0, 3).map((user, index) => (
          <div 
            key={user.rank}
            className={`glass-card p-6 rounded-2xl text-center ${
              index === 0 ? "sm:-mt-4 border-yellow-500/30" : ""
            } ${user.isYou ? "ring-2 ring-primary" : ""}`}
          >
            <div className="relative inline-block mb-4">
              <div className={`flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold mx-auto ${
                index === 0 ? "bg-yellow-500/20 text-yellow-500" :
                index === 1 ? "bg-gray-400/20 text-gray-400" :
                "bg-amber-600/20 text-amber-600"
              }`}>
                {user.avatar}
              </div>
              <div className="absolute -top-2 -right-2">
                {getRankIcon(user.rank)}
              </div>
            </div>
            <h3 className="font-semibold">
              {user.name}
              {user.isYou && <Badge variant="secondary" className="ml-2 text-xs">You</Badge>}
            </h3>
            <div className="text-2xl font-bold text-gradient mt-2">
              {user.xp.toLocaleString()} XP
            </div>
            <div className="text-sm text-muted-foreground">Level {user.level}</div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">Full Rankings</h2>
        </div>
        <div className="divide-y divide-border">
          {leaderboard.map((user) => (
            <div 
              key={user.rank}
              className={`p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors ${
                user.isYou ? "bg-primary/5" : ""
              }`}
            >
              {/* Rank */}
              <div className="w-12 text-center">
                {getRankIcon(user.rank) || (
                  <span className="text-lg font-bold text-muted-foreground">#{user.rank}</span>
                )}
              </div>

              {/* Change */}
              <div className="w-8">
                {getChangeIcon(user.change)}
              </div>

              {/* User */}
              <div className="flex items-center gap-3 flex-1">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  user.isYou ? "bg-primary/20 text-primary" : "bg-secondary text-foreground"
                }`}>
                  {user.avatar}
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {user.name}
                    {user.isYou && <Badge variant="secondary" className="text-xs">You</Badge>}
                  </div>
                  <div className="text-sm text-muted-foreground">Level {user.level}</div>
                </div>
              </div>

              {/* Streak */}
              <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-yellow-500" />
                {user.streak} day streak
              </div>

              {/* XP */}
              <div className="text-right">
                <div className="font-bold">{user.xp.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">XP</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
