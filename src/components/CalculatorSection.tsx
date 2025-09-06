'use client';

import { useState } from 'react';

const CalculatorSection = () => {
  const [energyValue, setEnergyValue] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('residencial');
  const [showResult, setShowResult] = useState(false);
  const [savings, setSavings] = useState({ annual: 0, percentage: 0 });

  const calculateSavings = () => {
    const value = parseFloat(energyValue);
    if (value > 0) {
      const multipliers = {
        'residencial': 0.7,
        'comercial': 0.6,
        'industrial': 0.5
      };
      
      const multiplier = multipliers[propertyType as keyof typeof multipliers] || 0.7;
      const annualSavings = value * 12 * multiplier;
      const percentage = multiplier * 100;
      
      setSavings({ annual: annualSavings, percentage });
      setShowResult(true);
    }
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-r from-purple-700 to-purple-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Veja o quanto você irá economizar
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <span className="text-2xl mr-3">💰</span>
                  Valor da conta de energia
                </label>
                <input
                  type="number"
                  value={energyValue}
                  onChange={(e) => setEnergyValue(e.target.value)}
                  placeholder="R$ 0,00"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                />
              </div>
              
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-3">
                  <span className="text-2xl mr-3">🏠</span>
                  Tipo de imóvel
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              
              <button
                onClick={calculateSavings}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Calcular Economia
              </button>
            </div>
            
            {/* Result */}
            <div className={`${showResult ? 'block' : 'hidden'} bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sua economia anual será de:
              </h3>
              <p className="text-4xl font-bold text-green-600 mb-2">
                R$ {savings.annual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-lg text-green-700">
                {savings.percentage}% de economia
              </p>
              <div className="mt-4 p-3 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Baseado no seu consumo atual e tipo de imóvel
                </p>
              </div>
            </div>
            
            {/* Placeholder when no result */}
            <div className={`${!showResult ? 'flex' : 'hidden'} items-center justify-center bg-gray-50 rounded-xl p-6`}>
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg">Preencha os dados para ver sua economia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;