import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Technical Streams', href: '#technical' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#FFFFFF',
      borderBottom: '3px solid #CC1F2D',
      boxShadow: '0 2px 10px rgba(204, 31, 45, 0.1)',
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo & School Name */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: '#CC1F2D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #CC1F2D',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔧</span>
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: '#1A1F3A', textTransform: 'uppercase' }}>
                PHUTHALICHABA T.H.S
              </div>
              <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600, letterSpacing: '0.1em' }}>
                Grow in Excellence
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '8px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: '8px 14px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#1A1F3A',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FAEAEA';
                  e.currentTarget.style.color = '#CC1F2D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1A1F3A';
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#FFFFFF',
                background: '#CC1F2D',
                borderRadius: '20px',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              🤖 Ask Phuthalichaba
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} color="#CC1F2D" /> : <Menu size={28} color="#CC1F2D" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid #FAEAEA',
            padding: '16px 0',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1A1F3A',
                  borderBottom: '1px solid #FAEAEA',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#CC1F2D',
                marginTop: '8px',
              }}
            >
              🤖 Ask Phuthalichaba
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};