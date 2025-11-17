import { useState } from 'react'

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {
      number: '1',
      title: 'Curso Completo',
      description: 'Curso completo com aulas 100% online, gravadas e disponíveis 24/7. Aprenda no seu ritmo com material completo e suporte dedicado.',
      color: 'purple',
      bgGradient: 'from-gray-800/90 via-gray-800/70 to-gray-800/90',
      numberColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      hoverBg: 'bg-gray-800/90'
    },
    {
      number: '2',
      title: 'App de Memorização',
      description: 'Aplicativo exclusivo de memorização de idiomas. Tecnologia avançada para acelerar seu aprendizado e fixar o conteúdo de forma eficiente.',
      color: 'pink',
      bgGradient: 'from-gray-800/90 via-gray-800/70 to-gray-800/90',
      numberColor: 'text-pink-400',
      borderColor: 'border-pink-500/20',
      hoverBg: 'bg-gray-800/90'
    },
    {
      number: '3',
      title: 'Aulas de Conversação',
      description: 'Pratique conversação com aulas individuais ou em grupo. Horários flexíveis e professores nativos para desenvolver sua fluência.',
      color: 'blue',
      bgGradient: 'from-gray-800/90 via-gray-800/70 to-gray-800/90',
      numberColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      hoverBg: 'bg-gray-800/90'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl border-2 ${feature.borderColor} transition-all duration-500 ease-in-out cursor-pointer backdrop-blur-sm ${
                  hoveredCard === index 
                    ? 'shadow-2xl scale-[1.02] z-10' 
                    : 'shadow-md hover:shadow-lg'
                } ${feature.bgGradient}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`p-8 md:p-10 transition-all duration-500 ${
                  hoveredCard === index ? 'min-h-[400px]' : 'min-h-[200px]'
                }`}>
                  {/* Number and Title - Always Visible */}
                  <div className="flex items-start gap-6">
                    <div className={`text-8xl md:text-9xl font-black ${feature.numberColor} leading-none transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110' : ''
                    }`}>
                      {feature.number}
                    </div>
                    <div className="flex-1 pt-4">
                      <h3 className={`text-3xl md:text-4xl font-bold text-white transition-all duration-500 ${
                        hoveredCard === index ? 'mb-6' : ''
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description and Visual - Only visible on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredCard === index 
                      ? 'max-h-[800px] opacity-100 mt-6' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Description */}
                      <div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Visual placeholder */}
                      <div className={`rounded-xl bg-gray-800 p-4 transition-all duration-500 delay-100 ${
                        hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-xl">
                          <div className="text-white text-center">
                            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">Visual do recurso</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

