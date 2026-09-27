import Link from 'next/link';

const nav = [
  { href: '/', label: 'Início' },
  { href: '/transparencia', label: 'Transparência' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/quadro-pessoal', label: 'Quadro de Pessoal' },
  { href: '/cadastro', label: 'Cadastro Empresarial' },
  { href: '/denuncias', label: 'Denúncias' },
  { href: '/admin', label: 'Admin' },
];

const stats = [
  { label: 'Receita anual', value: 'R$ 3,5 bi' },
  { label: 'Ações em andamento', value: '1.284' },
  { label: 'Contratos vigentes', value: '482' },
  { label: 'Servidores ativos', value: '18.490' },
];

const highlights = [
  'Transparência financeira',
  'Painel de planejamento e execução',
  'Gestão de pessoal e cargos',
  'Canal de denúncias e ouvidoria',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">NP</div>
          <div>
            <p className="eyebrow">Portal institucional</p>
            <h1>Nacional Pleyer</h1>
          </div>
        </div>

        <nav className="main-nav" aria-label="Menu principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="pill">Portal de transparência e gestão</p>
          <h2>Informação pública, planejamento estratégico e controle institucional.</h2>
          <p className="lead">
            A plataforma NP reúne transparência financeira, dados públicos, notícias, pessoal,
            administração e canais de denúncia em uma experiência moderna, acessível e segura.
          </p>

          <div className="cta-row">
            <Link href="/transparencia" className="btn primary">Acessar transparência</Link>
            <Link href="/cadastro" className="btn secondary">Cadastrar empresa</Link>
          </div>

          <ul className="chip-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <div className="panel-box">
            <div className="mini-label">Indicador principal</div>
            <strong>R$ 3.500.000</strong>
            <span>Valores em tesouraria e planejamento fiscal</span>
          </div>

          <div className="mini-grid">
            <div>
              <label>Receitas</label>
              <b>R$ 1.280M</b>
            </div>
            <div>
              <label>Despesas</label>
              <b>R$ 980M</b>
            </div>
            <div>
              <label>Projetos</label>
              <b>126</b>
            </div>
            <div>
              <label>Denúncias</label>
              <b>34</b>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h3>Portal da Transparência</h3>
          <p>Leis de orçamento, execução financeira, contratos, licitações e indicadores públicos.</p>
        </article>
        <article className="feature-card">
          <h3>Planejamento</h3>
          <p>Gestão de metas, investimentos, previsão orçamentária e acompanhamento de ações.</p>
        </article>
        <article className="feature-card">
          <h3>Quadro de Pessoal</h3>
          <p>Cadastro de membros, cargos, fotos, funções e dados de organização institucional.</p>
        </article>
        <article className="feature-card">
          <h3>Denúncias</h3>
          <p>Canal de comunicação para apontar irregularidades, desvios e possíveis práticas ilícitas.</p>
        </article>
      </section>

      <section className="news-banner">
        <div>
          <p className="eyebrow">Últimas notícias</p>
          <h3>Nova rodada de transparência e indicadores consolidada.</h3>
        </div>
        <Link href="/noticias" className="btn primary">Ver todas</Link>
      </section>
    </main>
  );
}
