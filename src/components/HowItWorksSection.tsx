const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Análise energética gratuita',
      description: 'Nossa equipe realiza um estudo personalizado do seu consumo energético para dimensionar o sistema ideal.',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      numberBg: 'bg-yellow-500'
    },
    {
      number: '2',
      title: 'Você faz sua assinatura',
      description: 'Assinatura simples e sem burocracia. Comece a economizar desde o primeiro mês com nosso plano personalizado.',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      numberBg: 'bg-orange-500'
    },
    {
      number: '3',
      title: 'Usufrua energia limpa',
      description: 'Aproveite energia solar renovável e limpa enquanto reduz significativamente sua conta de energia elétrica.',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      numberBg: 'bg-green-500'
    }
  ];

  return (
    <section id="how-works" className="py-16 bg-gradient-to-b from-purple-700 to-purple-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Como funciona?
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index} className={`${step.bgColor} rounded-2xl p-8 shadow-lg`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`${step.numberBg} text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <h3 className={`${step.textColor} text-xl md:text-2xl font-bold mb-3`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;