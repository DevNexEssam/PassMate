export function PasswordControls({
    length,
    includeNumbers,
    includeSymbols,
    onLengthChange,
    onNumbersChange,
    onSymbolsChange
  }) {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-lg font-medium text-gray-200">
            Password Length: {length}
          </label>
          <input 
            type="range" 
            min="6" 
            max="32" 
            value={length} 
            onChange={(e) => onLengthChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>
  
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-gray-200 hover:text-gray-100 transition-colors">
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={onNumbersChange} 
              className="w-5 h-5 rounded accent-emerald-400 bg-gray-700 border-gray-600"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-3 text-gray-200 hover:text-gray-100 transition-colors">
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={onSymbolsChange} 
              className="w-5 h-5 rounded accent-emerald-400 bg-gray-700 border-gray-600"
            />
            Include Symbols
          </label>
        </div>
      </div>
    );
  }