import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  Users,
  Video,
  MapPin,
  Calendar as CalendarIcon
} from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { Button } from '../../ui/Button';
import { EventModal } from './EventModal';
import { EventDetails } from './EventDetails';
import { useCalendar } from '../../../hooks/useCalendar';

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const { events, isLoading, createEvent, updateEvent, deleteEvent } = useCalendar();

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  const firstDayOfMonth = startOfMonth(currentDate).getDay();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDate = (date: Date) => {
    return events?.filter(event => {
      const eventDate = new Date(event.startTime);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              icon={ChevronLeft}
              onClick={handlePreviousMonth}
            />
            <span className="text-lg font-medium">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            <Button
              variant="outline"
              size="sm"
              icon={ChevronRight}
              onClick={handleNextMonth}
            />
          </div>
        </div>
        <Button
          variant="primary"
          icon={Plus}
          onClick={() => {
            setSelectedEvent(null);
            setIsEventModalOpen(true);
          }}
        >
          New Event
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {weekDays.map(day => (
                <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="bg-white p-2 min-h-[100px]" />
              ))}
              {daysInMonth.map(day => {
                const dayEvents = getEventsForDate(day);
                return (
                  <div
                    key={day.toISOString()}
                    className={`bg-white p-2 min-h-[100px] cursor-pointer hover:bg-gray-50
                      ${!isSameMonth(day, currentDate) ? 'text-gray-400' : ''}
                      ${isToday(day) ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <div className="font-medium mb-1">{format(day, 'd')}</div>
                    <div className="space-y-1">
                      {dayEvents?.map(event => (
                        <div
                          key={event.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(event);
                          }}
                          className={`text-xs p-1 rounded truncate ${
                            event.type === 'meeting'
                              ? 'bg-blue-100 text-blue-800'
                              : event.type === 'deadline'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-80">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {events?.slice(0, 5).map(event => (
                <div
                  key={event.id}
                  className="border-l-4 border-blue-500 pl-4 py-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedEvent(event)}
                >
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {format(new Date(event.startTime), 'h:mm a')}
                    </div>
                    {event.attendees && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees.length} attendees
                      </div>
                    )}
                    {event.isVirtual && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Video className="h-4 w-4 mr-1" />
                        Virtual Meeting
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        event={selectedEvent}
        onSubmit={selectedEvent ? updateEvent : createEvent}
        selectedDate={selectedDate}
      />

      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onEdit={() => setIsEventModalOpen(true)}
          onDelete={deleteEvent}
        />
      )}
    </div>
  );
}