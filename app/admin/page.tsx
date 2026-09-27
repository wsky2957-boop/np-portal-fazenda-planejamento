'use client';

import Link from 'next/link';

const reports = [
  'Fazenda',
  'Planejamento',
  'Transparência',
  'Auditoria',
  'Denúncias',
];

const roles = [
  { title: 'Secretário de Estado', value: 'Acesso total às decisões de política pública e execução.' },
  { title: 'Secretário Adjunto', value: 'Gerencia setores, metas e aprovações de rotina.' },
  { title: 'Membro da NP', value: 'Acesso funcional para gestão operacional e dados internos.' },
  { title: 'Governadoria', value: 'Supervisão institucional e acompanhamento de indicadores.' },
];

export default function AdminPage() {
  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <Link href="/" className="back-link">← Voltar</Link>
        <h1>Área Restrita</h1>
      </header>

      <section className="admin-grid">
        <div className="login-card">
          <h2>Login do funcionário</h2>
          <label>
            E-mail institucional
            <input defaultValue="funcionario@np.gov.br" />
          </label>
          <label>
            Senha
            <input type="password" defaultValue="********" />
          </label>
          <button className="btn primary">Entrar</button>
        </div>

        <div className="admin-panel">
          <h2>Permissões e cargos</h2>
          <div className="role-list">
            {roles.map((role) => (
              <div key={role.title} className="role-card">
                <strong>{role.title}</strong>
                <p>{role.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card-block admin-block">
        <h2>Modos de gestão</h2>
        <div className="chip-list no-wrap">
          {reports.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <ul className="task-list">
          <li>Atualizar notícias e comunicados</li>
          <li>Publicar indicadores de transparência</li>
          <li>Gerenciar despesas e receitas</li>
          <li>Criar cadastros de funcionários e fotos</li>
          <li>Avaliar e responder denúncias</li>
          <li>Registrar auditoria e histórico</li>
        </ul>
      </section>
    </main>
  );
}
