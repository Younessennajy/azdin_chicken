import React, { useState } from 'react';
import logo from './../assets/logo.svg';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4  bg-white border-b shadow-sm" dir="rtl">
        <div className="flex items-center">
          <img src={logo} alt="شعار الدجاج الجيد" className="h-25 w-25 mr-2 -m-3" />
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <button onClick={() => scrollToSection('home')} className="text-green-500">الرئيسية</button>
          <button onClick={() => scrollToSection('farm-info')} className="text-black hover:text-green-500">معلومات المزرعة</button>
          <button onClick={() => scrollToSection('products')} className="text-black hover:text-green-500">المنتجات</button>
          <button onClick={() => scrollToSection('facts')} className="text-black hover:text-green-500">حقائق</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-black hover:text-green-500">الشهادات</button>
          <button onClick={() => scrollToSection('contact')} className="text-black hover:text-green-500">تواصل معنا</button>
        </div>

        {/* Mobile Sidebar toggle button */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={toggleSidebar}>
            <svg className="w-6 h-6 text-black hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg" dir="rtl">
          <div className="p-6">
            <button onClick={toggleSidebar} className="absolute top-4 left-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="mt-8 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-green-500 font-medium">الرئيسية</button>
              <button onClick={() => scrollToSection('farm-info')} className="block text-black hover:text-green-500 font-medium">معلومات المزرعة</button>
              <button onClick={() => scrollToSection('products')} className="block text-black hover:text-green-500 font-medium">المنتجات</button>
              <button onClick={() => scrollToSection('facts')} className="block text-black hover:text-green-500 font-medium">حقائق</button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-black hover:text-green-500 font-medium">الشهادات</button>
              <button onClick={() => scrollToSection('contact')} className="block text-black hover:text-green-500 font-medium">تواصل معنا</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
