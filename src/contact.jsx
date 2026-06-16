import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Let’s connect — I’m open to opportunities and collaborations
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
          <div className="bg-[#111827] border border-slate-700 rounded-xl p-6 flex flex-col gap-5">

           
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <span className="text-gray-300 text-sm sm:text-base">
                asadullahakmal75@gmail.com
              </span>
            </div>

        
            <a
              href="https://github.com/Asadullah565"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaGithub className="text-2xl" />
              <span className="text-sm sm:text-base">GitHub Profile</span>
            </a>

        
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <span className="text-sm sm:text-base">LinkedIn Profile</span>
            </a>

            <p className="text-gray-400 text-sm leading-6 mt-4">
              I’m currently looking for frontend development opportunities and
              internships. Feel free to reach out for collaboration or freelance work.
            </p>
          </div>

          
          <form className="bg-[#111827] border border-slate-700 rounded-xl p-6 flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#0f172a] border border-slate-600 outline-none focus:border-cyan-400 text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-[#0f172a] border border-slate-600 outline-none focus:border-cyan-400 text-sm"
            />

            <textarea
              rows="5"
              placeholder="Your Message..."
              className="p-3 rounded-lg bg-[#0f172a] border border-slate-600 outline-none focus:border-cyan-400 text-sm resize-none"
            />

            <button
              type="button"
              className="bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              * This is frontend only. Backend/email service needed to actually send messages.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;