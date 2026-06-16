import { FaGraduationCap, FaCode } from "react-icons/fa";

function Education() {
  const data = [
    {
      title: "Bachelor’s Degree (In Progress)",
      subtitle: "Computer Science / Related Field",
      description:
        "Currently pursuing my bachelor’s degree with a focus on software development, programming fundamentals, and modern web technologies.",
      icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
    },
    {
      title: "Frontend Development Experience",
      subtitle: "React.js | JavaScript | HTML | CSS | Tailwind| bootstrap | SASS",
      description:
        "Hands-on experience building responsive and interactive web applications using React.js and modern frontend tools. Focused on clean UI, reusable components, and user experience.",
      icon: <FaCode className="text-cyan-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0f172a] text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Education & Experience</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Academic background and development journey so far
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#111827]
                border border-slate-700
                rounded-xl
                p-5 sm:p-6
                hover:border-cyan-400
                hover:-translate-y-1
                transition duration-300
                flex flex-col gap-4
              "
            >
              {/* Icon + Title row for better mobile look */}
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-cyan-400 text-sm sm:text-base">
                {item.subtitle}
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-6">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;