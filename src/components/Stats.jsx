const Stats = () => {
  const stats = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: 'MAIS DE +1000 ALUNOS',
      subtitle: 'MÉTODO VALIDADO',
      iconColor: 'text-indigo-400',
      iconBgColor: 'bg-indigo-400',
      accentColor: 'border-indigo-500/20'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'AULAS',
      subtitle: 'AO VIVO',
      iconColor: 'text-green-400',
      iconBgColor: 'bg-green-400',
      accentColor: 'border-green-500/20'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'FLUÊNCIA EM TEMPO RECORDE',
      subtitle: 'APRENDIZADO ACELERADO',
      iconColor: 'text-yellow-400',
      iconBgColor: 'bg-yellow-400',
      accentColor: 'border-yellow-500/20'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: 'CERTIFICADOS',
      subtitle: 'RECONHECIDO PELO MERCADO',
      iconColor: 'text-purple-400',
      iconBgColor: 'bg-purple-400',
      accentColor: 'border-purple-500/20'
    }
  ]

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br from-gray-800/90 via-gray-800/70 to-gray-800/90 backdrop-blur-sm rounded-3xl p-10 border-2 ${stat.accentColor} shadow-2xl`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent ${stat.iconColor} opacity-30 rounded-t-3xl`}></div>
                  
                  {/* Icon container */}
                  <div className="flex justify-center mb-8">
                    <div className={`relative p-5 bg-gray-700/50 rounded-2xl border ${stat.accentColor}`}>
                      <div className={`${stat.iconColor}`}>
                        {stat.icon}
                      </div>
                      {/* Icon accent dot */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 ${stat.iconBgColor} rounded-full opacity-60`}></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                      {stat.title}
                    </h3>
                    
                    {/* Divider */}
                    <div className={`h-px w-20 mx-auto bg-gradient-to-r from-transparent via-current to-transparent ${stat.iconColor} opacity-40`}></div>
                    
                    {/* Subtitle */}
                    <p className="text-lg text-gray-300 font-semibold tracking-wide">
                      {stat.subtitle}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className={`absolute top-6 left-6 w-1.5 h-1.5 ${stat.iconBgColor} rounded-full opacity-40`}></div>
                  <div className={`absolute top-6 right-6 w-1.5 h-1.5 ${stat.iconBgColor} rounded-full opacity-40`}></div>
                  <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 ${stat.iconBgColor} rounded-full opacity-40`}></div>
                  <div className={`absolute bottom-6 right-6 w-1.5 h-1.5 ${stat.iconBgColor} rounded-full opacity-40`}></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent ${stat.iconColor} opacity-20 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

