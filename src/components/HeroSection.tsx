'use client';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-orange-400 relative overflow-hidden">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-light opacity-90">energia</h2>
              <h1 className="text-5xl md:text-7xl font-bold">solar</h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 max-w-md">
              Transforme sua casa com energia limpa e econômica.
              Reduza sua conta de energia e contribua para um planeta mais sustentável.
            </p>
            
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
              Solicitar Orçamento
            </button>
            
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm opacity-75">Conheça nossos planos</span>
              <div className="flex space-x-2">
                <span className="text-xs opacity-60">●</span>
                <span className="text-xs opacity-60">●</span>
                <span className="text-xs opacity-60">●</span>
              </div>
            </div>
          </div>

          {/* Right Content - Family Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-6xl md:text-7xl">👨‍👩‍👧‍👦</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;