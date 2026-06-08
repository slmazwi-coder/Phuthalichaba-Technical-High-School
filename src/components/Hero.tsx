import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const quotes = [
  "You've got this! Believe in yourself.",
  "We are proud of you! Your school is behind you 100%.",
  "Never give up! Keep pushing, keep going.",
];

export const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '85vh',
      background: 'linear-gradient(135deg, rgba(204,31,45,0.85) 0%, rgba(153,21,32,0.85) 50%, rgba(26,31,58,0.85) 100%), url(/assets/hero/FB_IMG_1780402740490.jpg) center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 20px',
    }}>
      {/* Mountain silhouette overlay */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px' }} preserveAspectRatio="none">
        <path d="M0,150 L100,80 L200,110 L300,60 L400,100 L500,50 L600,90 L700,40 L800,80 L900,60 L1000,100 L1100,50 L1200,90 L1200,150 Z" fill="rgba(26,31,58,0.4)" />
        <path d="M0,150 L150,100 L300,130 L450,70 L600,120 L750,60 L900,110 L1050,80 L1200,120 L1200,150 Z" fill="rgba(153,21,32,0.3)" />
      </svg>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 900,
          color: '#FFFFFF',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}>
          Grow in Excellence
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: 'rgba(255,255,255,0.95)',
          marginBottom: '20px',
          lineHeight: 1.6,
          fontWeight: 400,
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}>
          Building Future Leaders Through Excellence & Discipline
        </p>

        {/* Rotating motivational quote */}
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '12px',
          padding: '16px 24px',
          marginBottom: '32px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#FFFFFF',
            fontStyle: 'italic',
            transition: 'opacity 0.5s',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}>
            "{quotes[currentQuote]}"
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/about"
            style={{
              padding: '14px 32px',
              background: '#FFFFFF',
              color: '#CC1F2D',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Our School
          </Link>
          <Link
            to="/admissions"
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};