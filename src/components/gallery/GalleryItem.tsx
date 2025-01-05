import React from 'react';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function GalleryItem({ image, title, description, onClick }: GalleryItemProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}