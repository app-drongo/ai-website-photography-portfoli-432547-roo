// Features Component
// Generated: 2025-08-25T08:43:52.409Z
// Template: features-c001
// Context: Photography Masterclass
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Skill Building",
      description: "Fast-track your photography journey with proven techniques that deliver immediate results.",
      badge: "Learning"
    },
    {
      icon: Shield,
      title: "Professional Quality",
      description: "Master industry-standard techniques used by top photographers worldwide.",
      badge: "Quality"
    },
    {
      icon: Smartphone,
      title: "Any Camera Works",
      description: "Learn with DSLR, mirrorless, or even smartphone - techniques work on all devices.",
      badge: "Flexibility"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join thousands of photographers sharing work and supporting each other's growth.",
      badge: "Community"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your improvement with structured assignments and milestone achievements.",
      badge: "Progress"
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Develop your unique artistic style and learn to see the world like a pro photographer.",
      badge: "Creativity"
    },
    {
      icon: Code2,
      title: "Technical Mastery",
      description: "Complete understanding of camera settings, lighting, and post-processing workflows.",
      badge: "Technical"
    },
    {
      icon: Headphones,
      title: "Expert Mentorship",
      description: "Direct access to Jake Wilson and personalized feedback on your photography work.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Lifetime Access",
      description: "Keep your course materials forever with free updates and new content additions.",
      badge: "Access"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Course Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Master Photography
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive features designed to transform you from a beginner into a confident, 
            skilled photographer ready for any creative challenge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to start your photography transformation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Enroll in Masterclass
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Course Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}