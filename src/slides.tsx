import { motion } from 'framer-motion';
import {
  Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell, LabelList, Area, AreaChart,
} from 'recharts';
import {
  BookOpen, MonitorSmartphone, GraduationCap, Scale, Users,
  ShieldCheck, Sparkles, ChevronDown, Wifi, Building2,
  Cloud, Laptop, BrainCircuit, School, TriangleAlert,
} from 'lucide-react';
import { useTheme } from './theme';
import { LogoUNACH, LogoCECOCISE, LogoMDDH } from './components/Logos';
import {
  Slide, SlideHeader, Card, AccentCircle, AnimatedNumber, Deco,
  MeterBar, SourceNote, ProjectionStat, ComparisonMetric, SharePie,
  fadeUp,
} from './components/ui';
import {
  BUDGET_2026, BUDGET_EDUCATION_SHARE, BUDGET_TIC_SHARE,
  DIGITAL_ACCESS_2024, DIGITAL_ACCESS_2025, INTERNET_TREND,
  RESPONSIBLE_AUTHORITIES, SECONDARY_EDUCATION_2024, SOURCES,
  STATE_RANKING_2025, URBAN_RURAL_GAP,
} from './data';

/* ================================================================== */
/*  1 · PORTADA                                                         */
/* ================================================================== */
export function SlidePortada() {
  return (
    <section className="presentation-slide h-dvh w-full relative overflow-hidden flex flex-col px-6 md:px-12">

      <div className="absolute inset-0 dot-grid opacity-[0.14] pointer-events-none" />

      {/* Logos institucionales */}
      <header className="relative z-10 flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 shrink-0 mt-8">
        <LogoUNACH style={{ height: 95, width: 'auto' }} />

        <span className="h-10 w-px bg-line hidden md:block" aria-hidden />

        <LogoCECOCISE style={{ height: 95, width: 'auto' }} />

        <span className="h-10 w-px bg-line hidden md:block" aria-hidden />

        <LogoMDDH style={{ height: 95, width: 'auto' }} />
      </header>


      {/* Contenido central */}
      <main className="relative z-10 flex-1 flex items-center">

        <div className="max-w-7xl w-full mx-auto md:mx-0">

          <h1 className="font-serif font-bold leading-[0.98] text-fg text-[clamp(4rem,8vw,6.5rem)]">

            Brecha digital y{' '}
            <span className="text-accent">
              omisión estatal
            </span>

            <span className="block italic font-normal text-muted text-[0.5em] mt-4">
              en la garantía del derecho de acceso a las TIC
            </span>

          </h1>


          <div
            className="w-204 h-[3px] my-8 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, var(--c-accent), var(--c-accent-2), transparent)'
            }}
          />


          <h2 className="font-serif text-[clamp(1.35rem,2.1vw,2.1rem)] text-muted leading-snug max-w-5xl">
            Escuela Secundaria Técnica No. 156{' '}
            <span className="text-fg font-semibold">
              "Real del Bosque"
            </span>
            <br />
            Tuxtla Gutiérrez, Chiapas
          </h2>

        </div>

      </main>


      {/* Pie */}
      <footer className="relative z-10 shrink-0 border-t border-line pt-4 pb-2 mb-8">

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3">

          <p className="body-sm text-muted font-sans">
            <span className="text-fg font-semibold">
              Víctor Jesús Rumaya Medina
            </span>
            {' '}· Rúbrica I, Módulo I
          </p>


          <p className="body-sm text-muted font-sans">
            7 de septiembre de 2026
          </p>


          <p className="eyebrow-tag text-muted font-sans">
            <span className="text-fg font-semibold">
              UNACH · CECOCISE · Maestría en Defensa de los Derechos Humanos
            </span>
          </p>

        </div>

      </footer>


      {/* Indicador */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-5 h-5 text-muted" />
      </motion.div>

    </section>
  );
}

