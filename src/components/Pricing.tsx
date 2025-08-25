// Pricing Component
// Generated: 2025-08-25T08:43:52.409Z
// Template: pricing-c001
// Context: Photography Masterclass
// Position: pages.0.sections.6

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Foundation",
      description: "Perfect for photography beginners starting their journey",
      price: "Free",
      period: "",
      badge: null,
      features: [
        "3 core technique modules",
        "Basic composition guides",
        "Community forum access",
        "Mobile-friendly lessons",
        "Progress tracking"
      ],
      cta: "Start Learning",
      popular: false
    },
    {
      name: "Masterclass Pro",
      description: "Complete course for serious photography enthusiasts",
      price: "$197",
      period: "/lifetime",
      badge: "Most Popular",
      features: [
        "All 12 comprehensive modules",
        "Premium video tutorials",
        "Direct instructor feedback",
        "RAW editing masterclasses",
        "Advanced lighting techniques",
        "Portfolio review sessions",
        "Private student community",
        "Bonus gear recommendations"
      ],
      cta: "Enroll Now",
      popular: true
    },
    {
      name: "VIP Mentorship",
      description: "For aspiring professionals seeking personalized guidance",
      price: "$497",
      period: "",
      badge: "1-on-1 Coaching",
      features: [
        "Everything in Masterclass Pro",
        "Monthly 1-on-1 video calls",
        "Personal project critiques",
        "Business strategy guidance",
        "Client acquisition techniques",
        "Pricing & contract templates",
        "Direct WhatsApp support",
        "Lifetime course updates"
      ],
      cta: "Apply for VIP",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Course Options
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Master Photography
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Way
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join thousands of students who've transformed their photography skills with Jake Wilson's 
            proven teaching methods. Choose your learning path today.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              One-Time Payment
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Payment Plan
              <Badge variant="secondary" className="ml-2 text-xs">
                3 x $67
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Masterclass Pro" && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day money-back guarantee • Instant access
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Questions about the course?
          </h3>
          <p className="text-muted-foreground mb-6">
            Not sure which option is right for you? Jake Wilson personally reviews every inquiry 
            and can help you choose the perfect learning path for your photography goals.
          </p>
          <Button variant="outline" size="lg">
            Chat with Jake
          </Button>
        </div>
      </div>
    </section>
  )
}