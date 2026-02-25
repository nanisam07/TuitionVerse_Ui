"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { dancingscript} from "@/app/fonts"

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: isYearly ? "999" : "99",
      desc: "Perfect for exploring the platform and finding your first tutor.",
      features: ["3 tutor matches", "Basic support", "Standard response time", "Access to resource library"],
      cta: "Start for free",
      popular: false,
    },
    {
      name: "Pro",
      price: isYearly ? "2999" : "299",
      desc: "The gold standard for dedicated students and busy parents.",
      features: [
        "Unlimited tutor matches",
        "Priority support",
        "Verified top-tier tutors",
        "Faster response time (2h)",
        "Progress tracking tools",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Elite",
      price: isYearly ? "5999" : "599",
      desc: "A white-glove experience for serious academic excellence.",
      features: [
        "Dedicated tutor manager",
        "Top 5% expert tutors",
        "Instant matching",
        "24/7 Premium support",
        "Customized learning plan",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24 sm:py-32">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 opacity-20 blur-[120px] [background:radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest"
          >
            Pricing
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Invest in your{" "}
              <span className={`${dancingscript.className} text-blue-600 font-normal block md:inline`}>
                child’s future
              </span>
            </h2>
          </motion.div>
          
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose a plan that scales with your learning goals. No hidden fees, ever.
          </p>
        </div>

        {/* Premium Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center rounded-full bg-slate-200/50 p-1 backdrop-blur-md">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "relative z-10 px-8 py-2 text-sm font-semibold transition-colors duration-300",
                !isYearly ? "text-white" : "text-slate-600"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "relative z-10 px-8 py-2 text-sm font-semibold transition-colors duration-300",
                isYearly ? "text-white" : "text-slate-600"
              )}
            >
              Yearly
              {isYearly && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg animate-bounce">
                  SAVE 20%
                </span>
              )}
            </button>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-blue-600 shadow-md"
              style={{ x: isYearly ? "100%" : "0%" }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative flex flex-col justify-between rounded-[2.5rem] p-8 transition-all duration-300",
                plan.popular 
                  ? "bg-white ring-2 ring-blue-600 shadow-[0_20px_50px_rgba(59,130,246,0.15)] scale-105 z-10" 
                  : "bg-white/70 border border-slate-200 backdrop-blur-sm hover:shadow-2xl"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-1.5 text-xs font-bold text-white shadow-xl">
                  <Sparkles size={14} />
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-extrabold tracking-tight text-slate-900">₹{plan.price}</span>
                  <span className="text-sm font-bold text-slate-500">/{isYearly ? 'yr' : 'mo'}</span>
                </div>
                
                <div className="mt-8 h-px bg-slate-100 w-full" />
                
                <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <div className="flex-none rounded-full bg-blue-50 p-1">
                        <Check className="h-4 w-4 text-blue-600" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant={plan.popular ? "default" : "outline"}
                className={cn(
                  "mt-10 w-full rounded-2xl py-7 text-base font-bold transition-all",
                  plan.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" 
                    : "border-2 border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                )}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}