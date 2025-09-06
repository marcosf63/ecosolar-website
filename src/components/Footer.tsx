const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EcoSolar</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Energia solar sustentável para um futuro melhor. Transformando vidas através da energia limpa e renovável.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                contato@ecosolar.com.br
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                (11) 9999-8888
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; 2024 EcoSolar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;