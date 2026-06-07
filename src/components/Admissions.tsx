import React from 'react';

export const Admissions = () => {
  const requirements = [
    'Latest school report / academic records',
    'Certified birth certificate',
    'Parent/Guardian ID copy',
    'Proof of residence',
    'Transfer letter (if applicable)',
  ];

  return (
    <section id="admissions" style={{ padding: '80px 20px', background: '#1A1F3A' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Enrolment
          </div>
          <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
            Admissions & Applications
          </h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Requirements */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '32px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}>
              📋 Required Documents
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px', fontSize: '0.95rem' }}>
              When applying, please bring the following:
            </p>
            <ol style={{ paddingLeft: '20px', color: '#FFFFFF' }}>
              {requirements.map((req, index) => (
                <li key={index} style={{ marginBottom: '12px', fontSize: '1rem' }}>
                  {req}
                </li>
              ))}
            </ol>
          </div>

          {/* Contact Info */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '32px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}>
              📞 How to Apply
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Applications are handled directly at the school. Visit us or contact us:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: '#FFFFFF' }}>
                <strong>Phone:</strong> 082 868 3439
              </div>
              <div style={{ color: '#FFFFFF' }}>
                <strong>Email:</strong> 200501023@edu.ecprov.gov.za
              </div>
              <div style={{ color: '#FFFFFF' }}>
                <strong>Address:</strong> Outspan, Ha-Sibi, Matatiele, 4730
              </div>
            </div>

            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: 'rgba(204, 31, 45, 0.3)',
              borderRadius: '10px',
              borderLeft: '4px solid #CC1F2D',
            }}>
              <p style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                💰 <strong>No-Fee School:</strong> Phuthalichaba Technical High School is a no-fee public school — there are no tuition fees charged to learners.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#CC1F2D',
              color: '#FFFFFF',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Contact Us to Apply
          </a>
        </div>
      </div>
    </section>
  );
};