// components/Layout.tsx

import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 padding-x padding-y text-center">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
