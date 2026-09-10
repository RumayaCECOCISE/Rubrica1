import type { CSSProperties } from 'react';

export type LogoName = 'unach' | 'cecocise' | 'mddh';

const LOGOS: Record<LogoName, { src: string; alt: string }> = {
  unach: {
    src: '/logos/unach.webp',
    alt: 'Universidad Autónoma de Chiapas',
  },
  cecocise: {
    src: '/logos/cecocise.jpg',
    alt: 'Centro de Estudios para la Construcción de la Ciudadanía y la Seguridad',
  },
  mddh: {
    src: '/logos/mddh.png',
    alt: 'Maestría en Defensa de los Derechos Humanos',
  },
};

interface LogoProps {
  name: LogoName;
  className?: string;
  style?: CSSProperties;
  decorative?: boolean;
}

/**
 * Renderiza el archivo PNG institucional con fondo transparente.
 *
 * El archivo se mantiene estático: nunca se anima, rota, escala ni se
 * deforma. Solo se aplican filtros CSS para adaptar su tono cromático
 * al tema activo (claro u oscuro).
 */
export function InstitutionalLogo({ name, className = '', style, decorative = false }: LogoProps) {
  const logo = LOGOS[name];

  return (
    <img
      src={logo.src}
      alt={decorative ? '' : logo.alt}
      aria-hidden={decorative || undefined}
      className={`institutional-logo object-contain ${className}`}
      style={style}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}

export function LogoUNACH(props: Omit<LogoProps, 'name'>) {
  return <InstitutionalLogo name="unach" {...props} />;
}

export function LogoCECOCISE(props: Omit<LogoProps, 'name'>) {
  return <InstitutionalLogo name="cecocise" {...props} />;
}

export function LogoMDDH(props: Omit<LogoProps, 'name'>) {
  return <InstitutionalLogo name="mddh" {...props} />;
}

export function LogoBar({
  size = 80,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-7 md:gap-10 ${className}`}>
      <LogoUNACH style={{ height: size, width: 'auto' }} />
      <span className="h-14 w-px bg-line" aria-hidden />
      <LogoCECOCISE style={{ height: size * 0.86, width: 'auto' }} />
      <span className="h-14 w-px bg-line" aria-hidden />
      <LogoMDDH style={{ height: size, width: 'auto' }} />
    </div>
  );
}
