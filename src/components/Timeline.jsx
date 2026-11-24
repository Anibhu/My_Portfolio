"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Dynamically recalculate line height on resize/content changes
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 65%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 mb-4 h-[1px] w-full" />

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-28 md:gap-12"
          >
            {/* Left Column: Sticky Timeline Node + Role Info */}
            <div className="sticky z-40 flex flex-col items-start self-start max-w-xs md:flex-row top-36 lg:max-w-sm md:w-full">
              {/* Centered Timeline Node Dot (aligned precisely to left-5 = 20px line) */}
              <div className="absolute flex items-center justify-center w-9 h-9 rounded-full left-[3px] bg-midnight border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-lavender" />
              </div>

              {/* Desktop Role & Date Hierarchy */}
              <div className="hidden md:flex flex-col pl-16">
                <span className="inline-block w-fit px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/5 text-lavender border border-white/10">
                  {item.date}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-base lg:text-lg font-medium text-neutral-400">
                  {item.job}
                </p>
              </div>
            </div>

            {/* Right Column: Glass Card with Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full pl-14 pr-2 md:pl-0"
            >
              {/* Mobile Role & Date Header */}
              <div className="block mb-4 md:hidden">
                <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/5 text-lavender border border-white/10">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm font-medium text-neutral-400">
                  {item.job}
                </p>
              </div>

              {/* Content Card */}
              <div className="p-6 md:p-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
                <ul className="space-y-3">
                  {item.contents.map((content, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-neutral-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Vertical Timeline Track (centered at 20px = left-5) */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender to-transparent from-[0%] via-[15%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};