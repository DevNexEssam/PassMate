import { FaRedoAlt } from "react-icons/fa";

export function GenerateButton({ onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
    >
      <FaRedoAlt className="w-5 h-5" /> Generate Password
    </button>
  );
}