import Image from 'next/image';
import React from 'react';

const OfflinePage = () => {
  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center justify-center">
     {/*  <div className="mb-8">
        <Image src="/images/Logo.webp" width={32} height={32} alt="Company Logo" className="w-32 h-32" />
      </div> */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Website is Offline</h1>
        <p>Our site is currently undergoing maintenance ⚒️. Please check back later.</p>
      </div>
    </div>
  );
};

export default OfflinePage;
