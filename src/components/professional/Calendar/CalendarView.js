import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Users, Video, MapPin } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { Button } from '../../ui/Button';
import { EventModal } from './EventModal/EventModal';
import { EventDetails } from './EventDetails';
import { useCalendar } from '../../../hooks/useCalendar';
export function CalendarView() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { events, isLoading, createEvent, updateEvent, deleteEvent } = useCalendar();
    const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate)
    });
    const firstDayOfMonth = startOfMonth(currentDate).getDay();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getEventsForDate = (date) => {
        return events?.filter(event => {
            const eventDate = new Date(event.startTime);
            return (eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear());
        });
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Calendar" }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", icon: ChevronLeft, onClick: handlePreviousMonth }), _jsx("span", { className: "text-lg font-medium", children: format(currentDate, 'MMMM yyyy') }), _jsx(Button, { variant: "outline", size: "sm", icon: ChevronRight, onClick: handleNextMonth })] })] }), _jsx(Button, { variant: "primary", icon: Plus, onClick: () => {
                            setSelectedEvent(null);
                            setIsEventModalOpen(true);
                        }, children: "New Event" })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "grid grid-cols-7 gap-px bg-gray-200", children: [weekDays.map(day => (_jsx("div", { className: "bg-gray-50 p-2 text-center text-sm font-medium text-gray-500", children: day }, day))), Array.from({ length: firstDayOfMonth }).map((_, index) => (_jsx("div", { className: "bg-white p-2 min-h-[100px]" }, `empty-${index}`))), daysInMonth.map(day => {
                                        const dayEvents = getEventsForDate(day);
                                        return (_jsxs("div", { className: `bg-white p-2 min-h-[100px] cursor-pointer hover:bg-gray-50
                      ${!isSameMonth(day, currentDate) ? 'text-gray-400' : ''}
                      ${isToday(day) ? 'bg-blue-50' : ''}`, onClick: () => setSelectedDate(day), children: [_jsx("div", { className: "font-medium mb-1", children: format(day, 'd') }), _jsx("div", { className: "space-y-1", children: dayEvents?.map(event => (_jsx("div", { onClick: (e) => {
                                                            e.stopPropagation();
                                                            setSelectedEvent(event);
                                                        }, className: `text-xs p-1 rounded truncate ${event.type === 'meeting'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : event.type === 'deadline'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-green-100 text-green-800'}`, children: event.title }, event.id))) })] }, day.toISOString()));
                                    })] }) }) }), _jsx("div", { className: "w-80", children: _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Events" }), _jsx("div", { className: "space-y-4", children: events?.slice(0, 5).map(event => (_jsxs("div", { className: "border-l-4 border-blue-500 pl-4 py-2 cursor-pointer hover:bg-gray-50", onClick: () => setSelectedEvent(event), children: [_jsx("h3", { className: "font-medium text-gray-900", children: event.title }), _jsxs("div", { className: "mt-1 space-y-1", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), format(new Date(event.startTime), 'h:mm a')] }), event.attendees && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Users, { className: "h-4 w-4 mr-1" }), event.attendees.length, " attendees"] })), event.isVirtual && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Virtual Meeting"] })), event.location && (_jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), event.location] }))] })] }, event.id))) })] }) })] }), _jsx(EventModal, { isOpen: isEventModalOpen, onClose: () => setIsEventModalOpen(false), event: selectedEvent, onSubmit: selectedEvent ? updateEvent : createEvent, selectedDate: selectedDate }), selectedEvent && (_jsx(EventDetails, { event: selectedEvent, onClose: () => setSelectedEvent(null), onEdit: () => setIsEventModalOpen(true), onDelete: deleteEvent }))] }));
}
