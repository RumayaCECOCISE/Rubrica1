import { useEffect, useState, type ReactNode } from 'react';
import { motion, animate, useMotionValue, type Variants } from 'framer-motion';
import { InstitutionalLogo, type LogoName } from './Logos';
import type { LucideIcon } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

/* ------------------------------------------------------------------ */
/*  Variantes reutilizables                                            */
/* ------------------------------------------------------------------ */
export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Círculo de acento                                                  */
/* ------------------------------------------------------------------ */
export function AccentCircle({
  size = 40,
  label,
}: {
  size?: number;
  label?: string | number;
}) {
  return (
    <span
      className="relative flex items-center justify-center rounded-full shrink-0"
      style={{ width: size, height: size, backgroundColor: 'var(--c-accent)' }}
    >
      {label !== undefined && (
        <span
          className="font-serif font-semibold leading-none select-none"
          style={{ color: 'var(--c-onaccent)', fontSize: size * 0.4 }}
        >
          {label}
        </span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Encabezado de diapositiva                                          */
/* ------------------------------------------------------------------ */
export function SlideHeader({
  n,
  eyebrow,
  title,
  lead,
}: {
  n: number;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="slide-header">
      <div className="mb-3 flex items-center gap-3">
        <AccentCircle size={40} label={n} />
        <span className="slide-eyebrow uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </span>
      </div>

      <h2 className="slide-title font-serif font-semibold leading-[1.04] tracking-tight text-fg">
        {title}
      </h2>

      <div
        className="w-24 h-[3px] mt-3 origin-left rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--c-accent), transparent)' }}
      />

      {lead && <p className="slide-lead text-muted mt-3 max-w-4xl leading-snug">{lead}</p>}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Tarjeta con microinteracción académica                             */
/* ------------------------------------------------------------------ */
export function Card({
  children,
  className = '',
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className={`fit-card min-w-0 bg-surface border border-line rounded-2xl soft-shadow transition-colors duration-500 hover:border-accent/45 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contador animado                                                   */
/* ------------------------------------------------------------------ */
export function AnimatedNumber({
  value,
  decimals = 0,
  duration = 1.5,
  delay = 0.2,
  suffix = '',
  prefix = '',
}: {
  value: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}) {
  const mv = useMotionValue(0);
  const [txt, setTxt] = useState('0');

  useEffect(() => {
    const controls = animate(mv, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setTxt(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [value, decimals, duration, delay, mv]);

  return (
    <span>
      {prefix}
      {txt}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Decoración de fondo: logos y círculos con microanimación sobria    */
/* ------------------------------------------------------------------ */
export function Deco({
  logo,
  size = 320,
  className = '',
  opacity = 0.05,
}: {
  logo?: LogoName;
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      {logo ? (
        <InstitutionalLogo name={logo} decorative style={{ width: size, height: 'auto' }} />
      ) : (
        <div
          className="rounded-full"
          style={{ width: size, height: size, backgroundColor: 'var(--c-accent)' }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Barra de progreso horizontal (métrica)                             */
/* ------------------------------------------------------------------ */
export function MeterBar({
  pct,
  color,
  delay = 0,
}: {
  pct: number;
  color: string;
  delay?: number;
}) {
  return (
    <div
      className="h-2.5 w-full rounded-full overflow-hidden"
      style={{ backgroundColor: 'var(--c-app-2)' }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contenedor base de diapositiva                                     */
/* ------------------------------------------------------------------ */
export function Slide({
  children,
  className = '',
  center = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`presentation-slide ${center ? 'items-center' : ''} ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`slide-content z-10 ${center ? 'items-center text-center' : ''}`}
      >
        {children}
      </motion.div>

    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Atribución de fuente                                                */
/* ------------------------------------------------------------------ */
export function SourceNote({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <p className={`source-note mt-3 shrink-0 ${className}`}>
      Fuente:{' '}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-accent/40 underline-offset-2 hover:text-accent"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Cifra de proyección                                                 */
/* ------------------------------------------------------------------ */
interface ProjectionStatProps {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  detail: string;
  icon?: LucideIcon;
  delay?: number;
}

export function ProjectionStat({
  label,
  value,
  decimals = 0,
  suffix = '',
  detail,
  icon: Icon,
  delay = 0.3,
}: ProjectionStatProps) {
  return (
    <Card className="p-5 md:p-6 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="eyebrow-tag text-muted">{label}</p>
        {Icon && <Icon className="w-5 h-5 text-accent shrink-0" aria-hidden />}
      </div>
      <p className="metric-md text-fg mt-auto">
        <AnimatedNumber value={value} decimals={decimals} suffix={suffix} delay={delay} />
      </p>
      <p className="body-sm text-muted mt-2 leading-snug">{detail}</p>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Gráfica de pastel para participaciones presupuestales               */
/* ------------------------------------------------------------------ */
export function SharePie({
  data,
  highlightColor,
  restColor,
  centerValue,
  centerLabel,
  formatter,
}: {
  data: { name: string; value: number }[];
  highlightColor: string;
  restColor: string;
  centerValue: string;
  centerLabel: string;
  formatter: (v: number) => string;
}) {
  return (
    <div className="relative chart-frame--short w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="62%"
            outerRadius="92%"
            startAngle={90}
            endAngle={-270}
            stroke="none"
            animationDuration={1200}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={i === 0 ? highlightColor : restColor} fillOpacity={i === 0 ? 1 : 0.22} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--c-surface)',
              border: '1px solid var(--c-line)',
              borderRadius: 12,
              color: 'var(--c-fg)',
              fontSize: 15,
            }}
            formatter={(v: any) => formatter(Number(v))}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Etiqueta central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-serif font-bold leading-none text-fg text-[clamp(1.8rem,3.4vw,2.9rem)]">
          {centerValue}
        </span>
        <span className="body-sm text-muted mt-1">{centerLabel}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Métrica comparada México vs. Chiapas                                */
/* ------------------------------------------------------------------ */
export function ComparisonMetric({
  label,
  national,
  chiapas,
  delay = 0.3,
}: {
  label: string;
  national: number;
  chiapas: number;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface border border-line rounded-xl p-4 md:p-5 min-w-0"
    >
      <p className="body-md font-semibold text-fg mb-3">{label}</p>
      <div className="grid grid-cols-[5.6rem_1fr] items-center gap-x-3 gap-y-2">
        <span className="body-sm text-muted">México</span>
        <div className="flex items-center gap-3 min-w-0">
          <MeterBar pct={national} color="var(--c-fg)" delay={delay} />
          <b className="font-serif text-xl text-fg tabular-nums w-16">{national}%</b>
        </div>
        <span className="eyebrow-tag text-accent">Chiapas</span>
        <div className="flex items-center gap-3 min-w-0">
          <MeterBar pct={chiapas} color="var(--c-accent)" delay={delay + 0.12} />
          <b className="font-serif text-xl text-accent tabular-nums w-16">{chiapas}%</b>
        </div>
      </div>
    </motion.div>
  );
}
