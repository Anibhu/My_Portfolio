import  { useRef } from 'react'
import Card from '../components/Card';
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import TerminalCard from '../components/TerminalCard';

const About = () => {
    const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
        <h2 className="text-heading">About Me </h2>
        {/* BENTO GRID STYLE */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img
                    src="assets/Motherboard.png"
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] object-fill"
                />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Anish Bhuin</p>
                    <p className="subtext">
                    Software Engineer aspirant and B.Tech ECE student at JGEC with a strong foundation in C++, Data Structures & Algorithms, and full-stack development. 
                    Experienced in AI/ML through research internship at NIT Jamshedpur and hands-on projects involving deep learning, IoT, FastAPI, React, and Firebase.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>
            {/* Grid 2 */}
            <div className="flex items-end grid-special-color grid-2">
                <div
                    ref={grid2Container}
                    className="flex items-center justify-center w-full h-full"
                >
                    <p className="flex items-end text-5xl text-white">
                    CODE IS CRAFT
                    </p>
                    <Card
                    style={{ rotate: "-15deg", top: "12%", left: "18%" }}
                    text="DATA STRUCTURE"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "25deg", top: "58%", left: "42%" }}
                    text="PROBLEM SOLVING"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "-35deg", bottom: "18%", left: "73%" }}
                    text="AI / ML"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "40deg", top: "52%", left: "5%" }}
                    text="OOPS"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "-20deg", top: "8%", left: "62%" }}
                    text="NETWORKING"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "18deg", top: "78%", left: "48%" }}
                    text="VERILOG"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "-28deg", top: "35%", left: "78%" }}
                    text="MATLAB"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "32deg", top: "5%", left: "38%" }}
                    text="VLSI"
                    containerRef={grid2Container}
                    />
                    <Card
                    style={{ rotate: "-10deg", top: "82%", left: "12%" }}
                    text="EMBEDDED SYSTEM"
                    containerRef={grid2Container}
                    />
                </div>
            </div>
            {/* Grid 3 */}
            <div className="flex items-end grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm From INDIA and OPEN TO WORK WORLDWIDE</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/* Grid 4 */}
            <div className="flex items-end grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                    Do you want to start a project ?
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="flex items-end grid-default-color grid-5">
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <TerminalCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About