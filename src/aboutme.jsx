import person2 from "./assets/person2.png";
function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#0f172a]/100 text-white py-20 px-6 "
    >
      <div className="max-w-[92%] mx-auto flex flex-col md:flex-row items-center gap-12">

        
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-xl">
            I am a passionate Front-End Developer focused on building modern,
            responsive, and user-friendly web applications. I specialize in
            React.js, JavaScript, HTML, and CSS, and I enjoy transforming ideas
            into interactive digital experiences.
          </p>

          <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-xl">
            I’m always curious about new technologies and constantly improving
            my skills. I enjoy writing clean, maintainable code and building UI
            that not only looks good but feels intuitive to use.
          </p>

        
          <div className="mt-6 text-gray-400 text-sm sm:text-sm md:text-lg leading-7 max-w-xl">
            <h3 className="text-cyan-400 font-semibold text-lg mb-2">
              Hobbies & Interests
            </h3>

            <ul className="space-y-2">
              <li>  ⭐Exploring new web technologies and frameworks</li>
              <li> 🎮 Gaming and understanding game UI/UX design</li>
              
              <li> 🌍 Travelling to new places and experiencing different cultures  </li>
           
            </ul>
          </div>

          
          <div className="mt-8 p-4 border border-slate 800 rounded-lg bg-[#111827]">
            <p className="text-cyan-400 font-semibold">
              “I don't just build websites, I build experiences that don't make users want to throw their phone.”
            </p>
          </div>

        </div>

       
        <div className="flex-1 flex justify-center">
          <div className="relative">

         
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

           
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-xl relative">
              <img
                src={person2}
                alt="About Me"
                className="w-full h-full object-cover "
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;