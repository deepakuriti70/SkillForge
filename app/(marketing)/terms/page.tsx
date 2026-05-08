"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: May 1, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using SkillForge, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services. We reserve the 
                  right to modify these terms at any time, and your continued use of the platform 
                  constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  SkillForge provides an AI-powered career simulation platform that allows users to 
                  practice professional skills through virtual work environments, AI mentorship, 
                  mock interviews, and collaborative projects. Our services are designed for educational 
                  and professional development purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To use certain features of our platform, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the service for any illegal purpose</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the platform</li>
                  <li>Share your account credentials with others</li>
                  <li>Use the platform to spread malware or harmful content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of SkillForge, including but not limited to 
                  text, graphics, logos, and software, are owned by SkillForge and protected by 
                  intellectual property laws. You retain ownership of content you create on the platform, 
                  but grant us a license to use it for providing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payments</h2>
                <p className="text-muted-foreground">
                  Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel 
                  at any time, and cancellation will be effective at the end of the current billing period. 
                  Refunds are provided in accordance with our refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  SkillForge is provided &quot;as is&quot; without warranties of any kind. We shall not be liable 
                  for any indirect, incidental, special, or consequential damages arising from your use 
                  of the platform. Our total liability shall not exceed the amount paid by you in the 
                  preceding 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at{" "}
                  <a href="mailto:legal@skillforge.app" className="text-primary hover:underline">
                    legal@skillforge.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
