const Pricing = () => {
  const plans = [
    {
      id: 'intensivo',
      name: 'Intensivo',
      icon: (
        <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconGradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      cardGradient: 'from-gray-800 via-gray-800 to-gray-800',
      borderColor: 'border-yellow-500/30',
      description: 'Curso intensivo para aprendizado acelerado',
      features: [
        'Aulas concentradas',
        'Aprendizado rápido',
        'Foco total no conteúdo',
        'Suporte dedicado'
      ],
      price: 'R$ 599',
      popular: false
    },
    {
      id: 'turma',
      name: 'Em Turma',
      icon: (
        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconGradient: 'from-blue-400 via-blue-500 to-indigo-500',
      cardGradient: 'from-indigo-900/50 via-gray-800 to-gray-800',
      borderColor: 'border-indigo-500/50',
      description: 'Aprenda em grupo com outros alunos',
      features: [
        'Aulas em grupo',
        'Interação com colegas',
        'Horários flexíveis',
        'Material completo'
      ],
      price: 'R$ 100',
      popular: true
    },
    {
      id: 'particular',
      name: 'Particular',
      icon: (
        <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      iconGradient: 'from-purple-400 via-purple-500 to-pink-500',
      cardGradient: 'from-gray-800 via-gray-800 to-gray-800',
      borderColor: 'border-purple-500/30',
      description: 'Aulas particulares personalizadas',
      features: [
        'Atenção individual',
        'Horários flexíveis',
        'Conteúdo personalizado',
        'Suporte dedicado'
      ],
      price: 'R$ 280',
      popular: false
    }
  ]

  return (
    <section id="precos" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Preços</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Nossos Planos
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para você e comece sua jornada de aprendizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              )}

              <div
                className={`relative bg-gradient-to-br ${plan.cardGradient} rounded-3xl p-8 lg:p-10 border-2 ${plan.borderColor} shadow-2xl ${
                  plan.popular ? 'ring-4 ring-indigo-500/50 ring-offset-2 ring-offset-gray-900' : ''
                } backdrop-blur-sm`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-2 rounded-full shadow-lg">
                      <span className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Mais Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Icon container */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className={`relative mb-6 p-6 bg-gradient-to-br ${plan.iconGradient} rounded-2xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <div className="relative">
                      {plan.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xs">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        {plan.price.split(' ')[0]}
                      </span>
                      <span className="text-2xl text-gray-400 font-semibold">
                        {plan.price.split(' ')[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="mb-10 space-y-5">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-200 text-base font-medium leading-relaxed flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500'
                      : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg hover:from-gray-600 hover:to-gray-500'
                  } transform hover:scale-[1.02] active:scale-[0.98]`}
                >
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

