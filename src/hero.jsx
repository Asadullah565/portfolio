import { useEffect, useState } from "react";
import { HiOutlineFolderOpen, HiDownload } from "react-icons/hi";
import heroImage from "./assets/person1.png";
import resume from "./assets/resume.pdf";

function useTyping(words, speed = 90, pause = 1800) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    let delay = del ? speed / 2 : speed;
    if (!del && ci === word.length) delay = pause;

    const timer = setTimeout(() => {
      if (!del && ci < word.length) {
        setText(word.slice(0, ci + 1));
        setCi((c) => c + 1);
      } else if (!del && ci === word.length) {
        setDel(true);
      } else if (del && ci > 0) {
        setText(word.slice(0, ci - 1));
        setCi((c) => c - 1);
      } else {
        setDel(false);
        setWi((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [ci, del, wi, words, speed, pause]);

  return text;
}

function Hero() {
  const typed = useTyping([
    "Front-End Engineer",
    "Software Developer",
    "Open Source Contributor",
  ]);

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-[#0f172a] text-white px-6 lg:mt-9 md:mt-18 sm:mt-18 hero-section"
    >
      <div className="max-w-[93%] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 hero-content md:mt-5 lg:mt-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 md:text-left text-center">

          <h1 className="text-3xl sm:text-2xl lg:text-6xl font-bold">
            Hi there, I am <br />
            <span className="text-cyan-400">
              Muhammad Asadullah
            </span>
          </h1>

          {/* Animated role (NOW CLEAN TYPING) */}
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-300 flex items-center justify-center md:justify-start gap-1">
            {typed}
            <span className="text-cyan-400 animate-pulse">|</span>
          </h2>

          {/* Description */}
          <p className="mt-10 text-gray-400 max-w-xl">
            I am a passionate Front-End Developer focused on creating modern,
            responsive, and user-friendly web applications. I specialize in
            React.js, JavaScript, HTML, and CSS, turning ideas into interactive
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 md:justify-start justify-between">

            {/* Projects */}
            <a
              href="#projects"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black lg:px-5 lg:py-3 px-3 py-2 rounded-lg transition lg:text-lg text-sm"
            >
              <HiOutlineFolderOpen />
              View Projects
            </a>

      
            <a
              href={resume}
              target="_blank"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 lg:px-5 lg:py-3 px-3 py-2 rounded-lg transition lg:text-lg text-sm"
            >
              <HiDownload />
              Download Resume
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-slate-500 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-cyan-400 overflow-hidden">
            <img
              src={heroImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;