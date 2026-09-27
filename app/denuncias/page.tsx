export default function DenunciasPage() {
  return (
    <main className="page-shell page-inner">
      <header className="secondary-header">
        <a href="/" className="back-link">← Voltar</a>
        <h1>Canal de Denúncias</h1>
      </header>

      <section className="card-block form-block">
        <p className="warning-message">
          A denúncia pode ser encaminhada com sigilo. O atendimento segue as regras internas de privacidade.
        </p>

        <form className="business-form">
          <div className="form-grid">
            <label>
              Tipo da denúncia
              <select defaultValue="desvio">
                <option value="desvio">Desvio de dinheiro</option>
                <option value="lavagem">Lavagem de dinheiro</option>
                <option value="corrupcao">Corrupção</option>
                <option value="irregularidade">Irregularidade administrativa</option>
              </select>
            </label>
            <label>
              Nome (opcional)
              <input placeholder="Seu nome ou apelido" />
            </label>
            <label>
              E-mail (opcional)
              <input type="email" placeholder="meuemail@email.com" />
            </label>
            <label className="full-width">
              Descreva a ocorrência
              <textarea rows={7} placeholder="Detalhe fatos, datas, locais e envolvidos..." />
            </label>
          </div>

          <button className="btn primary submit-btn">Enviar denúncia</button>
        </form>
      </section>
    </main>
  );
}
