import React from 'react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Technical Streams', href: '#technical' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: '#1A1F3A',
      padding: '60px 20px 20px',
      color: '#FFFFFF',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Logo & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#CC1F2D',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                🔧
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1rem' }}>
                  PHUTHALICHABA T.H.S
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                  "Grow in Excellence"
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Phuthalichaba Technical High School<br />
              Outspan, Ha-Sibi, Matatiele<br />
              Eastern Cape, 4730
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>
              EMIS: 200501023
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '16px',
              color: '#FFFFFF',
              fontWeight: 700,
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    color: '#CC1F2D',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E8A0A5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#CC1F2D';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '16px',
              color: '#FFFFFF',
              fontWeight: 700,
            }}>
              Contact & Social
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
              📞 082 868 3439
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              📧 200501023@edu.ecprov.gov.za
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: '#CC1F2D',
                color: '#FFFFFF',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              👍 Facebook
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Phuthalichaba Technical High School. All Rights Reserved. | Alfred Nzo West Education District, Eastern Cape
          </p>
        </div>
      </div>
    </footer>
  );
};