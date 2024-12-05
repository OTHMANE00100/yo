import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Traditional Attire</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-amber-200">Home</Link>
            <Link to="/products" className="hover:text-amber-200">Products</Link>
            <Link to="/contact" className="hover:text-amber-200">Contact</Link>
            <Link to="/cart" className="hover:text-amber-200">
              <ShoppingBag className="w-6 h-6" />
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-amber-700">Home</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-amber-700">Products</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-amber-700">Contact</Link>
            <Link to="/cart" className="block px-3 py-2 hover:bg-amber-700">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
};