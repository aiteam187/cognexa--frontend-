import { motion } from "motion/react";
import { heroSolutions } from "../../data/heroSolutions";
import SolutionCard from "./SolutionCard";
import HeroCircuitOverlay from "./HeroCircuitOverlay";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-80 w-full overflow-hidden sm:h-[560px]">
        <img
          src="/home1.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
        />

        {/* Floating gradient glow accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
        </div>

        {/* Flowing current along the circuit traces */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <HeroCircuitOverlay />
          <div className="hero-core">
            <span className="hero-core-glow" />
            <span className="hero-core-ring hero-core-ring-a" />
            <span className="hero-core-ring hero-core-ring-b" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
          className="-mt-10 mb-4 flex flex-col items-center gap-4 text-center sm:-mt-32 sm:gap-5"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-2xl rounded-full bg-gray-950/70 px-5 py-2 text-xl font-bold text-white backdrop-blur-sm sm:max-w-2xl sm:bg-transparent sm:px-0 sm:py-0 sm:text-4xl sm:leading-tight sm:backdrop-blur-none md:text-5xl"
          >
            Custom IT services and solutions for your business
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden max-w-xl text-base text-gray-200 sm:block"
          >
            Cognexa builds AI automation products that read your invoices,
            watch your cameras, talk to your customers, and run your reports,
            so your team can focus on the work that matters.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden items-center gap-3 sm:flex"
          >
            <Button to="/contacts" size="lg">
              Book a Demo
            </Button>
            <Button
              href="#aiAgent"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Explore Solutions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ul className="mt-4 grid w-full grid-cols-2 gap-4 bg-gray-50 px-6 pb-10 sm:grid-cols-3 sm:px-16 md:px-24 lg:grid-cols-6 lg:px-16">
        {heroSolutions.map((solution, index) => (
          <SolutionCard
            key={solution.title}
            solution={solution}
            delay={index * 80}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Hero;
