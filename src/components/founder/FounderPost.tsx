import React from 'react';
import { Calendar, Heart } from 'lucide-react';

interface PostProps {
  title: string;
  date: string;
  content: string;
  likes: number;
}

export default function FounderPost({ title, date, content, likes }: PostProps) {
  return (
    <article className="glass-card rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
        <span className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </span>
        <span className="flex items-center">
          <Heart className="h-4 w-4 mr-2 text-rose-400" />
          {likes} likes
        </span>
      </div>
      <p className="text-gray-300 whitespace-pre-line">{content}</p>
    </article>
  );
}