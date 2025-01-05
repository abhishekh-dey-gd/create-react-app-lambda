import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42',
    title: 'Street Dog Rescue',
    description: 'Emergency rescue operation',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5',
    title: 'Medical Camp',
    description: 'Free veterinary services',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd',
    title: 'Community Event',
    description: 'Awareness workshop',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c',
    title: 'Animal Care',
    description: 'Daily feeding program',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    title: 'Rehabilitation',
    description: 'Recovery success story',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580',
    title: 'Adoption Drive',
    description: 'Finding forever homes',
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GalleryItem
            key={item.id}
            {...item}
            onClick={() => setSelectedImage(item.id)}
          />
        ))}
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        images={galleryItems}
        currentImageId={selectedImage}
        onNavigate={setSelectedImage}
      />
    </>
  );
}