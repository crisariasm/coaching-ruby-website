import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  message?: string
  className?: string
  variant?: "default" | "outline"
}

export function WhatsAppButton({
  message = "Hola, me interesa conocer más sobre tus servicios",
  className = "",
  variant = "default",
}: WhatsAppButtonProps) {
  const phoneNumber = "573113050042"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Button
      asChild
      variant={variant}
      className={`gap-2 ${variant === "default" ? "bg-[#25D366] hover:bg-[#20BA5A] text-white" : ""} ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5" />
        Contactar por WhatsApp
      </a>
    </Button>
  )
}
