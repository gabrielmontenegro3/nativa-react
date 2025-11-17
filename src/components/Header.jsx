import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50 overflow-visible">
      <nav className="container mx-auto px-2 py-5">
        <div className="relative flex items-center justify-center">
          <a href="#inicio" className="absolute left-0 flex items-center">
            <img 
              src="/LOGO NATIVA TRANSPARENTE.png" 
              alt="Nativa Logo" 
              className="h-24 md:h-36 lg:h-40 w-auto"
            />
          </a>
          
          {/* Desktop Menu - Centralizado */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Cursos com Dropdown */}
            <div 
              className="relative z-50"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center space-x-3 text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="24" height="3.2" fill="#B22234"/>
                    <rect x="0" y="3.2" width="24" height="3.2" fill="#FFFFFF"/>
                    <rect x="0" y="6.4" width="24" height="3.2" fill="#B22234"/>
                    <rect x="0" y="9.6" width="24" height="3.2" fill="#FFFFFF"/>
                    <rect x="0" y="12.8" width="24" height="3.2" fill="#B22234"/>
                    <rect x="0" y="16" width="24" height="3.2" fill="#FFFFFF"/>
                    <rect x="0" y="19.2" width="24" height="4.8" fill="#B22234"/>
                    <rect x="0" y="0" width="9.6" height="9.6" fill="#3C3B6E"/>
                    <circle cx="2.4" cy="2.4" r="0.4" fill="#FFFFFF"/>
                    <circle cx="4.8" cy="2.4" r="0.4" fill="#FFFFFF"/>
                    <circle cx="7.2" cy="2.4" r="0.4" fill="#FFFFFF"/>
                    <circle cx="2.4" cy="4.8" r="0.4" fill="#FFFFFF"/>
                    <circle cx="4.8" cy="4.8" r="0.4" fill="#FFFFFF"/>
                    <circle cx="7.2" cy="4.8" r="0.4" fill="#FFFFFF"/>
                    <circle cx="2.4" cy="7.2" r="0.4" fill="#FFFFFF"/>
                    <circle cx="4.8" cy="7.2" r="0.4" fill="#FFFFFF"/>
                    <circle cx="7.2" cy="7.2" r="0.4" fill="#FFFFFF"/>
                  </svg>
                </div>
                <span>Cursos</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isCoursesOpen && (
                <div className="absolute top-full left-0 pt-1 w-56 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3 dropdown-enter overflow-hidden">
                    <div className="px-2">
                    <a href="#intensivo" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 group">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Intensivo</span>
                    </a>
                    <a href="#turma" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 group">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Em turma</span>
                    </a>
                    <a href="#particular" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 group">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Particular</span>
                    </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fale conosco */}
            <a
              href="#contato"
              className="flex items-center space-x-3 text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium hover:-translate-y-1"
            >

              <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span>Fale conosco</span>
            </a>

            {/* Login */}
            <a
              href="#login"
              className="flex items-center space-x-3 text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-indigo-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span>Login</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <div className="space-y-1">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full flex items-center space-x-2 py-2 text-gray-800 hover:text-indigo-600 font-medium"
              >
                <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="0" y="0" width="24" height="8" fill="#B22234"/>
                    <rect x="0" y="8" width="24" height="8" fill="#FFFFFF"/>
                    <rect x="0" y="16" width="24" height="8" fill="#B22234"/>
                    <rect x="0" y="0" width="9" height="5" fill="#3C3B6E"/>
                  </svg>
                </div>
                <span>Cursos</span>
              </button>
              {isCoursesOpen && (
                <div className="pl-10 space-y-1">
                  <a href="#intensivo" className="block py-2 text-gray-700 hover:text-indigo-600">
                    Intensivo
                  </a>
                  <a href="#turma" className="block py-2 text-gray-700 hover:text-indigo-600">
                    Em turma
                  </a>
                  <a href="#particular" className="block py-2 text-gray-700 hover:text-indigo-600">
                    Particular
                  </a>
                </div>
              )}
            </div>
            <a href="#contato" className="flex items-center space-x-2 py-2 text-gray-800 hover:text-indigo-600 font-medium">
              <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span>Fale conosco</span>
            </a>
            <a href="#login" className="flex items-center space-x-2 py-2 text-gray-800 hover:text-indigo-600 font-medium">
              <div className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-indigo-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span>Login</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
