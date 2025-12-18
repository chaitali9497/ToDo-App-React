import {  FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center ">
      
    
      <div className="flex gap-6 mb-3">
        <a
          href="https://www.linkedin.com/in/chaitali-mahato-179652207/"
          className="text-white/90 text-2xl p-2 rounded-xl 
                     bg-white/20 backdrop-blur-lg border border-white/40 
                     hover:bg-white/30 transition"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com"
          className="text-white/90 text-2xl p-2 rounded-xl 
                     bg-white/20 backdrop-blur-lg border border-white/40 
                     hover:bg-white/30 transition"
          target="_blank" rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://github.com/chaitali9497"
          className="text-white/90 text-2xl p-2 rounded-xl 
                     bg-white/20 backdrop-blur-lg border border-white/40 
                     hover:bg-white/30 transition"
          target="_blank" rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

     
     <p className="italic text-white/85 text-sm 
               font-light tracking-wider">
  — Designed & Built by <span className="font-semibold">Chaitali Mahato</span>
</p>

    </footer>
  );
}


export default Footer;
