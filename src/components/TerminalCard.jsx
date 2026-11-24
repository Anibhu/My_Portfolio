import { useState, useRef, useEffect } from "react";

const COMMANDS = {
  whoami: {
    output: [
      "Anish Bhuin — ECE Undergrad & Full-Stack / AI Developer",
      "Building scalable web apps, CV pipelines, and embedded systems.",
    ],
  },
  "cat stack.json": {
    output: [
      "{",
      '  "languages": ["C++", "Python", "JavaScript", "SQL"],',
      '  "web": ["React", "FastAPI", "Node.js", "Three.js"],',
      '  "ai_cv": ["PyTorch", "TensorFlow", "OpenCV"],',
      '  "hardware": ["ESP32", "Raspberry Pi", "Cadence Virtuoso"]',
      "}",
    ],
  },
  achievements: {
    output: [
      "• 2nd Academic Rank (2025–26) — JGEC (8.7 CGPA)",
      "• Summer Research Intern @ NIT Jamshedpur (94%+ CV accuracy)",
      "• Sponsorship Lead — JGEC Winter of Code 2026",
    ],
  },
  status: {
    output: [
      "● Open to SWE / AI-ML Internships & Collaborative Builds",
      "● Late-night mode: Active (UTC+5:30)",
    ],
  },
  help: {
    output: [
      "Available commands: whoami, cat stack.json, achievements, status, clear",
    ],
  },
};

export default function TerminalCard() {
  const [history, setHistory] = useState([
    { cmd: "whoami", lines: COMMANDS.whoami.output },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const runCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const match = COMMANDS[cmd];
    const lines = match
      ? match.output
      : [`zsh: command not found: ${cmd}. Try 'help' or click a pill below.`];

    setHistory((prev) => [...prev, { cmd: rawCmd.trim(), lines }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] font-mono text-xs text-slate-300 shadow-xl">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-slate-400">anish@dev:~</span>
        <button
          onClick={() => runCommand("clear")}
          className="text-[10px] text-slate-500 transition hover:text-slate-300"
        >
          clear
        </button>
      </div>

      {/* Terminal Output Area */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto p-4 leading-relaxed"
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>❯</span>
              <span className="text-slate-100">{entry.cmd}</span>
            </div>
            <div className="space-y-0.5 pl-4 text-slate-400">
              {entry.lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-words">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Live Input Prompt */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command or click below..."
            aria-label="Terminal command input"
            className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Quick-Click Command Pills */}
      <div className="flex flex-wrap gap-1.5 border-t border-white/10 bg-white/[0.02] px-4 py-2.5">
        {Object.keys(COMMANDS)
          .filter((c) => c !== "help")
          .map((cmd) => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
            >
              $ {cmd}
            </button>
          ))}
      </div>
    </div>
  );
}