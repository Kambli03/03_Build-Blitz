import { Card } from '@/components/ui/card';

interface EnvironmentSelectorProps {
  selectedEnvironment: 'showroom' | 'sunset' | 'studio';
  onEnvironmentChange: (environment: 'showroom' | 'sunset' | 'studio') => void;
}

export const EnvironmentSelector = ({ selectedEnvironment, onEnvironmentChange }: EnvironmentSelectorProps) => {
  const environments = [
    {
      type: 'showroom' as const,
      name: 'Showroom',
      description: 'Professional automotive showroom lighting',
      icon: '🏢',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-900/40'
    },
    {
      type: 'sunset' as const,
      name: 'Sunset',
      description: 'Warm golden hour lighting',
      icon: '🌅',
      gradient: 'bg-gradient-to-br from-orange-400/20 to-red-600/40'
    },
    {
      type: 'studio' as const,
      name: 'Studio',
      description: 'Clean white studio environment',
      icon: '💡',
      gradient: 'bg-gradient-to-br from-gray-100/20 to-gray-300/40'
    }
  ];

  return (
    <Card className="glass-morphism border-border/50">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">Environment</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {environments.map((env) => (
            <button
              key={env.type}
              onClick={() => onEnvironmentChange(env.type)}
              className={`
                relative p-4 rounded-lg border-2 text-left transition-automotive overflow-hidden
                ${selectedEnvironment === env.type
                  ? 'border-primary shadow-primary-glow'
                  : 'border-border hover:border-primary/50'
                }
              `}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${env.gradient} opacity-50`} />
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <div className="text-2xl">{env.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{env.name}</h4>
                    {selectedEnvironment === env.type && (
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{env.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Environment Info */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="text-xs text-muted-foreground">
            Environment affects lighting, reflections, and overall mood of your vehicle visualization.
          </div>
        </div>
      </div>
    </Card>
  );
};