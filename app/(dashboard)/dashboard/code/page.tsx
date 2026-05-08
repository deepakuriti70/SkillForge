"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, Play, Save, Settings, FileCode, FolderTree, 
  Terminal, CheckCircle2, XCircle, Clock 
} from "lucide-react"

const files = [
  { name: "index.tsx", type: "file", language: "typescript" },
  { name: "styles.css", type: "file", language: "css" },
  { name: "utils.ts", type: "file", language: "typescript" },
  { name: "api.ts", type: "file", language: "typescript" },
]

const sampleCode = `import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return { user, loading, error };
}`

const testResults = [
  { name: "useUser returns user data", status: "passed", time: "12ms" },
  { name: "useUser handles loading state", status: "passed", time: "8ms" },
  { name: "useUser handles errors", status: "passed", time: "15ms" },
  { name: "useUser refetches on userId change", status: "failed", time: "23ms" },
]

export default function CodePage() {
  const [activeFile, setActiveFile] = useState("index.tsx")
  const [showTests, setShowTests] = useState(false)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Code Editor</h1>
          <p className="text-muted-foreground">Practice coding in a real development environment</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button size="sm" className="gradient-primary border-0" onClick={() => setShowTests(!showTests)}>
            <Play className="h-4 w-4 mr-2" />
            Run Tests
          </Button>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="grid lg:grid-cols-[250px_1fr] gap-4">
        {/* File Explorer */}
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <FolderTree className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Files</span>
          </div>
          <div className="space-y-1">
            {files.map((file) => (
              <button
                key={file.name}
                onClick={() => setActiveFile(file.name)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeFile === file.name
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-secondary/50 text-muted-foreground"
                }`}
              >
                <FileCode className="h-4 w-4" />
                {file.name}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="space-y-4">
          {/* Code Editor */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-sm font-medium ml-2">{activeFile}</span>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Code2 className="h-4 w-4" />
                Line 1, Col 1
              </div>
            </div>
            <div className="p-4 font-mono text-sm overflow-auto max-h-[400px] bg-[#0d1117]">
              <pre className="text-[#c9d1d9]">
                <code>{sampleCode}</code>
              </pre>
            </div>
          </div>

          {/* Test Results */}
          {showTests && (
            <div className="glass-card p-4 rounded-xl animate-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <span className="font-medium">Test Results</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-500">
                    {testResults.filter(t => t.status === "passed").length} passed
                  </span>
                  <span className="text-red-500">
                    {testResults.filter(t => t.status === "failed").length} failed
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {testResults.map((test, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                  >
                    {test.status === "passed" ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                    )}
                    <span className="flex-1 text-sm">{test.name}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {test.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Task Info */}
          <div className="glass-card p-4 rounded-xl">
            <div className="flex items-start gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Current Task
              </Badge>
              <div className="flex-1">
                <h3 className="font-semibold">Implement useUser Hook</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Create a custom React hook that fetches user data from the API. 
                  Handle loading and error states properly.
                </p>
              </div>
              <Badge variant="secondary">+100 XP</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
