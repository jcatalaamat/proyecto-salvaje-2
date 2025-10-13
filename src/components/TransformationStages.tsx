import { ArrowRight } from 'lucide-react';

interface TransformationStagesProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const TransformationStages = ({ translations }: TransformationStagesProps) => {
  const t = translations.transformation;

  const stageColors = [
    'from-red-500 to-orange-500',
    'from-orange-500 to-yellow-500',
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500'
  ];

  return (
    <div id="transformation" className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t.title}
          </h2>
        </div>

        {/* Stages Timeline */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 opacity-20 -translate-y-1/2"></div>

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {t.stages.map((stage: any, index: number) => (
              <div key={index} className="relative">
                {/* Stage Card */}
                <div className="group relative">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stageColors[index]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                  {/* Card Content */}
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all h-full">
                    {/* Stage Number Circle */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${stageColors[index]} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                        {/* Pulsing Ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${stageColors[index]} animate-ping opacity-20`}></div>
                      </div>
                    </div>

                    {/* Phase Name */}
                    <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${stageColors[index]} bg-clip-text text-transparent`}>
                      {stage.phase}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-center leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Between Stages (Desktop) */}
                {index < t.stages.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Geometry Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-orange-500 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TransformationStages;
