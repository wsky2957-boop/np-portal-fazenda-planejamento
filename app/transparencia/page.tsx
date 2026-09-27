import Link from 'next/link';

const transparencyRows = [
  { label: 'Receita corrente líquida', value: 'R$ 1.280.000.000' },
  { label: 'Despesas executadas', value: 'R$ 980.500.000' },
  { label: 'Tesouraria atual', value: 'R$ 3.500.000' },
  { label: 'Contratos vigentes', value: '482 contratos' },
  { label: 'Licitações no ano', value: '64 processos' },
  { label: 'Transferências realizadas', value: 'R$ 215.000.000' },
];

export default function TransparenciaPage() {
  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <Link href="/" className="back-link">← Voltar</Link>
        <h1>Portal da Transparência</h1>
      </header>

      <section className="card-block">
        <div className="card-header-row">
          <div>
            <p className="eyebrow">Indicadores institucionais</p>
            <h2>Gestão financeira e orçamentária</h2>
          </div>
          <button className="btn primary">Exportar dados</button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {transparencyRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="info-grid">
        <article className="mini-card">
          <h3>Orçamento</h3>
          <p>Mapeamento anual das despesas, receitas e metas públicas.</p>
        </article>
        <article className="mini-card">
          <h3>Contratos</h3>
          <p>Consulta de contratos vigentes, prazos e valores.</p>
        </article>
        <article className="mini-card">
          <h3>Licitações</h3>
          <p>Acompanhamento das etapas, prazos e modalidades.</p>
        </article>
      </section>
    </main>
  );
}
