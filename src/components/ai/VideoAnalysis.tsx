import React from 'react';
import { Brain, Lightbulb, Target, BookOpen } from 'lucide-react';
import { useAI } from '../../hooks/useAI';
import { Button } from '../ui/Button';
import type { VideoClass } from '../../types/video';

interface VideoAnalysisProps {
  video: VideoClass;
}

export function VideoAnalysis({ video }: VideoAnalysisProps) {
  const { sendMessage, messages, isLoading } = useAI({
    context: 'student',
    enableAnalysis: true
  });

  const generateInsights = async () => {
    const prompt = `Analyze this educational video:
      Title: ${video.title}
      Description: ${video.description}
      Category: ${video.category}
      Tags: ${video.tags.join(', ')}
      
      Please provide:
      1. Key learning outcomes
      2. Who this course is best suited for
      3. Prerequisites or recommended background
      4. Related topics to explore`;

    await sendMessage(prompt);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Brain className="h-5 w-5 text-blue-600 mr-2" />
          AI Course Analysis
        </h3>
        <Button
          variant="outline"
          size="sm"
          icon={Lightbulb}
          onClick={generateInsights}
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Generate Insights'}
        </Button>
      </div>

      {messages.length > 0 && (
        <div className="space-y-4">
          {messages.map((message, index) => (
            message.role === 'assistant' && (
              <div key={index} className="prose max-w-none">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="text-sm font-medium text-blue-900">Learning Insights</h4>
                  </div>
                  <div className="text-sm text-blue-800 whitespace-pre-wrap">
                    {message.content}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {!messages.length && !isLoading && (
        <div className="text-center py-6">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">
            Click "Generate Insights" to get AI-powered analysis of this course
          </p>
        </div>
      )}
    </div>
  );
}