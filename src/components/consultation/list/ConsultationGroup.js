import React from 'react';
import { ConsultationCard } from '../ConsultationCard';
export function ConsultationGroup({ title, consultations, onJoin, onCancel, onReschedule }) {
    return (<div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {consultations.map(consultation => (<ConsultationCard key={consultation.id} consultation={consultation} onJoin={onJoin ? () => onJoin(consultation) : undefined} onCancel={onCancel ? () => onCancel(consultation) : undefined} onReschedule={onReschedule ? () => onReschedule(consultation) : undefined}/>))}
      </div>
    </div>);
}