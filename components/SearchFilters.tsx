'use client';

import { useState } from 'react';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  skemaFilter: string;
  setSkemaFilter: (skema: string) => void;
}

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  skemaFilter,
  setSkemaFilter,
}: SearchFiltersProps) {
  return (
    <section className="border-b border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="space-y-4 sm:flex sm:gap-3 sm:space-y-0">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari nama, prodi, atau skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
              <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 sm:w-48"
          >
            <option value="">Semua Status</option>
            <option value="Cari Tim">Cari Tim</option>
            <option value="Cari Anggota">Cari Anggota</option>
          </select>

          {/* Skema Filter */}
          <select
            value={skemaFilter}
            onChange={(e) => setSkemaFilter(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 sm:w-48"
          >
            <option value="">Semua Skema</option>
            <optgroup label="PKM Pendanaan">
              <option value="PKM-RE">PKM-RE</option>
              <option value="PKM-RSH">PKM-RSH</option>
              <option value="PKM-K">PKM-K</option>
              <option value="PKM-PM">PKM-PM</option>
              <option value="PKM-PI">PKM-PI</option>
              <option value="PKM-KC">PKM-KC</option>
              <option value="PKM-KI">PKM-KI</option>
              <option value="PKM-VGK">PKM-VGK</option>
            </optgroup>
            <optgroup label="PKM Insentif">
              <option value="PKM-GFT">PKM-GFT</option>
              <option value="PKM-AI">PKM-AI</option>
            </optgroup>
          </select>
        </div>
      </div>
    </section>
  );
}
