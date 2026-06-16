import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-slate-800 py-8 px-4 sm:px-6">
      <div className="max-w-[93%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left text */}
        <p className="text-gray-400 text-lg text-center md:text-left">
          Designed and Developed by{" "}
          <span className="text-cyan-400 font-semibold">
            Muhammad Asadullah
          </span>
        </p>

        {/* Center copyright */}
        <p className="text-gray-500 text-lg md:text-md">
          Copyright © 2026 MU
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/Asadullah565"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;