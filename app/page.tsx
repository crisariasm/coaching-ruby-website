import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance text-center lg:text-left">
                Transforma tu vida desde adentro hacia afuera
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Potencia tu bienestar emocional y tu imagen personal con acompañamiento profesional y productos de alta
                calidad. El cambio comienza cuando decides cuidarte, dentro y fuera.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="/servicios">
                    Conocer Servicios
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <a href="/contacto">
                    Contactar
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative px-4 sm:px-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="/image.jpeg"
                  alt="Coach Profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-2 sm:-left-6 right-2 sm:right-auto bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl sm:max-w-xs">
                <p className="font-serif text-2xl font-bold mb-1">Coach Ontológico</p>
                <p className="text-sm text-primary-foreground/80">Certificada en transformación personal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">Presentación</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Conoce cómo puedes alcanzar tu mejor versión con acompañamiento cercano y claro.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[360px] sm:max-w-sm lg:max-w-md aspect-[9/16] rounded-2xl overflow-hidden bg-muted shadow-2xl">
            <video src="/coach.mp4" controls playsInline className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
