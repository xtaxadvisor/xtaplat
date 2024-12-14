import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  Users,
  Video,
  MapPin
} from 'lucide-react';
import { Button } from '../ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'reminder';
  participants?: string[];
  location?: string;
  isVirtual?: boolean;
}

export function Calendar() {
  const [currentDate] = useState(new Date());
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Tax Planning Meeting',
      date: '2024-03-20',
      time: '10:00 AM',
      type: 'meeting',
      participants: ['John Doe', 'Sarah Smith'],
      isVirtual: true
    },
    {
      id: '2',
      title: 'Quarterly Filing Deadline',
      date: '2024-03-25',
      time: '11:30 AM',
      type: 'deadline'
    },
    {
      id: '3',
      title: 'Investment Review',
      date: '2024-03-22',
      time: '2:00 PM',
      type: 'meeting',
      location: 'Conference Room A'
    }
  ]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const generateCalendarDays = () => {
    const days = [];
    const previousMonthDays = firstDayOfMonth;
    
    // Previous month days
    for (let i = previousMonthDays - 1; i >= 0; i--) {
      days.push({ day: 0, isCurrentMonth: false });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    return days;
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarDays = generateCalendarDays();

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" icon={ChevronLeft} />
            <span className="text-lg font-medium">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <Button variant="outline" icon={ChevronRight} />
          </div>
        </div>
        <Button variant="primary" icon={Plus}>
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
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`bg-white p-2 min-h-[100px] ${
                    day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  <div className="font-medium mb-1">{day.day || ''}</div>
                  {day.isCurrentMonth && day.day > 0 && getEventsForDate(day.day).map(event => (
                    <div
                      key={event.id}
                      className={`text-xs p-1 mb-1 rounded ${
                        event.type === 'meeting'
                          ? 'bg-blue-100 text-blue-800'
                          : event.type === 'deadline'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-80">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                    {event.participants && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {event.participants.join(', ')}
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
    </div>
  );
}