import React from 'react';
import { AI_FEATURES } from '../../services/ai/features';
import { Button } from '../ui/Button';
export function AIFeatureSelector({ context, onSelect }) {
    const features = AI_FEATURES[context] || [];
    return (<div className="grid grid-cols-2 gap-2 p-2">
      {features.map((feature) => (<Button key={feature.id} variant="outline" className="text-left" onClick={() => onSelect(feature.id, feature.prompt)}>
          <div>
            <div className="font-medium">{feature.name}</div>
            <div className="text-sm text-gray-500">{feature.description}</div>
          </div>
        </Button>))}
    </div>);
}
