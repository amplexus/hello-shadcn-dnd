import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import { ReactNode } from "react"

const SUBSCRIPTION_TIERS = [
  {
    name: "Free",
    href: "#",
    price: "Free",
    priceInCents: 0,
    stripePriceId: "",
    description: "Best for personal use and for teams up to 10 users.",
    features: [
      "Up to 2 users",
      "Up to 2 GB storage",
      "Basic Support",
    ],
  },
  {
    name: "Basic",
    href: "#",
    price: "$19/mo",
    priceInCents: 1900,
    stripePriceId: "",
    description: "Best for medium scale businesses requiring some technical help.",
    features: [
      "Up to 10 users",
      "Up to 10 GB storage",
      "Business Hours Support",
    ],
  },
  {
    name: "Pro",
    href: "#",
    price: "$49/mo",
    priceInCents: 4900,
    stripePriceId: "",
    description: "Best for medium scale businesses requiring some technical help.",
    features: [
      "Up to 100 users",
      "Up to 20 GB storage",
      "Extended Hours Support",
    ],
  },
  {
    name: "Corporate",
    href: "#",
    price: "$99/mo",
    priceInCents: 9900,
    stripePriceId: "",
    description: "Perfect for large enterprise customers.",
    features: [
      "Unlimited users",
      "50 GB storage",
      "24/7 Support",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="bg-muted/60 px-8 py-16">
      <h2 className="text-4xl text-center text-balance font-semibold mb-8">
        Enhance Your Productivity Today
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
        {SUBSCRIPTION_TIERS.map(tier => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </div>
  )
}

function PricingCard({
  name,
  priceInCents,
  description,
  features,
}: (typeof SUBSCRIPTION_TIERS)[number]) {
  const isMostPopular = name === "Standard"

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className={cn("text-accent-foreground font-semibold mb-8")}>{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="text-lg w-full rounded-lg"
        // variant={isMostPopular ? "accent" : "default"}
        >
          Get Started
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        {features.map(feature => (
          <Feature key={feature} className="font-bold">{feature}</Feature>
        ))}
      </CardFooter>
    </Card>
  )
}

function Feature({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-5 stroke-foreground bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  )
}
