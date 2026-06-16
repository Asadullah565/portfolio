import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
//   SiVscode,
  SiSass,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
    { name: "SQL", icon: <SiMysql className="text-indigo-300" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    // { name: "VS Code", icon: <SiVscode className="text-blue-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  ];

  const learning = [
    { name: "Advanced React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ];

 

  return (
    <section id="skills" className="w-full bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-[93%] mx-auto">

      
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Skills, tools, and technologies I use and am learning
          </p>
        </div>

        <Card title="Skills" items={skills} />
        <Card title="Tools" items={tools} />
        <Card title="Currently Learning" items={learning} />

      </div>
    </section>
  );
}

export default Skills;

 const Card = ({ title, items }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center md:text-left">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111827] border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition duration-300 hover:scale-105 hover:border-cyan-400 "
          >
            <div className="text-3xl">{item.icon}</div>
            <p className="text-sm text-gray-300">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );