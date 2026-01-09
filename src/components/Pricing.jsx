import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-content">
        <div className="section-header">
          <span className="section-icon">💰</span>
          <h2 className="section-title">Investimento e Forma de Pagamento</h2>
        </div>

        <div className="pricing-card">
          <div className="pricing-header">
            <span className="pricing-label">Valor do Combo</span>
            <div className="pricing-value">
              <span className="currency">R$</span>
              <span className="amount">1.200,00</span>
            </div>
          </div>

          <div className="payment-details">
            <div className="payment-item">
              <div className="payment-icon">📅</div>
              <div className="payment-info">
                <h3 className="payment-title">Reserva de Data</h3>
                <p className="payment-description">
                  Sinal de <strong>30% (R$ 360,00)</strong> para garantir a agenda.
                </p>
              </div>
            </div>

            <div className="payment-item">
              <div className="payment-icon">✅</div>
              <div className="payment-info">
                <h3 className="payment-title">Saldo Restante</h3>
                <p className="payment-description">
                  Os <strong>70% finais (R$ 840,00)</strong> devem ser quitados no dia do evento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-box">
          <p className="quote-text">
            "Cinquenta anos é um marco que merece ser celebrado com a tranquilidade de que cada detalhe está sendo registrado com a máxima qualidade e agilidade."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
