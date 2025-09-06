const FAQSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Ficou alguma dúvida?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Tire suas dúvidas sobre energia solar
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ainda para tirar dúvidas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe de especialistas está pronta para te ajudar com todas as informações sobre energia solar.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-md">
                Falar com Especialista
              </button>
              <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
                <span>📧 contato@ecosolar.com.br</span>
                <span>•</span>
                <span>📱 (11) 9999-8888</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;