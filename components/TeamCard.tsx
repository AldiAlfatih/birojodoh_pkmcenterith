'use client';

interface TeamMember {
  id: number;
  nama: string;
  nim?: string;
  prodi: string;
  angkatan: string;
  skema: string;
  status: string;
  minat: string;
  butuh_anggota?: number | string;
  skill: string[];
  keahlian_dicari?: string[];
  wa: string;
  ig?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const getStatusColor = (status: string) => {
    if (status === 'Cari Tim')
      return 'bg-blue-50 text-blue-700 border border-blue-200';
    return 'bg-teal-50 text-teal-700 border border-teal-200';
  };

  const getSkemaColor = (skema: string) => {
    switch (skema) {
      case 'PKM-K':
        return 'bg-violet-50 text-violet-700';
      case 'PKM-KC':
        return 'bg-amber-50 text-amber-700';
      case 'PKM-RE':
        return 'bg-rose-50 text-rose-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent/50">
      {/* Card Header with Status Badge */}
      <div className="relative border-b border-border bg-muted/30 px-6 py-4">
        <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(member.status)}`}>
          {member.status}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col gap-4 px-6 py-5">
        {/* Name */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {member.nama}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {member.nim ? `${member.nim} • ` : ''}{member.prodi} • Angkatan {member.angkatan}
          </p>
        </div>

        {/* Interest */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Minat
          </p>
          <p className="mt-1 text-sm text-foreground">{member.minat}</p>
        </div>

        {/* Skema Badge */}
        <div className="flex gap-2 flex-wrap">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getSkemaColor(member.skema)}`}
          >
            {member.skema}
          </span>
        </div>

        {/* Skills */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Keahlian
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {member.skill.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
            {member.skill.length > 4 && (
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-foreground">
                +{member.skill.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Keahlian Dicari */}
        {member.keahlian_dicari && member.keahlian_dicari.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Keahlian yang Dicari
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {member.keahlian_dicari.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-dashed border-muted-foreground/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
              {member.keahlian_dicari.length > 4 && (
                <span className="inline-block rounded-full border border-dashed border-muted-foreground/50 px-3 py-1 text-xs text-muted-foreground">
                  +{member.keahlian_dicari.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Butuh Anggota */}
        {member.status === 'Cari Anggota' && member.butuh_anggota && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Butuh Anggota
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{member.butuh_anggota} Orang</p>
          </div>
        )}
      </div>

      {/* Card Footer - Contact Buttons */}
      <div className="border-t border-border bg-muted/30 px-6 py-4 flex flex-col gap-2">
        <a
          href={`https://wa.me/${member.wa}?text=Halo%20${encodeURIComponent(member.nama)}%2C%20saya%20tertarik%20untuk%20berkolaborasi%20untuk%20PKM%202026`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.95 1.195l-.355.192-3.682-.965.992 3.802-.257.41a9.86 9.86 0 1513.026-13.011l-.371.255-.094 3.408zm8.905-5.897C15.577 2.48 11.969.5 7.951.5c-6.08 0-11.02 4.94-11.02 11.02 0 1.942.476 3.827 1.38 5.511L1.07 23.5l6.305-1.654a11.002 11.002 0 005.288 1.348h.005c6.08 0 11.02-4.94 11.02-11.02 0-2.944-1.144-5.711-3.223-7.794z" />
          </svg>
          Hubungi via WhatsApp
        </a>
        {member.ig && (
          <a
            href={`https://instagram.com/${member.ig.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram {member.ig}
          </a>
        )}
      </div>
    </div>
  );
}