/* ================================================================== */
/*  2 · CONTEXTO                                                        */
/* ================================================================== */
export function SlideContexto() {
  const levels = [
    { n: '1', t: 'Brecha de acceso', d: 'Disponibilidad física de dispositivo o conexión a internet en el hogar y en la escuela.' },
    { n: '2', t: 'Brecha de uso', d: 'Habilidades digitales del estudiantado para buscar, evaluar y producir información.' },
    { n: '3', t: 'Brecha competencial', d: 'Capacitación docente para integrar las TIC como herramienta pedagógica.' },
  ];

  return (
    <Slide>
      <Deco logo="unach" size={340} className="-top-24 -left-24" opacity={0.04} />
      <SlideHeader
        n={2}
        eyebrow="Contexto"
        title="Contexto del caso"
        lead="El acceso formal a las TIC no garantiza igualdad. La brecha digital opera en tres niveles interdependientes que deben atenderse de forma simultánea para que el derecho sea real."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {levels.map((l) => (
          <Card key={l.n} className="p-6 md:p-7 flex gap-5 items-start">
            <span
              className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-semibold text-[clamp(1.2rem,1.6vw,1.5rem)]"
              style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-onaccent)' }}
            >
              {l.n}
            </span>
            <div className="min-w-0">
              <h4 className="body-lg font-semibold text-fg mb-1">{l.t}</h4>
              <p className="body-sm text-muted leading-snug">{l.d}</p>
            </div>
          </Card>
        ))}
      </div>

      <SourceNote>
        Martínez Domínguez (2018); Villela Cortés y Contreras Islas (2021). La presentación utiliza esta clasificación como marco analítico del caso.
      </SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  3 · ¿QUÉ SON LAS TIC?                                              */
/* ================================================================== */
export function SlideQueSonTic() {
  const dimensions = [
    { icon: Laptop, title: 'Dispositivos', text: 'Computadoras, tabletas, teléfonos y equipos que permiten crear o consultar información.' },
    { icon: Wifi, title: 'Conectividad', text: 'Internet, banda ancha, redes móviles y telecomunicaciones para transmitir datos.' },
    { icon: Cloud, title: 'Servicios y contenidos', text: 'Plataformas, aplicaciones, recursos educativos, medios digitales y almacenamiento.' },
    { icon: BrainCircuit, title: 'Capacidades de uso', text: 'Habilidades para buscar, evaluar, producir, comunicar y aprender con tecnología.' },
  ];

  return (
    <Slide>
      <Deco logo="mddh" size={330} className="-bottom-20 -right-16" opacity={0.04} />
      <SlideHeader
        n={3}
        eyebrow="Ventana conceptual"
        title="¿Qué son las TIC?"
        lead="Son el conjunto de recursos, herramientas y prácticas que permiten producir, procesar, almacenar y comunicar información. En educación, su garantía exige mucho más que entregar un dispositivo."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dimensions.map(({ icon: Icon, title, text }, index) => (
          <Card key={title} className="p-5 md:p-6 h-full">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 12%, transparent)' }}
            >
              <Icon className="w-6 h-6 text-accent" aria-hidden />
            </div>
            <p className="eyebrow-tag text-accent mb-2">0{index + 1}</p>
            <h3 className="font-serif text-[clamp(1.45rem,2vw,2rem)] font-semibold text-fg leading-tight mb-2">{title}</h3>
            <p className="body-sm text-muted leading-snug">{text}</p>
          </Card>
        ))}
      </div>

      <SourceNote>
        CPEUM, art. 6; INEGI, ENDUTIH 2025. La ENDUTIH mide internet, computadora, telefonía celular, radio, televisión, streaming y dispositivos inteligentes.
      </SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  4 · EL CASO                                                         */
/* ================================================================== */
export function SlideCaso() {
  const items = [
    { icon: GraduationCap, t: 'Falta de capacitación docente en competencias digitales' },
    { icon: Sparkles, t: 'Interrupción de programas de formación tecnológica' },
    { icon: ShieldCheck, t: 'Ausencia de condiciones institucionales para la equidad' },
  ];

  return (
    <Slide>
      <Deco logo="cecocise" size={330} className="-bottom-16 -right-16" opacity={0.04} />
      <SlideHeader
        n={4}
        eyebrow="Planteamiento"
        title="El caso sobre el acceso a las TIC (Tecnologías de la Información y Comunicación)"
      />

      <Card className="p-9 md:p-12 relative overflow-hidden">
        <span
          className="absolute top-2 left-6 font-serif text-[8rem] leading-none select-none pointer-events-none"
          style={{ color: 'var(--c-accent)', opacity: 0.08 }}
        >
          “
        </span>
        <p className="font-serif text-[clamp(1.6rem,2.6vw,2.8rem)] leading-[1.22] text-fg relative z-10">
          Omisión del Estado mexicano en garantizar acceso, uso y aprovechamiento de las{' '}
          <span className="text-accent font-semibold">TIC (Tecnologías de la Información y Comunicación)</span> en
          condiciones de igualdad y calidad para la niñez de la Escuela Secundaria Técnica No. 156{' '}
          <span className="italic text-muted">"Real del Bosque"</span>.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {items.map((it) => (
          <div
            key={it.t}
            className="flex items-center gap-4 bg-surface border border-line rounded-2xl px-5 py-5 soft-shadow"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 13%, transparent)' }}
            >
              <it.icon className="w-5 h-5 text-accent" />
            </div>
            <span className="body-sm text-muted leading-snug">{it.t}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  5 · DELIMITACIÓN                                                    */
/* ================================================================== */
export function SlideDelimitacion() {
  const cards = [
    { label: 'Lugar', value: 'Tuxtla Gutiérrez', sub: 'Esc. Sec. Técnica No. 156 "Real del Bosque", Chiapas', icon: Building2 },
    { label: 'Periodo', value: '2026-2027', sub: 'Septiembre 2026 a junio 2027', icon: BookOpen },
    { label: 'Grupo 1.º A', value: '33', sub: 'estudiantes', icon: Users },
    { label: 'Grupo 1.º B', value: '31', sub: 'estudiantes', icon: Users },
  ];

  return (
    <Slide>
      <Deco size={300} className="top-10 -right-24" opacity={0.06} />
      <SlideHeader n={5} eyebrow="Delimitación" title="Delimitación espacio-temporal" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
  {cards.map((c) => (
    <Card
      key={c.label}
      className="p-6 md:p-7 h-full flex flex-col items-center justify-center text-center"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0"
          style={{
            backgroundColor:
              'color-mix(in srgb, var(--c-accent) 13%, transparent)',
          }}
        >
          <c.icon className="w-5 h-5 text-accent" />
        </div>

        <p className="eyebrow-tag text-muted mb-3">
          {c.label}
        </p>

        <p className="metric-md text-fg mb-2 leading-none">
          {['Lugar', 'Periodo'].includes(c.label) ? (
            c.value
          ) : (
            <AnimatedNumber value={Number(c.value)} delay={0.4} />
          )}
        </p>

        <p className="body-sm text-muted leading-snug">
          {c.sub}
        </p>
      </Card>
    ))}
  </div>
    </Slide>
  );
}

/* ================================================================== */
/*  6 · OBJETO DE LA DEFENSA                                            */
/* ================================================================== */
export function SlideObjeto() {
  const items = [
    'Documentar la omisión estatal en capacitación docente en competencias digitales',
    'Documentar la discontinuidad de los programas de formación tecnológica',
    'Generar evidencia comparativa del impacto educativo de la falta de acceso tecnológico',
    'Identificar a las autoridades responsables de la omisión',
  ];

  return (
    <Slide>
      <Deco logo="mddh" size={360} className="-top-12 -right-20" opacity={0.04} />
      <SlideHeader n={6} eyebrow="Objetivos" title="Objeto de la defensa" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {items.map((t, i) => (
          <Card key={i} className="p-7 md:p-8 relative overflow-hidden">
            <div
              className="absolute -top-10 -right-10 w-28 h-28 rounded-full"
              style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 7%, transparent)' }}
            />
            <div className="relative z-10 flex gap-5">
              <span
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-[clamp(1.2rem,1.6vw,1.5rem)]"
                style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-onaccent)' }}
              >
                {i + 1}
              </span>
              <p className="body-lg text-fg/90 leading-snug font-sans">{t}</p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  7 · DERECHO PRINCIPAL VIOLENTADO (VENTANA JURÍDICA)                  */
/* ================================================================== */
export function SlideDerechoPrincipal() {
  const laws = [
    { s: 'CPEUM, Art. 6°', t: 'El Estado garantizará el derecho de acceso a las TIC, radiodifusión y telecomunicaciones, incluido banda ancha e internet.' },
    { s: 'LGDNNA, Arts. 101 Bis, 101 Bis 1 y 101 Bis 2', t: 'Acceso universal a las TIC y política de inclusión digital con equidad y calidad, incluida la capacitación docente.' },
    { s: 'CDN, Art. 17', t: 'Derecho de la niñez a acceder a información y materiales de diversas fuentes, incluidos los medios digitales y la tecnología.' },
  ];

  return (
    <Slide>
      <Deco logo="unach" size={300} className="-bottom-20 -left-16" opacity={0.04} />
      <SlideHeader
        n={7}
        eyebrow="Derecho Ventana"
        title="Derecho de Acceso a las TIC de la Niñez"
        lead="Concepto jurídico que reconoce a las TIC como puerta de entrada a otros derechos: educación, información, participación y desarrollo."
      />

      <div className="flex flex-col gap-4 md:gap-5">
        {laws.map((l) => (
          <Card key={l.s} className="p-7 md:p-9 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-1 h-full origin-top"
              style={{ background: 'linear-gradient(180deg, var(--c-accent), var(--c-accent-2))' }}
            />
            <div className="flex gap-3 items-center pl-3">
              <Scale className="w-7 h-7 text-accent" />
              <span className="eyebrow-tag text-accent">{l.s}</span>
            </div>
            <p className=" text-[clamp(0.7rem,1.2vw,1.55rem)] text-fg/90 leading-snug pl-3 md:pl-9">
              {l.t}
            </p>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  8 · DERECHOS CONEXOS                                                */
/* ================================================================== */
export function SlideConexos() {
  const cards = [
    { t: 'Educación de calidad', d: 'Art. 13 PIDESC — desarrollo pleno de la personalidad humana.', icon: GraduationCap },
    { t: 'Nivel de vida adecuado', d: 'Art. 11 PIDESC — condiciones materiales para ejercer derechos.', icon: BookOpen },
    { t: 'Progreso científico', d: 'Art. 15.1.b PIDESC — beneficios de los avances tecnológicos.', icon: Sparkles },
    { t: 'TIC habilitantes', d: 'Moranchel Pocaterra (2019) — las TIC potencian otros derechos.', icon: MonitorSmartphone },
    { t: 'Progresividad', d: 'Art. 2.2 PIDESC — avanzar sin regresividad en derechos sociales.', icon: ShieldCheck },
    { t: 'Igualdad y no discriminación', d: 'Ninguna niñez debe quedar atrás por recursos o ubicación.', icon: Users },
  ];

  return (
    <Slide>
      <Deco logo="cecocise" size={300} className="-bottom-14 -left-14" opacity={0.04} />
      <SlideHeader
        n={8}
        eyebrow="Interdependencia"
        title="Derechos y principios interdependientes"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Card key={c.t} className="p-6 relative overflow-hidden">
            <div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
              style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 7%, transparent)' }}
            />
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative z-10"
              style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 13%, transparent)' }}
            >
              <c.icon className="w-5 h-5 text-accent" />
            </div>
            <h4 className="font-serif text-[clamp(1.4rem,1.8vw,1.75rem)] font-semibold text-fg mb-2 relative z-10">{c.t}</h4>
            <p className="body-sm text-muted leading-snug relative z-10">{c.d}</p>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  9 · NUMERALIA NACIONAL                                              */
/* ================================================================== */
export function SlideNumeralia() {
  const { palette } = useTheme();

  return (
    <Slide>
      <Deco size={340} className="-top-28 -left-24" opacity={0.05} />
      <SlideHeader
        n={9}
        eyebrow="Numeralia nacional"
        title="Evolución del acceso a internet en hogares mexicanos"
        lead="La tendencia nacional crece de forma sostenida, pero la cifra promedio oculta disparidades regionales profundas que afectan directamente a la niñez de Chiapas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.3fr] gap-4 lg:gap-5 items-stretch">
        <Card className="p-6 md:p-8 flex flex-col justify-center text-center">
          <p className="eyebrow-tag text-muted mb-3">Hogares con internet · 2025</p>
          <p className="metric-xl text-fg mb-3">
            <AnimatedNumber value={78.3} decimals={1} delay={0.4} duration={2} />
            <span className="text-accent text-[0.55em] align-top">%</span>
          </p>
          <div className="w-14 h-0.5 bg-accent mx-auto my-3" />
          <p className="body-sm text-muted">Se duplicó respecto a 2015 (39.1 %).</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-accent">
            <Wifi className="w-4 h-4 shrink-0" />
            <span className="body-sm font-sans">+39.2 pp en una década</span>
          </div>
        </Card>

        <Card className="p-4 md:p-5 flex flex-col">
          <h4 className="body-md font-semibold text-fg mb-3">% de hogares con internet · serie histórica</h4>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={INTERNET_TREND} margin={{ top: 6, right: 8, bottom: 4, left: -12 }}>
                <defs>
                  <linearGradient id="gradInet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={palette.accent} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={palette.accent} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 4" stroke={palette.line} vertical={false} />
                <XAxis dataKey="year" tick={{ fill: palette.muted, fontSize: 16 }} axisLine={{ stroke: palette.line }} tickLine={false} />
                <YAxis domain={[20, 90]} tick={{ fill: palette.muted, fontSize: 15 }} axisLine={false} tickLine={false} tickFormatter={(v: any) => `${v}%`} />
                <Tooltip
                  cursor={{ stroke: palette.accent, strokeWidth: 1, strokeDasharray: '4 4' }}
                  contentStyle={{ backgroundColor: palette.surface, border: `1px solid ${palette.line}`, borderRadius: 12, color: palette.fg, fontSize: 16 }}
                  labelStyle={{ color: palette.muted }}
                  formatter={(v: any) => [`${v}%`, 'Hogares']}
                />
                <Area type="monotone" dataKey="value" stroke="none" fill="url(#gradInet)" animationDuration={1800} />
                <Line
                  type="monotone" dataKey="value" stroke={palette.accent} strokeWidth={3}
                  dot={{ fill: palette.accent, r: 5, strokeWidth: 0 }}
                  activeDot={{ r: 8, fill: palette.surface, stroke: palette.accent, strokeWidth: 3 }}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <SourceNote href={SOURCES.endutih2025.url}>{SOURCES.endutih2025.short}</SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  10 · ACCESO DIGITAL 2025                                            */
/* ================================================================== */
export function SlideAcceso2025() {
  return (
    <Slide>
      <Deco logo="unach" size={330} className="-bottom-24 -left-20" opacity={0.04} />
      <SlideHeader
        n={10}
        eyebrow="Numeralia comparada"
        title="Chiapas frente al promedio nacional"
        lead="Los cuatro indicadores comparables de 2025 muestran una desventaja sistemática para Chiapas. La brecha no se limita a la conexión: también alcanza los dispositivos y las posibilidades de uso."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {DIGITAL_ACCESS_2025.map((metric, index) => (
          <ComparisonMetric key={metric.label} {...metric} delay={0.25 + index * 0.1} />
        ))}
      </div>

      <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 body-sm text-muted">
        <span><b className="font-serif text-2xl text-accent">24.4 pp</b> de brecha en hogares con internet</span>
        <span><b className="font-serif text-2xl text-accent">20.3 pp</b> de brecha en dispositivos inteligentes</span>
      </motion.div>
      <SourceNote href={SOURCES.endutih2025.url}>{SOURCES.endutih2025.short}</SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  11 · MÉXICO VS CHIAPAS                                               */
/* ================================================================== */
export function SlideComparativa() {
  const { palette } = useTheme();

  const rows = DIGITAL_ACCESS_2024.map((row) => ({
    ...row,
    mx: row.national,
    chi: row.chiapas,
    diff: row.national - row.chiapas,
  }));

  const biggestGap = [...rows].sort((a, b) => b.diff - a.diff)[0];
  const smallestGap = [...rows].sort((a, b) => a.diff - b.diff)[0];

  return (
    <Slide >
      <Deco size={280} className="-top-20 -right-16" opacity={0.05} />

      {/* CONTENEDOR VERTICAL DE LA SLIDE */}
      <div className="flex flex-col h-full min-h-0">

        {/* HEADER */}
        <div className="shrink-0">
          <SlideHeader
            n={11}
            eyebrow="Comparativa regional"
            title="México vs. Chiapas: la brecha regional"
            lead="Datos 2024. Chiapas se encuentra por debajo del promedio nacional en los principales indicadores de acceso y uso de TIC."
          />
        </div>

        {/* CONTENIDO CENTRAL */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 lg:gap-5 flex-1 min-h-0">

          {/* GRÁFICA */}
          <Card className="p-4 flex flex-col min-h-0">
            <div className="flex items-center justify-between gap-3 mb-2 shrink-0">
              <h4 className="text-[1rem] md:text-[1rem] font-semibold text-fg">
                Comparativa en porcentaje
              </h4>

              <div className="flex items-center gap-3 text-[0.78rem] text-muted">
                <span className="flex items-center gap-1.5">
                  <i
                    className="w-2.5 h-2.5 rounded-sm inline-block shrink-0"
                    style={{ backgroundColor: palette.neutralBar }}
                  />
                  México
                </span>

                <span className="flex items-center gap-1.5">
                  <i
                    className="w-2.5 h-2.5 rounded-sm inline-block shrink-0"
                    style={{ backgroundColor: palette.accent }}
                  />
                  Chiapas
                </span>
              </div>
            </div>

            <div className="flex-1 min-h-0 h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={rows.map((r) => ({
                    name: r.label,
                    México: r.mx,
                    Chiapas: r.chi,
                  }))}
                  barGap={4}
                  barCategoryGap={22}
                  margin={{ top: 8, right: 8, bottom: 2, left: -14 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 4"
                    stroke={palette.line}
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: palette.muted,
                      fontSize: 12,
                    }}
                    axisLine={{ stroke: palette.line }}
                    tickLine={false}
                    interval={0}
                  />

                  <YAxis
                    domain={[0, 100]}
                    tick={{
                      fill: palette.muted,
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: any) => `${v}%`}
                  />

                  <Tooltip
                    cursor={{
                      fill: 'color-mix(in srgb, currentColor 6%, transparent)',
                    }}
                    contentStyle={{
                      backgroundColor: palette.surface,
                      border: `1px solid ${palette.line}`,
                      borderRadius: 10,
                      color: palette.fg,
                      fontSize: 14,
                    }}
                    labelStyle={{ color: palette.muted }}
                    formatter={(v: any) => `${v}%`}
                  />

                  <Bar
                    dataKey="México"
                    fill={palette.neutralBar}
                    radius={[5, 5, 0, 0]}
                    animationDuration={1200}
                  />

                  <Bar
                    dataKey="Chiapas"
                    fill={palette.accent}
                    radius={[5, 5, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* TARJETAS LATERALES */}
          <div className="grid grid-rows-3 gap-3 min-h-0">

            {/* TARJETA 1 */}
            <Card className="px-4 py-3.5 flex flex-col justify-center min-h-0">
              <p className="eyebrow-tag text-muted mb-1.5">
                Mayor brecha observada
              </p>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-bold text-accent leading-none">
                  −{biggestGap.diff.toFixed(1)}
                </span>

                <span className="text-[0.78rem] text-muted">
                  puntos porcentuales
                </span>
              </div>

              <p className="text-[0.82rem] md:text-[0.86rem] text-muted mt-1.5 leading-snug">
                La mayor distancia corresponde a{' '}
                <strong className="text-fg">
                  {biggestGap.label}
                </strong>.
              </p>
            </Card>

            {/* TARJETA 2 */}
            <Card className="px-4 py-3.5 flex flex-col justify-center min-h-0">
              <p className="eyebrow-tag text-muted mb-1.5">
                Lectura regional
              </p>

              <p className="text-[0.92rem] md:text-[0.98rem] text-fg leading-snug">
                Chiapas se mantiene por debajo del promedio nacional en{' '}
                <span className="text-accent font-semibold">
                  todos los indicadores comparados.
                </span>
              </p>

              <div className="w-full h-px bg-line my-2.5" />

              <p className="text-[0.78rem] md:text-[0.82rem] text-muted leading-snug">
                La diferencia mínima es de{' '}
                <strong className="text-fg">
                  {smallestGap.diff.toFixed(1)} pp
                </strong>.
              </p>
            </Card>

            {/* TARJETA 3 */}
            <Card className="px-4 py-3.5 flex flex-col justify-center min-h-0">
              <p className="eyebrow-tag text-muted mb-1.5">
                Implicación
              </p>

              <p className="text-[0.82rem] md:text-[0.88rem] text-muted leading-snug">
                La brecha regional evidencia que el acceso a las TIC no se
                distribuye de manera homogénea y que el territorio influye
                en las oportunidades de conectividad y uso.
              </p>
            </Card>
          </div>
        </div>

        {/* BRECHA URBANO-RURAL */}
        <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2.5 shrink-0">
          {URBAN_RURAL_GAP.map((g) => (
            <Card
              key={g.label}
              className="px-3 py-2 flex items-center justify-between gap-2"
            >
              <div className="min-w-0">
                <p className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted leading-tight truncate">
                  {g.label}
                </p>

                <p className="text-[0.72rem] text-muted mt-0.5 whitespace-nowrap">
                  urbano {g.urban}% · rural {g.rural}%
                </p>
              </div>

              <p className="font-serif text-[1.25rem] font-bold text-accent leading-none shrink-0">
                −{(g.urban - g.rural).toFixed(1)} pp
              </p>
            </Card>
          ))}
        </div>

        {/* FUENTES */}
        <div className="shrink-0 pt-2 mb-8">
          <p className="text-[0.68rem] md:text-[0.72rem] leading-tight text-muted whitespace-normal">
            Fuente:{' '}
            <a
              href={SOURCES.endutih2024.url}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent"
            >
              {SOURCES.endutih2024.short}
            </a>
            {' · '}
            Brechas urbano-rural:{' '}
            <a
              href={SOURCES.endutih2025.url}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent"
            >
              {SOURCES.endutih2025.short}
            </a>
          </p>
        </div>

      </div>
    </Slide>
  );
}
/* ================================================================== */
/*  12 · RANKING ESTATAL                                                 */
/* ================================================================== */
export function SlideRanking() {
  const { palette } = useTheme();
  const data = [...STATE_RANKING_2025].sort((a, b) => a.value - b.value);

  const barColor = (kind: string) => {
    if (kind === 'chiapas') return palette.accent;
    if (kind === 'nacional') return palette.accent2;
    return palette.neutralBar;
  };

  const barOpacity = (kind: string) => {
    if (kind === 'chiapas') return 1;
    if (kind === 'nacional') return 0.85;
    return 0.38;
  };

  return (
    <Slide>
      <Deco logo="unach" size={320} className="-bottom-24 -right-20" opacity={0.04} />
      <SlideHeader
        n={12}
        eyebrow="Ranking estatal"
        title="Chiapas, entre los estados con menor acceso"
        lead="Porcentaje de hogares con internet. INEGI, ENDUTIH 2025."
      />

      <Card className="p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3">
          <h4 className="body-md font-semibold text-fg">Hogares con internet por entidad federativa, 2025</h4>
          <div className="flex flex-wrap items-center gap-4 sm:ml-auto body-sm text-muted">
            <span className="flex items-center gap-2">
              <i className="w-3 h-3 rounded-sm inline-block shrink-0" style={{ backgroundColor: palette.accent }} /> Chiapas
            </span>
            <span className="flex items-center gap-2">
              <i className="w-3 h-3 rounded-sm inline-block shrink-0" style={{ backgroundColor: palette.accent2 }} /> Promedio nacional
            </span>
            <span className="flex items-center gap-2">
              <i className="w-3 h-3 rounded-sm inline-block shrink-0 opacity-40" style={{ backgroundColor: palette.neutralBar }} /> Otras entidades
            </span>
          </div>
        </div>

        <div className="chart-frame chart-frame--tall">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 4, right: 58, bottom: 4, left: 8 }} barSize={22}>
              <CartesianGrid strokeDasharray="3 4" stroke={palette.line} horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: palette.muted, fontSize: 14 }} axisLine={{ stroke: palette.line }} tickLine={false} tickFormatter={(v: any) => `${v}%`} />
              <YAxis dataKey="name" type="category" tick={{ fill: palette.muted, fontSize: 14 }} axisLine={false} tickLine={false} width={132} interval={0} />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{ backgroundColor: palette.surface, border: `1px solid ${palette.line}`, borderRadius: 12, color: palette.fg, fontSize: 16 }}
                labelStyle={{ color: palette.muted }}
                formatter={(v: any) => [`${v}%`, 'Hogares con internet']}
              />
              <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={1500}>
                {data.map((e, i) => (
                  <Cell key={i} fill={barColor(e.kind)} fillOpacity={barOpacity(e.kind)} />
                ))}
                <LabelList dataKey="value" position="right" fill={palette.fg} fontSize={14} formatter={(v: any) => `${v}%`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card className="px-4 py-3">
          <p className="eyebrow-tag text-muted mb-1">Chiapas vs. Ciudad de México</p>
          <p className="metric-sm text-accent">36.6 pp</p>
          <p className="body-sm text-muted mt-1">53.9 % frente a 90.5 %</p>
        </Card>
        <Card className="px-4 py-3">
          <p className="eyebrow-tag text-muted mb-1">Chiapas vs. promedio nacional</p>
          <p className="metric-sm text-accent">24.4 pp</p>
          <p className="body-sm text-muted mt-1">53.9 % frente a 78.3 %</p>
        </Card>
        <Card className="px-4 py-3">
          <p className="eyebrow-tag text-muted mb-1">Lugar que ocupa Chiapas</p>
          <p className="metric-sm text-accent">32 de 32</p>
          <p className="body-sm text-muted mt-1">Último lugar nacional en 2025</p>
        </Card>
      </div>

      <SourceNote className="mb-8" href={SOURCES.endutih2025.url}>{SOURCES.endutih2025.short}</SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  13 · TIC Y EDUCACIÓN                                                 */
/* ================================================================== */
export function SlideEducacionTic() {
  return (
    <Slide>
      <Deco logo="cecocise" size={320} className="-top-20 -right-16" opacity={0.04} />
      <SlideHeader
        n={13}
        eyebrow="Educación y brecha digital"
        title="Las TIC sostienen el aprendizaje"
        lead="El uso educativo de la tecnología es amplio, pero la desigualdad de acceso coincide con un contexto escolar más adverso en Chiapas. Estos datos describen el entorno; por sí solos no prueban causalidad."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProjectionStat
            label="Uso educativo de internet"
            value={85.6}
            decimals={1}
            suffix="%"
            detail="Usuarios que lo emplearon para apoyar educación o capacitación, México, 2020."
            icon={School}
            delay={0.35}
          />
          <ProjectionStat
            label="Labores escolares"
            value={54.9}
            decimals={1}
            suffix="%"
            detail="Usuarios de computadora en el hogar que realizaron labores escolares, México, 2020."
            icon={Laptop}
            delay={0.5}
          />
        </div>

        <div className="flex flex-col gap-4">
          {SECONDARY_EDUCATION_2024.map((metric, index) => (
            <ComparisonMetric key={metric.label} {...metric} delay={0.35 + index * 0.15} />
          ))}
        </div>
      </div>

      <motion.div variants={fadeUp} className="mt-4 flex items-start gap-3 body-sm text-muted">
        <TriangleAlert className="w-5 h-5 text-accent shrink-0" aria-hidden />
        <p>
          En secundaria, la eficiencia terminal fue de 85.4 % en Chiapas frente a 90.5 % nacional; el
          abandono escolar fue de 5.4 % frente a 3.7 % en el ciclo 2023-2024.
        </p>
      </motion.div>
      <SourceNote>
        <a href={SOURCES.educationUse.url} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-2">{SOURCES.educationUse.short}</a>{' '}
        <a href={SOURCES.sep2024.url} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-2">{SOURCES.sep2024.short}</a>
      </SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  14 · PRESUPUESTO EDUCATIVO Y TIC 2026                               */
/* ================================================================== */
export function SlidePresupuesto() {
  const { palette } = useTheme();
  const mdp = (v: number) =>
    `${v.toLocaleString('es-MX', { maximumFractionDigits: 1 })} mdp`;

  return (
    <Slide>
      <Deco size={320} className="-top-24 -right-20" opacity={0.05} />
      <SlideHeader
        n={14}
        eyebrow="Presupuesto federal 2026"
        title="Cuánto se destina a educación y cuánto a las TIC"
        lead="El Presupuesto de Egresos de la Federación 2026 asciende a 10.19 billones de pesos. La educación concentra una fracción reducida y las TIC, una fracción marginal."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Pastel 1: educación */}
        <Card className="p-5 md:p-6 flex flex-col">
          <h4 className="body-md font-semibold text-fg mb-1">Educación Pública (Ramo 11)</h4>
          <p className="body-sm text-muted mb-2">Dentro del gasto neto total</p>
          <SharePie
            data={BUDGET_EDUCATION_SHARE}
            highlightColor={palette.accent}
            restColor={palette.neutralBar}
            centerValue={`${BUDGET_2026.educacionPct} %`}
            centerLabel="del PEF 2026"
            formatter={mdp}
          />
          <p className="body-sm text-muted mt-2 text-center">
            <b className="text-fg">{BUDGET_2026.educacionLabel}</b> de 10.19 billones
          </p>
        </Card>

        {/* Pastel 2: TIC */}
        <Card className="p-5 md:p-6 flex flex-col">
          <h4 className="body-md font-semibold text-fg mb-1">Presupuesto TIC federal</h4>
          <p className="body-sm text-muted mb-2">Todas las dependencias, no solo la SEP</p>
          <SharePie
            data={BUDGET_TIC_SHARE}
            highlightColor={palette.accent}
            restColor={palette.neutralBar}
            centerValue={`${BUDGET_2026.ticPct} %`}
            centerLabel="del PEF 2026"
            formatter={mdp}
          />
          <p className="body-sm text-muted mt-2 text-center">
            <b className="text-fg">{BUDGET_2026.ticLabel}</b> de 10.19 billones
          </p>
        </Card>

        {/* Lectura del dato */}
        <Card className="p-5 md:p-6 flex flex-col justify-center gap-4">
          <div>
            <p className="eyebrow-tag text-muted mb-1">Variación del gasto TIC</p>
            <p className="metric-sm text-accent">−1.9 %</p>
            <p className="body-sm text-muted mt-1">
              Segundo año consecutivo de recorte real. La SEP figura entre las dependencias con mayor
              reducción.
            </p>
          </div>
          <div className="h-px w-full bg-line" />
          <div>
            <p className="eyebrow-tag text-muted mb-1">Por cada 100 pesos del PEF</p>
            <p className="metric-sm text-fg">
              $5.14 <span className="body-sm text-muted font-sans">a educación</span>
            </p>
            <p className="metric-sm text-accent mt-1">
              $0.33 <span className="body-sm text-muted font-sans">a TIC</span>
            </p>
          </div>
        </Card>
      </div>

      <motion.div variants={fadeUp} className="mt-4 flex items-start gap-3 body-sm text-muted">
        <TriangleAlert className="w-5 h-5 text-accent shrink-0" aria-hidden />
        <p>
          No existe en el PEF 2026 un programa presupuestario federal específico para dotar de TIC y
          formación docente a la educación básica. El Programa de Conectividad 2026 prevé conectar
          27 749 sitios públicos, de los cuales 20 188 son teleescuelas, pero se ejecuta fuera del
          Ramo 11 y no incluye capacitación pedagógica.
        </p>
      </motion.div>

      <SourceNote>
        <a href={SOURCES.pef2026.url} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-2">{SOURCES.pef2026.short}</a>{' '}
        <a href={SOURCES.ptic2026.url} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-2">{SOURCES.ptic2026.short}</a>{' '}
        <a href={SOURCES.conectividad2026.url} target="_blank" rel="noreferrer" className="underline decoration-accent/40 underline-offset-2">{SOURCES.conectividad2026.short}</a>
      </SourceNote>
    </Slide>
  );
}

/* ================================================================== */
/*  15 · BRECHA DOCENTE                                                 */
/* ================================================================== */
export function SlideBrechaDocente() {
  return (
    <Slide>
      <Deco logo="mddh" size={340} className="-bottom-20 -left-20" opacity={0.04} />
      <SlideHeader n={15} eyebrow="Brecha docente" title="La brecha docente: capacitación insuficiente" />

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-5">
        <div className="flex flex-col gap-4">
          <Card className="p-7">
            <p className="eyebrow-tag text-muted mb-3">No saben usarlo</p>
            <p className="metric-md text-fg mb-2">
              <AnimatedNumber value={9.5} decimals={1} delay={0.4} />
              <span className="text-accent text-3xl align-top">%</span>
            </p>
            <p className="body-sm text-muted">
              de las personas que no usan internet lo atribuyen a falta de habilidades (ENDUTIH 2024)
            </p>
          </Card>

          <Card className="p-7">
            <p className="eyebrow-tag text-muted mb-3">Escuelas públicas</p>
            <p className="metric-md text-fg mb-2">
              <AnimatedNumber value={262} delay={0.55} />
              <span className="text-accent text-3xl align-top"> mil</span>
            </p>
            <p className="body-sm text-muted">sin diagnóstico uniforme de equipamiento tecnológico (SEP)</p>
          </Card>
        </div>

        <Card className="p-8 md:p-10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1 h-full"
            style={{ background: 'linear-gradient(180deg, var(--c-accent), transparent)' }}
          />
          <h4 className="font-serif text-2xl text-fg mb-5 font-semibold">La evidencia cruzada</h4>
          <p className="font-serif body-lg text-muted leading-relaxed mb-4">
            México Evalúa (2026) documenta que persiste una{' '}
            <strong className="text-fg">falta de claridad</strong> sobre las condiciones reales de
            conectividad y, sobre todo, sobre la capacitación docente, al cruzar la consulta de la SEP
            con los microdatos de ENDUTIH 2025.
          </p>
          <p className="font-serif body-lg text-muted leading-relaxed">
            El problema no es la ausencia de tecnología: es la ausencia de{' '}
            <span className="text-accent font-semibold">preparación institucional</span> para que quienes
            enseñan sepan aprovecharla.
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  16 · SUJETOS VÍCTIMAS                                               */
/* ================================================================== */
export function SlideVictimas() {
  const indirectas = [
    ['Personal docente', 'que no recibe capacitación sistemática en competencias digitales.'],
    ['Familias', 'de la comunidad escolar que dependen del acceso institucional como única vía de conectividad.'],
    ['Comunidad de Tuxtla Gutiérrez', 'afectada por la omisión estructural del Estado en garantizar equidad regional.'],
  ];

  return (
    <Slide>
      <Deco logo="cecocise" size={310} className="-top-16 -right-16" opacity={0.04} />
      <SlideHeader n={16} eyebrow="Sujetos" title="Sujetos víctimas del caso" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
        <Card className="p-6 md:p-9 relative overflow-hidden flex flex-col">
          <div
            className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
            style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 10%, transparent)' }}
          />
          <h3 className="font-serif text-[clamp(1.7rem,2.4vw,2.2rem)] text-fg font-semibold mb-2 relative z-10">
            Directas
          </h3>
          <div className="w-10 h-0.5 bg-accent mb-5" />
          <p className="metric-lg text-accent mb-3 relative z-10">
            <AnimatedNumber value={64} delay={0.5} />
          </p>
          <p className="body-lg text-fg relative z-10">estudiantes de primer grado</p>
          <p className="body-sm text-muted mt-2 relative z-10">Grupos 1.º A (33) y 1.º B (31)</p>
        </Card>

        <Card className="p-6 md:p-9 flex flex-col">
          <h3 className="font-serif text-[clamp(1.7rem,2.4vw,2.2rem)] text-fg font-semibold mb-2">
            Indirectas
          </h3>
          <div className="w-10 h-0.5 bg-line mb-5" />
          <ul className="flex flex-col gap-3.5">
            {indirectas.map(([strong, rest]) => (
              <li key={strong} className="flex gap-3 body-md text-muted leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  <strong className="text-fg">{strong}</strong> {rest}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  17 · AUTORIDADES RESPONSABLES                                       */
/* ================================================================== */
export function SlideAutoridades() {
  const levelStyle = (level: string) =>
    level === 'Federal'
      ? { backgroundColor: 'var(--c-accent)', color: 'var(--c-onaccent)' }
      : level === 'Estatal'
        ? {
            backgroundColor: 'color-mix(in srgb, var(--c-accent) 55%, transparent)',
            color: 'var(--c-onaccent)',
          }
        : {
            backgroundColor: 'color-mix(in srgb, var(--c-accent) 24%, transparent)',
            color: 'var(--c-accent)',
          };

  return (
    <Slide>
      <Deco logo="unach" size={310} className="-bottom-20 -right-16" opacity={0.04} />

      <div className="flex flex-col h-full min-h-0">

        {/* HEADER */}
        <div className="shrink-0">
          <SlideHeader
            n={17}
            eyebrow="Responsabilidad institucional"
            title="Autoridades responsables de la omisión"
            lead="La obligación es del Estado mexicano, pero se concreta en autoridades identificables. La responsabilidad es escalonada: va de la rectoría federal a la gestión del plantel."
          />
        </div>

        {/* CARDS */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
            {RESPONSIBLE_AUTHORITIES.map((a) => (
              <Card
                key={a.entity}
                className="p-3 flex flex-col min-h-0"
              >
                <span
                  className="eyebrow-tag self-start rounded-full px-2.5 py-1 mb-3 shrink-0"
                  style={levelStyle(a.level)}
                >
                  {a.level}
                </span>

                <h4 className="font-serif text-[clamp(1.25rem,1.2vw,1.55rem)] font-semibold text-fg leading-tight mb-2 shrink-0">
                  {a.entity}
                </h4>

                <p className="body-sm text-muted leading-snug flex-1 min-h-0 overflow-hidden">
                  {a.duty}
                </p>

                <p className="eyebrow-tag text-accent mt-3 pt-3 border-t border-line shrink-0">
                  {a.basis}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* AVISO FINAL */}
        <motion.div
          variants={fadeUp}
          className="mt-4 mb-8 shrink-0 flex items-start gap-3 body-sm text-muted"
        >
          <TriangleAlert className="w-5 h-5 text-accent shrink-0" aria-hidden />

          <p className="min-w-0 leading-snug">
            La corresponsabilidad del personal docente y administrativo no sustituye la obligación
            estatal: sin formación continua ni equipamiento garantizados, exigirles el aprovechamiento
            pedagógico de las TIC traslada indebidamente la carga de una omisión estructural.
          </p>
        </motion.div>

      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  18 · GRUPOS COMPARATIVOS                                            */
/* ================================================================== */
export function SlideGrupos() {
  return (
    <Slide>
      <Deco size={300} className="-bottom-16 -left-14" opacity={0.05} />
      <SlideHeader
        n={18}
        eyebrow="Diseño comparativo"
        title="Distribución de estudiantes"
        lead="Un grupo cuenta con apoyo tecnológico institucional y el otro no, lo que permitirá documentar de manera empírica el efecto de la omisión estatal durante el ciclo 2026-2027."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="p-6 md:p-9 relative overflow-hidden flex flex-col">
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundColor: 'var(--c-accent)' }}
          />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <AccentCircle size={32} />
              <h4 className="font-serif text-[clamp(1.5rem,2.1vw,2rem)] font-semibold text-fg">
                Grupo 1.º A
              </h4>
            </div>
            <p className="metric-lg text-accent mb-1">
              <AnimatedNumber value={33} delay={0.45} />
            </p>
            <p className="body-md text-fg mb-3">estudiantes</p>
            <p className="body-sm text-muted mt-auto">
              Con apoyo tecnológico institucional · grupo de referencia.
            </p>
          </div>
        </Card>

        <Card className="p-6 md:p-9 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full border-2 border-line shrink-0" />
            <h4 className="font-serif text-[clamp(1.5rem,2.1vw,2rem)] font-semibold text-fg">
              Grupo 1.º B
            </h4>
          </div>
          <p className="metric-lg text-fg mb-1">
            <AnimatedNumber value={31} delay={0.6} />
          </p>
          <p className="body-md text-fg mb-3">estudiantes</p>
          <p className="body-sm text-muted mt-auto">
            Sin apoyo tecnológico institucional · grupo de contraste.
          </p>
        </Card>
      </div>

      <p className="body-md text-muted mt-4">
        Total: <span className="text-accent font-semibold">64 estudiantes</span> de primer grado en la
        Escuela Secundaria Técnica No. 156 "Real del Bosque".
      </p>
    </Slide>
  );
}

/* ================================================================== */
/*  17 · MOTIVOS                                                         */
/* ================================================================== */
export function SlideMotivos() {
  return (
    <Slide>
      <Deco logo="mddh" size={380} className="-top-16 -right-24" opacity={0.04} />
      <Deco size={240} className="-bottom-20 -left-16" opacity={0.04} />
      <SlideHeader n={19} eyebrow="Motivos personales" title="Por qué defender este derecho" />

      <Card className="p-7 sm:p-10 lg:p-14 relative overflow-hidden w-full">
        <span
          className="absolute top-2 right-6 md:right-10 font-serif leading-none select-none pointer-events-none text-[clamp(6rem,12vw,11rem)]"
          style={{ color: 'var(--c-accent)', opacity: 0.08 }}
        >
          “
        </span>
        <blockquote className="relative z-10 max-w-5xl">
          <p className="font-serif text-[clamp(1.35rem,2.5vw,2.5rem)] text-fg/90 leading-[1.35] mb-6">
            La niñez mexicana no cuenta con las herramientas necesarias para cambiar su nivel de vida,{' '}
            <span className="text-accent font-bold">no porque la tecnología no exista</span>, sino
            porque el Estado, por <span className="italic underline text-muted">omisión</span>, no la pone a su
            alcance ni capacita a quienes deben enseñar a usarla.
          </p>
          <div
            className="w-16 h-[3px] mb-3"
            style={{ background: 'linear-gradient(90deg, var(--c-accent), transparent)' }}
          />
          <footer className="body-md text-muted font-sans">Víctor Jesús Rumaya Medina</footer>
        </blockquote>
      </Card>
    </Slide>
  );
}

/* ================================================================== */
/*  18 · FUENTES                                                         */
/* ================================================================== */
export function SlideFuentes() {
  const cols = [
    {
      title: 'Normativa y tratados',
      refs: [
        'Cámara de Diputados (2024a). CPEUM.',
        'Cámara de Diputados (2024b). LGDNNA.',
        'DOF (2018). Decreto Art. 101 Bis.',
        'Naciones Unidas (1966). PIDESC.',
        'Naciones Unidas (1989). CDN.',
      ],
    },
    {
      title: 'Investigación y datos',
      refs: [
        'Martínez Domínguez (2018). Paakat.',
        'Moranchel Pocaterra (2019). Rev. Fac. Derecho UNAM.',
        'Villela Cortés y Contreras Islas (2021). Academia y Virtualidad.',
        'INEGI (2021). ENDUTIH 2020: usos educativos de internet y computadora.',
        'INEGI (2025). ENDUTIH 2024, Comunicado 57/25 y Reporte 9/25.',
        'INEGI (2026). ENDUTIH 2025, Comunicado 32/26 y Reporte 19/26.',
        'SEP-DGPPyEE (2025). Principales cifras del SEN 2024-2025.',
        'México Evalúa (2026). Preguntar para regular.',
      ],
    },
    {
      title: 'Presupuesto y política pública',
      refs: [
        'DOF (2025). Presupuesto de Egresos de la Federación 2026.',
        'CEFP, Cámara de Diputados (2025). Nota 163/2025 sobre el PEF 2026.',
        'DOF (2026). Programa de Conectividad en Sitios Públicos y Áreas de Atención Prioritaria 2026.',
        'Select (2026). Seguimiento del Presupuesto TIC del Gobierno federal.',
        'Cámara de Diputados (2024c). Ley General de Educación.',
        'Cámara de Diputados (2025). Ley en Materia de Telecomunicaciones y Radiodifusión.',
      ],
    },
  ];

  return (
    <Slide>
      <Deco logo="unach" size={280} className="-top-14 -right-14" opacity={0.04} />
      <SlideHeader n={20} eyebrow="Referencias" title="Fuentes consultadas" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cols.map((c) => (
          <Card key={c.title} className="p-5 md:p-7 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-1 h-full"
              style={{ background: 'linear-gradient(180deg, var(--c-accent), transparent)' }}
            />
            <h4 className="eyebrow-tag text-accent mb-5">{c.title}</h4>
            <ul className="flex flex-col gap-3">
              {c.refs.map((r) => (
                <li key={r} className="flex gap-3 body-sm text-muted leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="font-sans">{r}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* ================================================================== */
/*  19 · CIERRE                                                          */
/* ================================================================== */
export function SlideCierre() {
  return (
    <section className="presentation-slide h-dvh w-full relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none" />
      <Deco size={630} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.04} />

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
        <LogoUNACH style={{ height: 74, width: 'auto' }} />
        <span className="h-12 w-px bg-line" aria-hidden />
        <LogoCECOCISE style={{ height: 64, width: 'auto' }} />
        <span className="h-12 w-px bg-line" aria-hidden />
        <LogoMDDH style={{ height: 74, width: 'auto' }} />
      </div>

      <h2 className="relative z-10 font-serif font-bold text-fg leading-[0.85] tracking-tighter text-[clamp(3.4rem,8vw,8.5rem)]">
        {'Gracias'.split('').map((ch, i) => (
          <span key={i} className="inline-block">
            {ch}
          </span>
        ))}
      </h2>

      <div
        className="relative z-10 w-88 h-[3px] my-6 rounded-full"
        style={{ background: 'linear-gradient(90deg, transparent, var(--c-accent), transparent)' }}
      />

      <h2 className="relative z-10 body-lg font-bold tracking-wide">
        Víctor Jesús Rumaya Medina
      </h2>
      <h3 className="relative z-10 body-md text-muted tracking-wide">
        MDDH · UNACH-CECOCISE
      </h3>
      <p className="relative z-10 body-sm text-muted/70 mt-6">
        7 de septiembre de 2026
      </p>
      <p className="relative z-10 body-sm text-muted/70 mt-2">
      Tuxtla Gutiérrez, Chiapas
      </p>
    </section>
  );
}

export const SLIDES = [
  SlidePortada, SlideContexto, SlideQueSonTic, SlideCaso, SlideDelimitacion,
  SlideObjeto, SlideDerechoPrincipal, SlideConexos, SlideNumeralia,
  SlideAcceso2025, SlideComparativa, SlideRanking, SlideEducacionTic,
  SlidePresupuesto, SlideBrechaDocente, SlideVictimas, SlideAutoridades,
  SlideGrupos, SlideMotivos, SlideFuentes, SlideCierre,
];

export const SLIDE_TITLES = [
  'Portada', 'Contexto', '¿Qué son las TIC?', 'El caso', 'Delimitación',
  'Objeto de la defensa', 'Derecho Ventana', 'Derechos conexos',
  'Evolución nacional', 'Chiapas vs. México 2025', 'Brecha regional 2024',
  'Ranking estatal', 'TIC y educación', 'Presupuesto 2026', 'Brecha docente',
  'Sujetos víctimas', 'Autoridades responsables', 'Distribución de estudiantes',
  'Motivos', 'Fuentes', 'Cierre',
];
