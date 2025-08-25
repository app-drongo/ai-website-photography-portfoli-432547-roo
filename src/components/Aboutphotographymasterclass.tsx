// Aboutphotographymasterclass Component
// Generated: 2025-08-25T08:43:52.409Z
// Template: about-c001
// Context: Photography Masterclass
// Position: pages.0.sections.3

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Aboutphotographymasterclass() {
  const values = [
    {
      icon: Target,
      title: "Vision Focused",
      description: "We're committed to helping every photographer develop their unique artistic vision and master the technical skills to bring it to life."
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "We constantly explore new techniques and approaches, bringing cutting-edge photography methods and artistic insights to our students."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Your creative growth is our passion. Every lesson is crafted with your artistic journey and professional goals at the center."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "From hobbyists to professionals, we're building a worldwide community of photographers who inspire and support each other."
    }
  ]

  const stats = [
    { value: "2018", label: "Founded", icon: Award },
    { value: "15K+", label: "Students Taught", icon: Users },
    { value: "98%", label: "Completion Rate", icon: TrendingUp },
    { value: "40+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Jake Wilson",
      role: "Lead Instructor & Founder",
      image: "JW",
      bio: "Award-winning photographer with 20+ years capturing stories across 6 continents."
    },
    {
      name: "Maria Santos",
      role: "Portrait Specialist", 
      image: "MS",
      bio: "Celebrity portrait photographer featured in Vogue and Harper's Bazaar."
    },
    {
      name: "Alex Thompson",
      role: "Landscape Expert",
      image: "AT",
      bio: "National Geographic contributor specializing in wilderness and adventure photography."
    },
    {
      name: "Sophie Chen",
      role: "Post-Processing Guru",
      image: "SC",
      bio: "Digital artist and retoucher working with top fashion and commercial brands."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About the Course
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Mastering the Art of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Visual Storytelling
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of photographers who have transformed their passion into professional skills 
            through our comprehensive masterclass designed for every level of experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Photography Masterclass was born from a simple belief: everyone has a unique perspective 
                worth capturing, and with the right guidance, anyone can master the art of photography.
              </p>
              <p>
                Founded by Jake Wilson in 2018, after years of teaching workshops worldwide, we recognized 
                the need for comprehensive, accessible photography education that goes beyond just technical skills.
              </p>
              <p>
                Today, we're proud to have guided over 15,000 students from complete beginners to 
                professional photographers, helping them discover their creative voice and build successful careers.
              </p>
            </div>
            <Button className="group">
              Explore Our Teaching Method
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Great photography isn't about expensive gear—it's about seeing the world with fresh eyes."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Jake Wilson, Lead Instructor</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h3>
            <p className="text-muted-foreground">
              The core principles that guide our curriculum and shape every photographer's journey with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Your Instructors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals who have mastered their craft and are passionate about sharing their knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View Instructor Portfolios
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "This masterclass didn't just teach me photography techniques—it transformed how I see the world. 
                I went from taking snapshots to creating art that tells stories."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  EM
                </div>
                <div className="text-left">
                  <div className="font-semibold">Emma Martinez</div>
                  <div className="text-sm text-muted-foreground">Wedding Photographer, Los Angeles</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}