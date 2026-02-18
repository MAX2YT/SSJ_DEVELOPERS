import * as React from "react"
import { motion, useInView } from "framer-motion"
import {
  HardHat,
  Building2,
  Zap,
  Shield,
  Hammer,
  Award,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

/*  Design tokens  */
const C = {
  gold:       "#C5A059",
  goldLight:  "#D4B06A",
  goldFaint:  "rgba(197,160,89,0.08)",
  goldFaint2: "rgba(197,160,89,0.14)",
  dark:       "#1C1917",
  darkMid:    "#292524",
  muted:      "#78716C",
  mutedLight: "#A8A29E",
  bg:         "#FAFAF9",
  bgWhite:    "#FFFFFF",
  border:     "rgba(28,25,23,0.08)",
  borderGold: "rgba(197,160,89,0.3)",
}

/*  Features  */
const FEATURES = [
  {
    icon: <HardHat size={22} />,
    title: "Expert Craftsmanship",
    description: "Skilled professionals delivering superior quality and meticulous attention to detail on every project.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Premium Materials",
    description: "Only CMDA-approved, premium-grade materials and proven construction techniques for lasting durability.",
  },
  {
    icon: <Zap size={22} />,
    title: "On-Time Delivery",
    description: "Streamlined project management ensuring timely completion without compromising on quality.",
  },
  {
    icon: <Shield size={22} />,
    title: "Trusted & Transparent",
    description: "Clear communication, honest pricing, and dependable service from foundation to finishing.",
  },
  {
    icon: <Hammer size={22} />,
    title: "End-to-End Solutions",
    description: "From 2D/3D design to construction and real-estate guidance — all under one roof.",
  },
  {
    icon: <Award size={22} />,
    title: "Proven Track Record",
    description: "Hundreds of successful residential and commercial projects across Avadi, Poonamallee, and beyond.",
  },
]

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "10+",  label: "Years of Excellence" },
  { value: "30+",  label: "Expert Professionals" },
]

/*  FeatureCard  */
function FeatureCard({
  icon, title, description, index,
}: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    C.bgWhite,
        border:        `1px solid ${hovered ? C.borderGold : C.border}`,
        borderRadius:  "16px",
        padding:       "36px 32px",
        cursor:        "default",
        transition:    "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        boxShadow:     hovered
          ? "0 12px 40px rgba(28,25,23,0.09), 0 2px 8px rgba(197,160,89,0.08)"
          : "0 1px 4px rgba(28,25,23,0.04)",
        transform:     hovered ? "translateY(-4px)" : "translateY(0)",
        display:       "flex",
        flexDirection: "column" as const,
      }}
    >
      <div style={{
        width:          "44px",
        height:         "44px",
        borderRadius:   "10px",
        background:     hovered ? C.goldFaint2 : C.goldFaint,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        color:          C.gold,
        marginBottom:   "20px",
        transition:     "background 0.3s ease",
        flexShrink:     0,
      }}>
        {icon}
      </div>

      <h3 style={{
        fontSize:      "1.0625rem",
        fontWeight:    "600",
        color:         C.dark,
        marginBottom:  "10px",
        letterSpacing: "-0.01em",
        lineHeight:    "1.3",
      }}>
        {title}
      </h3>

      <p style={{
        fontSize:   "0.9rem",
        color:      C.muted,
        lineHeight: "1.7",
        flexGrow:   1,
        marginBottom: 0,
      }}>
        {description}
      </p>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
        transition={{ duration: 0.2 }}
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        "6px",
          color:      C.gold,
          fontSize:   "0.8125rem",
          fontWeight: "600",
          marginTop:  "18px",
        }}
      >
        Learn more <ArrowRight size={14} />
      </motion.div>
    </motion.div>
  )
}

/*  StatItem  */
function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center" as const, padding: "0 16px" }}
    >
      <div style={{
        fontSize:      "clamp(2rem, 4vw, 2.75rem)",
        fontWeight:    "700",
        color:         C.gold,
        letterSpacing: "-0.03em",
        lineHeight:    "1",
        marginBottom:  "8px",
      }}>
        {value}
      </div>
      <div style={{
        fontSize:      "0.75rem",
        color:         C.muted,
        fontWeight:    "600",
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
      }}>
        {label}
      </div>
    </motion.div>
  )
}

/*  CTA Button  */
function CTAButton({
  children, primary, onClick,
}: { children: React.ReactNode; primary: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        gap:            "8px",
        padding:        "14px 28px",
        borderRadius:   "10px",
        fontSize:       "0.9rem",
        fontWeight:     "600",
        cursor:         "pointer",
        transition:     "all 0.25s ease",
        whiteSpace:     "nowrap" as const,
        border:         primary ? "none" : "1px solid rgba(255,255,255,0.15)",
        background:     primary
          ? hovered ? C.goldLight : C.gold
          : hovered ? "rgba(255,255,255,0.07)" : "transparent",
        color:          primary
          ? "#FFFFFF"
          : hovered ? "#FFFFFF" : "rgba(255,255,255,0.65)",
        boxShadow:      primary && hovered ? "0 8px 24px rgba(197,160,89,0.35)" : "none",
        transform:      hovered ? "translateY(-1px)" : "none",
      }}
    >
      {children}
    </button>
  )
}

