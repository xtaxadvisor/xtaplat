import React, { useState } from 'react';
import { Plus, Calendar, Clock, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { TaskForm } from './TaskForm';
import { useTaskStore } from '../../lib/store';
import { useNotificationStore } from '../../lib/store';

export function TaskManager() {
  const { tasks, addTask, moveTask, deleteTask } = useTaskStore();
  const { addNotification } = useNotificationStore();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggingId(taskId);
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: 'pending' | 'in-progress' | 'completed') => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    moveTask(taskId, status);
    setDraggingId(null);
    addNotification('Task status updated', 'success');
  };

  const handleCreateTask = (data: any) => {
    addTask({
      ...data,
      status: 'pending'
    });
    setIsModalOpen(false);
    addNotification('Task created successfully', 'success');
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
    addNotification('Task deleted successfully', 'success');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getColumnIcon = (column: string) => {
    switch (column) {
      case 'pending':
        return AlertCircle;
      case 'in-progress':
        return Clock;
      case 'completed':
        return CheckCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        <Button variant="primary" icon={Plus} onClick={() => setIsModalOpen(true)}>
          New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['pending', 'in-progress', 'completed'].map((column) => {
          const ColumnIcon = getColumnIcon(column);
          return (
            <div
              key={column}
              className="bg-white rounded-lg shadow"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column as 'pending' | 'in-progress' | 'completed')}
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <ColumnIcon className="h-5 w-5 text-gray-500" />
                  <h3 className="text-lg font-medium text-gray-900 capitalize">
                    {column === 'pending' ? 'To Do' : column}
                  </h3>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {tasks.filter((task) => task.status === column).length}
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-4 min-h-[200px]">
                {tasks
                  .filter((task) => task.status === column)
                  .map((task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, task.id)}
                      className={`bg-gray-50 rounded-lg p-4 space-y-3 cursor-move
                        ${draggingId === task.id ? 'opacity-50' : ''}
                        hover:shadow-md transition-shadow duration-200`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-gray-900">
                          {task.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                              task.priority
                            )}`}
                          >
                            {task.priority}
                          </span>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{task.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {task.dueDate}
                        </div>
                        {task.assignedTo && (
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs text-blue-600">
                                {task.assignedTo.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Task"
      >
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}