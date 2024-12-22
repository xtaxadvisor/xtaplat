interface DateTimeSelectProps {
    date: string;
    time: string;
    onDateChange: (date: string) => void;
    onTimeChange: (time: string) => void;
}
export declare function DateTimeSelect({ date, time, onDateChange, onTimeChange }: DateTimeSelectProps): any;
export {};
