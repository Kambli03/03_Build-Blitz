import { useState } from 'react';
import { CarViewer, CarConfiguration } from '@/components/3d/CarViewer';
import { ColorPicker } from '@/components/customization/ColorPicker';
import { MaterialSelector } from '@/components/customization/MaterialSelector';
import { EnvironmentSelector } from '@/components/customization/EnvironmentSelector';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const CarConfigurator = () => {
  const [config, setConfig] = useState<CarConfiguration>({
    color: '#2563eb',
    material: 'metallic',
    environment: 'showroom'
  });

  const handleConfigChange = (newConfig: Partial<CarConfiguration>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfiguration = () => {
    setConfig({
      color: '#2563eb',
      material: 'metallic',
      environment: 'showroom'
    });
  };

  const saveConfiguration = () => {
    // In a real app, this would save to backend/localStorage
    console.log('Saving configuration:', config);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="text-center mb-8 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Design Your Dream Car
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience real-time 3D visualization as you customize every detail. 
          See your choices come to life with photorealistic rendering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3D Viewer - Main Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 glass-morphism border-border/50">
            <div className="aspect-video w-full">
              <CarViewer
                config={config}
                onConfigChange={handleConfigChange}
              />
            </div>
          </Card>

          {/* Configuration Summary */}
          <Card className="p-6 glass-morphism border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">Current Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full border-2 border-border"
                  style={{ backgroundColor: config.color }}
                />
                <div>
                  <p className="text-sm font-medium text-foreground">Color</p>
                  <p className="text-xs text-muted-foreground">{config.color}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Material</p>
                <p className="text-xs text-muted-foreground capitalize">{config.material} finish</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Environment</p>
                <p className="text-xs text-muted-foreground capitalize">{config.environment} lighting</p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button 
                onClick={saveConfiguration}
                className="bg-gradient-primary hover:shadow-primary-glow transition-automotive"
              >
                Save Configuration
              </Button>
              <Button 
                variant="outline" 
                onClick={resetConfiguration}
                className="hover:bg-accent/20 transition-automotive"
              >
                Reset
              </Button>
            </div>
          </Card>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          <Tabs defaultValue="color" className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-morphism border border-border/50">
              <TabsTrigger value="color" className="data-[state=active]:bg-primary/20">
                Color
              </TabsTrigger>
              <TabsTrigger value="material" className="data-[state=active]:bg-primary/20">
                Material
              </TabsTrigger>
              <TabsTrigger value="environment" className="data-[state=active]:bg-primary/20">
                Environment
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="color" className="animate-fade-in-up">
                <ColorPicker
                  selectedColor={config.color}
                  onColorChange={(color) => handleConfigChange({ color })}
                />
              </TabsContent>

              <TabsContent value="material" className="animate-fade-in-up">
                <MaterialSelector
                  selectedMaterial={config.material}
                  onMaterialChange={(material) => handleConfigChange({ material })}
                />
              </TabsContent>

              <TabsContent value="environment" className="animate-fade-in-up">
                <EnvironmentSelector
                  selectedEnvironment={config.environment}
                  onEnvironmentChange={(environment) => handleConfigChange({ environment })}
                />
              </TabsContent>
            </div>
          </Tabs>

          {/* Quick Actions */}
          <Card className="p-4 glass-morphism border-border/50">
            <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => handleConfigChange({ color: '#dc2626', material: 'metallic' })}
              >
                🏎️ Racing Red Metallic
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => handleConfigChange({ color: '#0d1117', material: 'matte' })}
              >
                🖤 Stealth Black Matte
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => handleConfigChange({ color: '#6b7280', material: 'metallic' })}
              >
                ⚡ Chrome Silver
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};