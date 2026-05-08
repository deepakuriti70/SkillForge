"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: May 1, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files stored on your device when you visit a website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  understanding how you use our platform, and improving our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the platform to function properly. They enable basic 
                  features like page navigation, secure login, and access to secure areas. The platform 
                  cannot function properly without these cookies.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies help us understand how visitors interact with our platform by collecting 
                  information about pages visited, time spent, and any errors encountered. This data 
                  helps us improve the platform&apos;s performance.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies remember your preferences and settings, such as language preferences, 
                  theme settings, and other customizations, to provide a more personalized experience.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  We use analytics cookies to understand usage patterns and improve our services. 
                  These may include third-party cookies from services like Google Analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Our cookie preferences: Use our cookie settings panel to manage your preferences</li>
                  <li>Third-party opt-out: Visit third-party websites to opt out of their cookies</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Note that blocking certain cookies may impact your experience on our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  Some cookies on our platform are placed by third-party services that appear on our pages. 
                  We do not control these cookies and recommend reviewing the privacy policies of these 
                  third parties for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please contact us at{" "}
                  <a href="mailto:privacy@skillforge.app" className="text-primary hover:underline">
                    privacy@skillforge.app
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
