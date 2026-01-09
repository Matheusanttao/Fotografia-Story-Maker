import React from 'react'
import './WhatIncluded.css'

const WhatIncluded = () => {
  const items = [
    {
      icon: '📦',
      title: 'Cobertura Completa',
      description: '06 horas de evento (das 20h às 02h)'
    },
    {
      icon: '🖼️',
      title: 'Galeria de Fotos',
      description: 'Entrega de 100 fotos com tratamento profissional (cor, luz e nitidez)'
    },
    {
      icon: '🚀',
      title: 'Entrega Ágil (Brutos)',
      description: 'Todos os vídeos e fotos feitos no iPhone entregues em até 24h via link ou AirDrop. Vídeos em tempo real no story durante o evento!'
    },
    {
      icon: '🎬',
      title: '1 Vídeo Editado',
      description: 'Entrega de 1 Reel (Highlight) com trilha sonora e edição dinâmica'
    },
    {
      icon: '🎁',
      title: 'Spoiler de Fotos',
      description: 'Envio de 5 fotos editadas em até 24h para você já postar nas redes sociais'
    },
    {
      icon: '📥',
      title: 'Entrega Final',
      description: 'Prazo de até 10 dias úteis para as fotos tratadas via link digital'
    }
  ]

  return (
    <section className="what-included">
      <div className="what-included-content">
        <div className="section-header">
          <span className="section-icon">📦</span>
          <h2 className="section-title">O que está incluso no Combo</h2>
        </div>

        <div className="items-grid">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="item-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item-icon">{item.icon}</div>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIncluded
