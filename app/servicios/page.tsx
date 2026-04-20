import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Brain, Heart, Users, TrendingUp, Sparkles, Compass, RefreshCw, ArrowRight } from "lucide-react"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Services Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Servicios de Coaching Ontológico
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Acompañamiento profesional para tu crecimiento personal y transformación
            </p>
          </div>

          {/* Highlight Image */}
          <div className="flex justify-center mb-8 mt-6">
            <div className="w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="/coach.jpeg"
                alt="Coach"
                width={1200}
                height={700}
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[520px] object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Supera tus miedos",
                description:
                  "Identifica y transforma los miedos que te limitan para vivir con mayor libertad y confianza.",
              },
              {
                icon: Brain,
                title: "Gestiona el estrés laboral",
                description:
                  "Desarrolla herramientas para manejar la presión del trabajo y encontrar equilibrio en tu vida.",
              },
              {
                icon: Heart,
                title: "Fortalece tu autoestima",
                description: "Reconecta con tu valor personal y construye una relación más amorosa contigo mismo/a.",
              },
              {
                icon: Users,
                title: "Mejora tu vínculo de pareja",
                description:
                  "Aprende a comunicarte efectivamente y construye relaciones más profundas y satisfactorias.",
              },
              {
                icon: TrendingUp,
                title: "Aumenta tus ganancias",
                description: "Desarrolla la mentalidad y estrategias necesarias para hacer crecer tu emprendimiento.",
              },
              {
                icon: RefreshCw,
                title: "Volver a creer en ti",
                description:
                  "Sana tu pasado, comprende el origen de tus miedos y reconstruye la confianza para construir un futuro con más seguridad.",
              },
              {
                icon: Compass,
                title: "Transformación integral",
                description:
                  "Sesiones personalizadas enfocadas en tus necesidades específicas de crecimiento personal.",
              },
              {
                icon: Sparkles,
                title: "Asesoramiento de imagen",
                description:
                  "Descubre tu estilo personal y aprende a proyectar tu mejor versión a través del cuidado de tu imagen y bienestar.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg h-full"
              >
                <CardContent className="p-8 flex flex-col h-full items-center text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Button variant="outline" className="w-full group bg-transparent mt-auto" asChild>
                    <a href="/contacto">
                      Agenda tu sesión
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
