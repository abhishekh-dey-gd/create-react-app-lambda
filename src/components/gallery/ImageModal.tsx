import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Image[];
  currentImageId: number | null;
  onNavigate: (id: number) => void;
}

export default function ImageModal({ isOpen, onClose, images, currentImageId, onNavigate }: ImageModalProps) {
  const currentIndex = images.findIndex(img => img.id === currentImageId);
  
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(images[currentIndex - 1].id);
    }
  }, [currentIndex, images, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(images[currentIndex + 1].id);
    }
  }, [currentIndex, images, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, onClose]);

  if (!isOpen || currentImageId === null) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-20"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative aspect-video">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {currentIndex < images.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="mt-4 text-white">
          <h3 className="text-xl font-semibold">{currentImage.title}</h3>
          <p className="mt-2 text-gray-300">{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
}