import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MaterialSelectorProps {
  selectedMaterial: 'solid' | 'metallic' | 'matte';
  onMaterialChange: (material: 'solid' | 'metallic' | 'matte') => void;
}

export const MaterialSelector = ({ selectedMaterial, onMaterialChange }: MaterialSelectorProps) => {
  const materials = [
    {
      type: 'solid' as const,
      name: 'Solid',
      description: 'Classic solid paint finish',
      preview: 'bg-gradient-to-br from-gray-400 to-gray-600',
      characteristics: ['Standard finish', 'Good coverage', 'Cost effective']
    },
    {
      type: 'metallic' as const,
      name: 'Metallic',
      description: 'Shimmering metallic particles',
      preview: 'bg-gradient-metallic',
      characteristics: ['Reflective surface', 'Premium look', 'Light play effects']
    },
    {
      type: 'matte' as const,
      name: 'Matte',
      description: 'Non-reflective satin finish',
      preview: 'bg-gradient-to-br from-gray-600 to-gray-800',
      characteristics: ['No gloss finish', 'Modern aesthetic', 'Unique appearance']
    }
  ];

  return (
    <Card className="glass-morphism border-border/50">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">Paint Finish</h3>
        
        <div className="space-y-3">
          {materials.map((material) => (
            <button
              key={material.type}
              onClick={() => onMaterialChange(material.type)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-automotive hover:shadow-elevated
                ${selectedMaterial === material.type
                  ? 'border-primary shadow-primary-glow bg-primary/5'
                  : 'border-border hover:border-primary/50 bg-card/50'
                }
              `}
            >
              <div className="flex items-center gap-4">
                {/* Material Preview */}
                <div className={`w-16 h-16 rounded-lg ${material.preview} border border-border/30`} />
                
                {/* Material Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{material.name}</h4>
                    {selectedMaterial === material.type && (
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {material.characteristics.map((char, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Additional Options */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <Button variant="outline" size="sm" className="w-full">
            View Finish Samples
          </Button>
        </div>
      </div>
    </Card>
  );
};