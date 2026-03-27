'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchFilters from '@/components/SearchFilters';
import TeamGrid from '@/components/TeamGrid';
import Footer from '@/components/Footer';

// Team member data
const teamData = [
  {
    id: 1,
    nama: 'Nurul Ramadhani Jalil',
    nim: '251111014',
    ig: '@nurlramadhnijal_',
    prodi: 'Arsitektur',
    angkatan: '2025',
    skema: 'PKM-K',
    status: 'Cari Tim',
    minat: 'Pemerataan Ekonomi, Penguatan UMKM, dan Pembangunan Ibu Kota Nusantara',
    skill: ['Manajemen Produksi Kreatif'],
    keahlian_dicari: ['Desain Produk/Grafis', 'Pengelolaan Keuangan dan Usaha'],
    wa: '6283166035766',
  },
  {
    id: 2,
    nama: 'Salman Alfarizy Syahrir',
    nim: '251011149',
    ig: 'salman_alfariz1y',
    prodi: 'Ilmu Komputer',
    angkatan: '2025',
    skema: 'PKM-K',
    status: 'Cari Tim',
    minat: 'Penguatan Pendidikan, Sains, dan Teknologi',
    skill: ['Analisis Data'],
    keahlian_dicari: ['Analisis Data'],
    wa: '6282299946422',
  },
  {
    id: 3,
    nama: 'Nurfahrany Humaima Zany',
    nim: '241091003',
    ig: '@nurfahranii',
    prodi: 'Bioteknologi',
    angkatan: '2024',
    skema: 'PKM-RE',
    status: 'Cari Anggota',
    minat: 'Kemandirian Pangan, Energi, dan Air',
    skill: ['Scientific Journal Literacy', 'Microsoft Office', 'Social Media Management and Design', 'Team Work', 'Critical Thinking', 'Basic Research Design'],
    keahlian_dicari: ['Scientific Journal Literacy', 'Time Management', 'Team Work', 'Critical Thinking'],
    wa: '628996736813',
  },
  {
    id: 4,
    nama: 'Yuki Kirei',
    nim: '231011066',
    ig: 'yukikirei_',
    prodi: 'Ilmu Komputer',
    angkatan: '2023',
    skema: 'PKM-KC',
    status: 'Cari Anggota',
    minat: 'Kemandirian Pangan, Energi, dan Air',
    butuh_anggota: 1,
    skill: ['Analisis Data', 'Content Creator'],
    keahlian_dicari: ['Bioteknologi'],
    wa: '6285343775967',
  },
  {
    id: 5,
    nama: 'Haura Mukrimah Rahman',
    nim: '241031060',
    ig: '@__hauramukrimah_09',
    prodi: 'Sistem Informasi',
    angkatan: '2024',
    skema: 'PKM-KC',
    status: 'Cari Anggota',
    minat: 'Kemandirian Pangan, Energi, dan Air',
    butuh_anggota: 1,
    skill: ['Database'],
    keahlian_dicari: ['Analisis Energi'],
    wa: '6287864933876',
  },
  {
    id: 6,
    nama: 'Sri Sukma Tahir',
    nim: '231011137',
    ig: '@srisukmaa_',
    prodi: 'Ilmu Komputer',
    angkatan: '2023',
    skema: 'PKM-KC',
    status: 'Cari Anggota',
    minat: 'Kesehatan dan Gizi Masyarakat',
    butuh_anggota: 2,
    skill: ['Software Engineering', 'AI', 'Quality Assurance'],
    keahlian_dicari: ['AI', 'Pangan', 'Software Engineering'],
    wa: '6285179884791',
  },
  {
    id: 7,
    nama: 'Akbar Hidayat',
    nim: '241031023',
    ig: '@akbrhdyytt',
    prodi: 'Sistem Informasi',
    angkatan: '2024',
    skema: 'PKM-KC',
    status: 'Cari Anggota',
    minat: 'Pelestarian Lingkungan dan Mitigasi Bencana',
    butuh_anggota: 1,
    skill: ['Database System', 'Computer Networking', 'Web Development', 'Operating Systems'],
    keahlian_dicari: ['Internet of Things'],
    wa: '6287843840589',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [skemaFilter, setSkemaFilter] = useState<string>('');

  // Filter team data
  const filteredTeam = useMemo(() => {
    return teamData.filter((member) => {
      const matchesSearch =
        member.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.prodi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.skill.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesStatus =
        !statusFilter || member.status === statusFilter;
      const matchesSkema = !skemaFilter || member.skema === skemaFilter;

      return matchesSearch && matchesStatus && matchesSkema;
    });
  }, [searchQuery, statusFilter, skemaFilter]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        skemaFilter={skemaFilter}
        setSkemaFilter={setSkemaFilter}
      />
      <TeamGrid members={filteredTeam} />
      <Footer />
    </main>
  );
}
