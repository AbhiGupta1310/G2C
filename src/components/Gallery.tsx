import React, { useState } from 'react';
import { Camera, Play, X, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    {
      src: 'https://images.pexels.com/photos/1634292/pexels-photo-1634292.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Gold jewelry testing process',
      title: 'Professional Gold Testing'
    },
    {
      src: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Customer with gold jewelry',
      title: 'Happy Customer'
    },
    {
      src: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Gold coins collection',
      title: 'Gold Coins We Buy'
    },
    {
      src: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Silver jewelry and items',
      title: 'Silver Collection'
    },
    {
      src: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Diamond evaluation',
      title: 'Diamond Assessment'
    },
    {
      src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      alt: 'Store interior',
      title: 'Our Store Interior'
    }
  ];

  const videos = [
    {
      thumbnail: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      title: 'How We Test Gold Purity',
      duration: '2:30'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1634292/pexels-photo-1634292.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      title: 'Customer Testimonial - Priya',
      duration: '1:15'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      title: 'Store Tour & Process',
      duration: '3:45'
    }
  ];

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const openPhoto = (src: string) => {
    setSelectedMedia(src);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-400/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Gallery & Videos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            See Our <span className="shimmer-text">Work in Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Take a look at our professional process, happy customers, and the variety of precious items we buy. Transparency is our priority.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-full p-1">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📸 Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎥 Videos
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => openPhoto(photo.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold mb-2">{photo.title}</h4>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors duration-300">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900">
                  <h4 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Highlights */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Transparent Process</span>
            </h3>
            <p className="text-gray-400">Every step documented for your peace of mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Photo Documentation</h4>
              <p className="text-gray-400 text-sm">We photograph your items before and after testing for complete transparency.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Video Recording</h4>
              <p className="text-gray-400 text-sm">Watch the entire testing process on our screens. Nothing hidden.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Instant Reports</h4>
              <p className="text-gray-400 text-sm">Get detailed reports of purity, weight, and valuation immediately.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-black border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Want to See More?</h4>
            <p className="text-gray-400 mb-6">
              Visit our store to see our complete setup and watch the process live. We're always happy to show our customers how we work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://www.youtube.com/@get2cash', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🎥 YouTube Channel
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/get2cash', '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📸 Instagram
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Size Images */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedMedia}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;