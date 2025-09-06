const PlantsSection = () => {
  const plants = [
    { state: 'SP', position: 'top-1/2 left-1/4' },
    { state: 'MG', position: 'top-1/3 left-1/3' },
    { state: 'RJ', position: 'top-2/3 left-2/5' },
    { state: 'RS', position: 'bottom-1/4 left-1/5' },
    { state: 'SC', position: 'bottom-1/3 left-1/4' }
  ];

  return (
    <section id="plants" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Nossas Usinas
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Energia solar distribuída em todo o território nacional
        </p>
        
        {/* Map Container */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 min-h-[400px] overflow-hidden">
            {/* Brazil Map Outline (Simplified) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <svg viewBox="0 0 300 400" className="w-full h-full opacity-20">
                  <path
                    d="M50 100 Q80 80 120 90 Q160 85 200 95 Q240 100 260 130 Q270 160 265 190 Q260 220 240 250 Q220 280 190 300 Q160 320 130 310 Q100 300 80 280 Q60 260 50 230 Q40 200 45 170 Q50 140 50 100 Z"
                    fill="currentColor"
                    className="text-green-300"
                  />
                </svg>
                
                {/* Plant Markers */}
                {plants.map((plant, index) => (
                  <div
                    key={index}
                    className={`absolute ${plant.position} transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      📍
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                      <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-700 shadow">
                        {plant.state}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm text-gray-600">Usinas Ativas</div>
              <div className="text-2xl font-bold text-green-600">25+</div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm text-gray-600">Estados Atendidos</div>
              <div className="text-2xl font-bold text-blue-600">12</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
            Ver Todas as Usinas
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;