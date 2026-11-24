import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// 1. Import your local SVGs from src/assets/logos
import jsLogo from '/assets/logos/javascript.svg';
import tsLogo from '/assets/logos/typescript.svg';
import cppLogo from '/assets/logos/cplusplus.svg';
import pythonLogo from '/assets/logos/python.svg';
import cssLogo from '/assets/logos/css.svg';
import htmlLogo from '/assets/logos/html5.svg';
import reactLogo from '/assets/logos/react.svg';
import tailwindLogo from '/assets/logos/tailwindcss.svg';
import gsapLogo from '/assets/logos/gsap.svg';
import framerLogo from '/assets/logos/framer.svg';
import nodeLogo from '/assets/logos/nodedotjs.svg';
import expressLogo from '/assets/logos/express.svg';
import mongoLogo from '/assets/logos/mongodb.svg';
import mysqlLogo from '/assets/logos/mysql.svg';
import postgresqlLogo from '/assets/logos/postgresql.svg';
import gitLogo from '/assets/logos/git.svg';
import matlabLogo from '/assets/logos/matlab.svg';
import githubLogo from '/assets/logos/github.svg';
import nextjsLogo from '/assets/logos/nextdotjs.svg';
import ollamaLogo from '/assets/logos/ollama.svg';
import fastapiLogo from '/assets/logos/fastapi.svg';
import tensorflowLogo from '/assets/logos/tensorflow-light.svg';
import numpyLogo from '/assets/logos/numpy.svg';
import pandasLogo from '/assets/logos/pandas.svg';
import cvLogo from '/assets/logos/azure-computer-vision.svg';
import huggingfaceLogo from '/assets/logos/hugging-face.svg';
import scikitlearnLogo from '/assets/logos/scikit-learn.svg';

// import dockerLogo from '/assets/logos/docker.svg';

gsap.registerPlugin(ScrollTrigger);

// 2. Pass the imported variables instead of URL strings
const MY_STACK = {
  Languages: [
    { name: 'C++', icon: cppLogo},
    { name: 'Python', icon: pythonLogo},
    { name: 'JavaScript', icon: jsLogo },
    { name: 'TypeScript', icon: tsLogo },
  ],  
  frontend: [
    { name: 'HTML', icon: htmlLogo },
    { name: 'CSS', icon: cssLogo },
    { name: 'React', icon: reactLogo },
    { name: 'NextJS', icon: nextjsLogo },
    { name: 'Tailwind CSS', icon: tailwindLogo },
    { name: 'GSAP', icon: gsapLogo },
    { name: 'Framer Motion', icon: framerLogo },
  ],
  backend: [
    { name: 'Node.js', icon: nodeLogo },
    { name: 'Express.js', icon: expressLogo },
    { name: 'FastAPI', icon: fastapiLogo },
  ],
  'AI / ML': [
    { name: 'TensorFlow', icon: tensorflowLogo },
    { name: 'NumPy', icon: numpyLogo },
    { name: 'Pandas', icon: pandasLogo },
    { name: 'Scikit-Learn', icon: scikitlearnLogo },
    { name: 'Computer-vision', icon: cvLogo },
    { name: 'HuggingFace', icon: huggingfaceLogo },
    { name: 'Ollama', icon: ollamaLogo },
  ],
  database: [
    { name: 'MongoDB', icon: mongoLogo },
    { name: 'MySQL', icon: mysqlLogo },
    { name: 'PostgreSQL', icon: postgresqlLogo },
  ],
  tools: [
    { name: 'Git', icon: gitLogo },
    { name: 'Github', icon: githubLogo },
    { name: 'MATLAB', icon: matlabLogo },
  ],
};

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray('.stack-row');

      rows.forEach((row) => {
        const title = row.querySelector('.stack-category');
        const items = row.querySelectorAll('.stack-item');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.from(title, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        }).from(
          items,
          {
            y: 25,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className=" text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg  uppercase tracking-widest text-neutral-400 mb-16 flex items-center gap-2 font-bold">
          <span className="text-emerald-400">✦</span> Technical Skills
        </h2>

        <div className="space-y-16">
          {Object.entries(MY_STACK).map(([category, skills]) => (
            <div
              key={category}
              className="stack-row grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-800/70 pb-12 last:border-none"
            >
              <div className="md:col-span-5">
                <h3 className="stack-category text-4xl md:text-5xl font-bold uppercase tracking-tight text-neutral-300">
                  {category}
                </h3>
              </div>

              <div className="md:col-span-7 flex flex-wrap gap-x-10 gap-y-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="stack-item flex items-center gap-3 group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-xl md:text-2xl font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;