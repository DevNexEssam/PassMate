import { FaClipboard } from "react-icons/fa";

export function PasswordDisplay({ password, onCopy }) {
  return (
    <div className="mt-6 group relative">
      <div className="p-4 bg-gray-800/50 backdrop-blur text-emerald-400 text-center text-xl font-mono rounded-xl border border-gray-700 flex items-center justify-between overflow-x-auto">
        <span className="px-2">{password}</span>
        <button 
          onClick={onCopy} 
          className="ml-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        >
          <FaClipboard className="w-5 h-5 text-emerald-400 hover:text-emerald-300" />
        </button>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur opacity-50 group-hover:opacity-100 transition-opacity -z-10"></div>
    </div>
  );
}