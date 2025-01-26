import React, { type ReactNode } from 'react';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}