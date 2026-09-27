const newsList = [
  {
    title: 'Agenda de planejamento pública reforça eficiência fiscal',
    date: '12 de agosto de 2026',
    summary: 'A instituição atualiza prioridades para investimento em infraestrutura e serviços essenciais.',
  },
  {
    title: 'Portal apresenta novo painel de acompanhamento de receitas',
    date: '07 de agosto de 2026',
    summary: 'A nova visão consolidada aumenta a leitura de indicadores e facilita a auditoria pública.',
  },
  {
    title: 'Campanha de transparência reforça acesso à informação',
    date: '01 de agosto de 2026',
    summary: 'O canal institucional divulga orientações, prazos e procedimentos para a população.',
  },
];

export default function NoticiasPage() {
  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <a href="/" className="back-link">← Voltar</a>
        <h1>Notícias e Comunicados</h1>
      </header>

      <section className="news-list">
        {newsList.map((item) => (
          <article key={item.title} className="news-card">
            <span>{item.date}</span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <button className="btn secondary">Ler matéria</button>
          </article>
        ))}
      </section>
    </main>
  );
}
