import tipcalculator from "./assets/tipcalculator.png";
import bank from "./assets/bank.png";
import medicare from "./assets/Medicare.png";
function Projects() {
  const projects = [
    {
      title: "Tip Calculator",
        image: tipcalculator,
      description:
        "A responsive tip calculator built with JavaScript that calculates tip amounts and bill splitting instantly.",
      github: "https://github.com/Asadullah565/tip-calculator",
    //   demo: "/tip-demo.mp4",
    },
    {
      title: "Bank Management System",
         image: bank,
      description:
        "A console-based Bank Management System developed in C++ using Object-Oriented Programming concepts and file handling.",
      github: "https://github.com/Asadullah565/Bank-Management-System",
    //   demo: "/bank-demo.mp4",
    },
    {
      title: "MediCare",
      image: medicare,
      description:
        "A healthcare management web application built using PHP and SQL for managing patient records and medical information.",
      github: "https://github.com/Asadullah565/MediCare-",
    //   demo: "/medicare-demo.mp4",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20 px-6"
    >
      <div className="max-w-[93%] mx-auto">
        
    
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Some projects I've built while learning software development.
          </p>
        </div>

     
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[90%] h-52 object-cover mx-auto rounded-t-xl mt-5"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                   
                    className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    GitHub
                  </a>

                  <a
                   
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;