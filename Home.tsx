import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=2000"
          alt="Traditional clothing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Traditional Elegance</h1>
            <p className="text-xl mb-8">Discover our collection of authentic traditional clothing</p>
            <Link
              to="/products"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600101592343-c1f6d954392a?auto=format&fit=crop&q=80&w=800"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Link
                to="/products?category=men"
                className="text-white text-2xl font-bold hover:underline"
              >
                Men's Collection
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1609097828576-3b620e86039e?auto=format&fit=crop&q=80&w=800"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Link
                to="/products?category=women"
                className="text-white text-2xl font-bold hover:underline"
              >
                Women's Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};