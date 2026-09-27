'use client';

import { useMemo, useState } from 'react';

const initialForm = {
  razaoSocial: '',
  cnpj: '',
  inscricaoEstadual: '',
  logradouro: '',
  numero: '',
  complemento: '',
  bairro: '',
  municipio: '',
  uf: '',
  cep: '',
  atividadeEconomica: '',
  situacaoCadastral: '',
  dataInicioAtividades: '',
  regimeTributario: '',
  nomeResponsavel: '',
  telefone: '',
  email: '',
};

export default function CadastroPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const protocolo = useMemo(() => `NP-${Math.floor(100000 + Math.random() * 900000)}`, [submitted]);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <a href="/" className="back-link">← Voltar</a>
        <h1>Cadastro Empresarial</h1>
      </header>

      <section className="card-block form-block">
        <p className="warning-message">
          Documento de demonstração. Não substitui o cadastro oficial nos órgãos competentes.
        </p>

        <form onSubmit={handleSubmit} className="business-form">
          <div className="section-title">Identificação da empresa</div>
          <div className="form-grid">
            <label>
              Nome da empresa / Razão Social
              <input value={form.razaoSocial} onChange={(e) => handleChange('razaoSocial', e.target.value)} />
            </label>
            <label>
              CNPJ
              <input value={form.cnpj} onChange={(e) => handleChange('cnpj', e.target.value)} />
            </label>
            <label>
              Inscrição Estadual
              <input value={form.inscricaoEstadual} onChange={(e) => handleChange('inscricaoEstadual', e.target.value)} />
            </label>
          </div>

          <div className="section-title">Endereço da empresa</div>
          <div className="form-grid">
            <label>
              Logradouro
              <input value={form.logradouro} onChange={(e) => handleChange('logradouro', e.target.value)} />
            </label>
            <label>
              Número
              <input value={form.numero} onChange={(e) => handleChange('numero', e.target.value)} />
            </label>
            <label>
              Complemento
              <input value={form.complemento} onChange={(e) => handleChange('complemento', e.target.value)} />
            </label>
            <label>
              Bairro
              <input value={form.bairro} onChange={(e) => handleChange('bairro', e.target.value)} />
            </label>
            <label>
              Município
              <input value={form.municipio} onChange={(e) => handleChange('municipio', e.target.value)} />
            </label>
            <label>
              UF
              <input value={form.uf} onChange={(e) => handleChange('uf', e.target.value)} />
            </label>
            <label>
              CEP
              <input value={form.cep} onChange={(e) => handleChange('cep', e.target.value)} />
            </label>
          </div>

          <div className="section-title">Dados empresariais</div>
          <div className="form-grid">
            <label>
              Atividade econômica principal
              <input value={form.atividadeEconomica} onChange={(e) => handleChange('atividadeEconomica', e.target.value)} />
            </label>
            <label>
              Situação cadastral
              <input value={form.situacaoCadastral} onChange={(e) => handleChange('situacaoCadastral', e.target.value)} />
            </label>
            <label>
              Data de início das atividades
              <input type="date" value={form.dataInicioAtividades} onChange={(e) => handleChange('dataInicioAtividades', e.target.value)} />
            </label>
            <label>
              Regime de apuração tributária
              <input value={form.regimeTributario} onChange={(e) => handleChange('regimeTributario', e.target.value)} />
            </label>
          </div>

          <div className="section-title">Informações adicionais</div>
          <div className="form-grid">
            <label>
              Nome do proprietário ou responsável legal
              <input value={form.nomeResponsavel} onChange={(e) => handleChange('nomeResponsavel', e.target.value)} />
            </label>
            <label>
              Telefone para contato
              <input value={form.telefone} onChange={(e) => handleChange('telefone', e.target.value)} />
            </label>
            <label>
              E-mail da empresa
              <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
            </label>
          </div>

          <button type="submit" className="btn primary submit-btn">Gerar cadastro</button>
        </form>

        {submitted && (
          <div className="result-box">
            <h3>Cadastro gerado com sucesso</h3>
            <p><strong>Protocolo:</strong> {protocolo}</p>
            <p><strong>Razão Social:</strong> {form.razaoSocial || 'Não informado'}</p>
            <p><strong>CNPJ:</strong> {form.cnpj || 'Não informado'}</p>
            <p><strong>Responsável:</strong> {form.nomeResponsavel || 'Não informado'}</p>
          </div>
        )}
      </section>
    </main>
  );
}