/*  Main Section  */
export default function WhyChooseUs() {
  const navigate = useNavigate()
  const headerRef = React.useRef(null)
  const inView = useInView(headerRef, { once: true, amount: 0.3 })

  return (
    <section style={{
      background:   C.bg,
      padding:      "100px 24px",
      position:     "relative",
      overflow:     "hidden",
    }}>
      {/* subtle grid texture */}
      <div style={{
        position:        "absolute",
        inset:           0,
        backgroundImage: `repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(28,25,23,0.025) 79px,rgba(28,25,23,0.025) 80px)`,
        pointerEvents:   "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/*  Header  */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center" as const, marginBottom: "72px" }}
        >
          <div style={{
            display:       "inline-flex",
            alignItems:    "center",
            gap:           "8px",
            background:    C.goldFaint2,
            color:         C.gold,
            padding:       "6px 16px",
            borderRadius:  "100px",
            fontSize:      "0.72rem",
            fontWeight:    "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom:  "24px",
            border:        `1px solid ${C.borderGold}`,
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.gold, display: "inline-block", flexShrink: 0 }} />
            Excellence in Construction &amp; Design
          </div>

          <h2 style={{
            fontSize:      "clamp(2rem, 5vw, 3.25rem)",
            fontWeight:    "700",
            color:         C.dark,
            letterSpacing: "-0.03em",
            lineHeight:    "1.1",
            marginBottom:  "20px",
            maxWidth:      "720px",
            margin:        "0 auto 20px",
          }}>
            Why Choose{" "}
            <span style={{ color: C.gold }}>SSJ Developers</span>
          </h2>

          <p style={{
            fontSize:    "1.0625rem",
            color:       C.muted,
            maxWidth:    "560px",
            margin:      "0 auto",
            lineHeight:  "1.7",
          }}>
            Combining expertise, transparency, and craftsmanship to build homes and spaces that stand the test of time.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width:           "48px",
              height:          "2px",
              background:      C.gold,
              margin:          "28px auto 0",
              transformOrigin: "center",
            }}
          />
        </motion.div>

        {/*  Feature Grid  */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap:                 "20px",
          marginBottom:        "72px",
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>

        {/*  Stats Bar  */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:          C.bgWhite,
            border:              `1px solid ${C.border}`,
            borderRadius:        "20px",
            padding:             "52px 40px",
            marginBottom:        "72px",
            display:             "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap:                 "32px",
            position:            "relative",
            overflow:            "hidden",
          }}
        >
          <div style={{
            position:   "absolute",
            top:        0, left: "10%",
            width:      "80%", height: "2px",
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }} />

          {[1, 2, 3].map(i => (
            <div key={i} style={{
              position:   "absolute",
              top:        "20%", bottom: "20%",
              left:       `${i * 25}%`,
              width:      "1px",
              background: C.border,
            }} />
          ))}

          {STATS.map((s, i) => <StatItem key={i} {...s} index={i} />)}
        </motion.div>

        {/*  CTA Banner  */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:     C.dark,
            borderRadius:   "20px",
            padding:        "64px 56px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            gap:            "48px",
            position:       "relative",
            overflow:       "hidden",
          }}
        >
          <div style={{
            position:     "absolute",
            top: "-60px", right: "-60px",
            width: "320px", height: "320px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position:     "absolute",
            bottom: "-80px", left: "-40px",
            width: "250px", height: "250px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(197,160,89,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "560px", position: "relative" }}>
            <div style={{
              fontSize:      "0.7rem",
              fontWeight:    "700",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color:         C.gold,
              marginBottom:  "16px",
            }}>
              Ready to get started?
            </div>
            <h3 style={{
              fontSize:      "clamp(1.5rem, 3vw, 2.125rem)",
              fontWeight:    "700",
              color:         "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight:    "1.2",
              marginBottom:  "14px",
            }}>
              Build Your Dream Project With Us
            </h3>
            <p style={{
              fontSize:   "0.9375rem",
              color:      "rgba(255,255,255,0.5)",
              lineHeight: "1.65",
            }}>
              Join hundreds of satisfied homeowners and businesses who trust SSJ Developers to bring their vision to life.
            </p>
          </div>

          <div style={{
            display:       "flex",
            flexDirection: "column" as const,
            gap:           "12px",
            flexShrink:    0,
            position:      "relative",
          }}>
            <CTAButton primary onClick={() => navigate("/contact")}>
              Start Your Project <ArrowUpRight size={15} />
            </CTAButton>
            <CTAButton primary={false} onClick={() => navigate("/services")}>
              View Our Services
            </CTAButton>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
