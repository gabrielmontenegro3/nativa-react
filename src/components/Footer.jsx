const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nativa React</h3>
            <p className="text-gray-400">
              Um site moderno construído com React, Vite e Tailwind CSS.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tecnologias</h4>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>JavaScript ES6+</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nativa React. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

