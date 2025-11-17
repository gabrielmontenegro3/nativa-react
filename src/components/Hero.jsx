import { useState, useRef } from 'react'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      setHasEnded(false)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setHasEnded(true)
  }

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
      setHasEnded(false)
    }
  }

  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna do Texto */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Bem-vindo a{' '}
                <span className="text-indigo-400">Nativa English School</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Um site moderno e responsivo construído com React, Vite e Tailwind CSS.
                Descubra uma experiência de usuário excepcional com design elegante e
                performance otimizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#recursos"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Explorar Recursos
                </a>
                <a
                  href="#contato"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-gray-100 transition-colors text-center"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          
            {/* Coluna do Vídeo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
                  <video
                    ref={videoRef}
                    className="w-full h-auto"
                    muted
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={handleEnded}
                  >
                    <source src="/Vídeo 02.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                  
                  {/* Overlay com Botão de Play */}
                  {!isPlaying && !hasEnded && (
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity hover:bg-opacity-50"
                      onClick={handlePlay}
                    >
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-all duration-300">
                        <svg 
                          className="w-16 h-16" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Overlay "Fale conosco" quando o vídeo termina */}
                  {hasEnded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 bg-opacity-95 flex flex-col items-center justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">
                        Fale conosco
                      </h3>
                      <a
                        href="#contato"
                        className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        onClick={handleReplay}
                      >
                        Entre em Contato
                      </a>
                      <button
                        onClick={handleReplay}
                        className="mt-4 text-white hover:text-indigo-200 transition-colors text-sm underline"
                      >
                        Assistir novamente
                      </button>
                    </div>
                  )}

                  {/* Controles customizados quando o vídeo está tocando */}
                  {isPlaying && !hasEnded && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={handlePause}
                    >
                      <div className="bg-black bg-opacity-50 rounded-full p-4">
                        <svg 
                          className="w-12 h-12 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

