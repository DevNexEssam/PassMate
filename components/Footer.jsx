import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-4 text-center text-gray-400">
      <a 
        href="https://github.com/DevNexEssam" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
      >
        <FaGithub className="w-5 h-5" />
        <span>DevNexEssam</span>
      </a>
    </footer>
  );
}