const staff = [
  { name: 'Ana Beatriz Silva', cargo: 'Secretária de Estado', setor: 'Gestão Estratégica' },
  { name: 'Rafael Costa', cargo: 'Secretário Adjunto', setor: 'Planejamento' },
  { name: 'Patrícia Moura', cargo: 'Membro da NP', setor: 'Fazenda' },
  { name: 'Eduardo Lima', cargo: 'Analista Administrativo', setor: 'Transparência' },
];

export default function QuadroPessoalPage() {
  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <a href="/" className="back-link">← Voltar</a>
        <h1>Quadro de Pessoal</h1>
      </header>

      <section className="cards-people">
        {staff.map((person) => (
          <article key={person.name} className="person-card">
            <div className="avatar">{person.name.charAt(0)}</div>
            <h3>{person.name}</h3>
            <p>{person.cargo}</p>
            <span>{person.setor}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
