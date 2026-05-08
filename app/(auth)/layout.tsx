import Link from "next/link"
import { Zap } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-glow delay-1000" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Skill<span className="text-gradient">Forge</span>
            </span>
          </Link>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Experience your dream career{" "}
              <span className="text-gradient glow-text-primary">before you land it</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AI-powered career simulations with virtual companies, 
              real-world tasks, and personalized mentorship.
            </p>
          </div>

          {/* Testimonial */}
          <div className="glass rounded-xl p-6 max-w-md">
            <p className="text-muted-foreground mb-4">
              &quot;SkillForge helped me transition from marketing to product management. 
              The simulations felt so real that my actual job felt familiar from day one.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                JD
              </div>
              <div>
                <p className="font-medium text-sm">Jamie Davis</p>
                <p className="text-xs text-muted-foreground">Product Manager at Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Skill<span className="text-gradient">Forge</span>
              </span>
            </Link>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  )
}
