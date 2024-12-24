import type { TriggerConfig } from '../../../../types/automation';
interface EventTriggerProps {
    config: TriggerConfig;
    onChange: (config: TriggerConfig) => void;
}
export declare function EventTrigger({ config, onChange }: EventTriggerProps): any;
export {};
