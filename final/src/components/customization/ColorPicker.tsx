import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export const ColorPicker = ({ selectedColor, onColorChange }: ColorPickerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const presetColors = [
    { name: 'Arctic White', value: '#ffffff', gradient: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' },
    { name: 'Midnight Black', value: '#0d1117', gradient: 'linear-gradient(135deg, #0d1117 0%, #21262d 100%)' },
    { name: 'Racing Red', value: '#dc2626', gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)' },
    { name: 'Electric Blue', value: '#2563eb', gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' },
    { name: 'Emerald Green', value: '#059669', gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' },
    { name: 'Sunset Orange', value: '#ea580c', gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)' },
    { name: 'Royal Purple', value: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)' },
    { name: 'Chrome Silver', value: '#6b7280', gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)' },
    { name: 'Carbon Fiber', value: '#374151', gradient: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' },
    { name: 'Gold Metallic', value: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' },
  ];

  return (
    <Card className="glass-morphism border-border/50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Paint Color</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>

        {/* Selected Color Display */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg border-2 border-border shadow-elevated transition-automotive"
              style={{ 
                background: presetColors.find(c => c.value === selectedColor)?.gradient || selectedColor 
              }}
            />
            <div>
              <p className="font-medium text-foreground">
                {presetColors.find(c => c.value === selectedColor)?.name || 'Custom Color'}
              </p>
              <p className="text-sm text-muted-foreground">{selectedColor}</p>
            </div>
          </div>
        </div>

        {/* Color Swatches Grid */}
        <div className={`grid transition-all duration-300 ${
          isExpanded ? 'grid-cols-5 gap-2' : 'grid-cols-3 gap-3'
        }`}>
          {presetColors.slice(0, isExpanded ? presetColors.length : 6).map((color) => (
            <button
              key={color.value}
              onClick={() => onColorChange(color.value)}
              className={`
                aspect-square rounded-lg border-2 transition-automotive hover:scale-105 hover:shadow-primary-glow
                ${selectedColor === color.value 
                  ? 'border-primary shadow-primary-glow' 
                  : 'border-border hover:border-primary/50'
                }
              `}
              style={{ background: color.gradient }}
              title={color.name}
            />
          ))}
        </div>

        {/* Custom Color Input */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Custom Color
            </label>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-full h-10 rounded-md border border-border bg-transparent cursor-pointer transition-automotive hover:border-primary/50"
            />
          </div>
        )}
      </div>
    </Card>
  );
};