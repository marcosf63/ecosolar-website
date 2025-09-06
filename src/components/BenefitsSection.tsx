const BenefitsSection = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Economia garantida',
      description: 'Reduza até 70% da sua conta de energia com nossa tecnologia solar avançada e eficiente.'
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade',
      description: 'Contribua para um planeta mais limpo utilizando energia 100% renovável e livre de emissões.'
    },
    {
      icon: '⚡',
      title: 'Instalação rápida',
      description: 'Sistema instalado em até 30 dias com toda documentação e homologação incluída no serviço.'
    },
    {
      icon: '🛡️',
      title: 'Garantia total',
      description: 'Equipamentos com garantia de 25 anos e suporte técnico especializado sempre disponível.'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Vantagens da assinatura de energia
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;