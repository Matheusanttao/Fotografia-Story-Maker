import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-content">
        <div className="section-header">
          <span className="section-icon">🌟</span>
          <h2 className="section-title">Como funciona nossa Equipe Dupla</h2>
        </div>
        
        <div className="info-box">
          <p className="info-text">
            Utilizamos câmeras profissionais e a tecnologia do <strong>iPhone 16 Pro</strong> para cobrir as <strong>6 horas de festa</strong> (das 20h às 02h):
          </p>
        </div>

        <div className="professionals">
          <div className="professional-card professional-1">
            <div className="professional-header">
              <span className="professional-number">1</span>
              <h3 className="professional-title">Profissional 1</h3>
              <span className="professional-subtitle">Fotografia Profissional</span>
            </div>
            <p className="professional-description">
              Foco total nos registros oficiais, fotos de família, convidados nas mesas, protocolo do bolo e fotos posadas com alta resolução.
            </p>
          </div>

          <div className="professional-card professional-2">
            <div className="professional-header">
              <span className="professional-number">2</span>
              <h3 className="professional-title">Profissional 2</h3>
              <span className="professional-subtitle">Conteúdo Digital</span>
            </div>
            <p className="professional-description">
              Foco na "vibe" do evento em formato vertical, capturando bastidores, reações espontâneas e produzindo vídeos dinâmicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
