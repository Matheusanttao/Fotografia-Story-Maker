import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">📸📱</span>
          <span className="badge-text">Proposta Combo</span>
        </div>
        <h1 className="hero-title">
          Fotografia + Story Maker
        </h1>
        <p className="hero-subtitle">
          Garanta uma cobertura total do seu evento com uma equipe dupla dedicada a capturar cada momento sob dois olhares complementares.
        </p>
        <div className="hero-highlight">
          <span className="highlight-icon">✨</span>
          <span>Cobertura completa de 6 horas</span>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}

export default Hero
