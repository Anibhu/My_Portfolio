import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords"; // adjust path if needed

const HeroText = () => {
  const words = [
    "scalable",
    "intelligent",
    "resilient",
    "low-latency",
    "full-stack",
    "autonomous",
  ];

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  // Shared smooth deceleration curve
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text overflow-hidden">
      {/* Desktop Version */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1.0, ease: smoothEase }}
        >
          Hi, I&apos;m Anish
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.div
            className="text-5xl font-medium text-neutral-300 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85, duration: 1.0, ease: smoothEase }}
          >
            Building{" "}
            <FlipWords words={words} className="text-white font-semibold" />{" "}
            <br />
            Systems from Silicon to Cloud
          </motion.div>

          <motion.p
            className="mt-4 text-lg text-neutral-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, duration: 1.0, ease: smoothEase }}
          >
            ECE Undergrad &bull; Full-Stack &amp; AI Developer &bull; Competitive Programmer
          </motion.p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-col space-y-4 md:hidden px-4">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1.0, ease: smoothEase }}
        >
          Hi, I&apos;m Anish
        </motion.p>

        <div>
          <motion.p
            className="text-4xl font-black text-neutral-500"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85, duration: 1.0, ease: smoothEase }}
          >
            Building
          </motion.p>

          <motion.div
            className="my-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.25, duration: 1.0, ease: smoothEase }}
          >
            <FlipWords
              words={words}
              className="text-4xl font-black text-white"
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-300 leading-snug"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.65, duration: 1.0, ease: smoothEase }}
          >
            Systems from Silicon to Cloud
          </motion.p>
        </div>

        <motion.p
          className="pt-2 text-sm text-neutral-400 leading-relaxed"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.05, duration: 1.0, ease: smoothEase }}
        >
          ECE Undergrad &bull; Full-Stack &amp; AI Developer &bull; Competitive Programmer
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;