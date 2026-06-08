

export const Academics = () => {
  const subjects = [
    'Mathematics / Mathematical Literacy',
    'English Home Language / First Additional Language',
    'Life Sciences',
    'Physical Sciences',
    'Geography',
    'History',
    'Business Studies',
    'Life Orientation',
  ];

  return (
    <section id="academics" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Curriculum</div>
          <h2 className="section-heading">Curriculum & Academic Offering</h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', textAlign: 'center' }}>
            Phuthalichaba T.H.S follows the <strong>National Senior Certificate (NSC) / CAPS curriculum</strong>, with a strong emphasis on technical subjects that prepare learners for both further study and skilled employment.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Core Subjects */}
          <div style={{
            background: '#FAEAEA',
            borderRadius: '16px',
            padding: '32px',
            borderTop: '4px solid #CC1F2D',
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              color: '#CC1F2D',
              marginBottom: '20px',
              fontWeight: 700,
            }}>
              📚 Academic Subjects (NSC / CAPS)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {subjects.map((subject, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(204, 31, 45, 0.1)',
                  fontSize: '1rem',
                  color: '#222222',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#CC1F2D',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Subjects */}
          <div style={{
            background: '#1A1F3A',
            borderRadius: '16px',
            padding: '32px',
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              color: '#FFFFFF',
              marginBottom: '20px',
              fontWeight: 700,
            }}>
              🔧 Technical Subjects & Specialisations
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontSize: '0.95rem' }}>
              As a Technical High School, Phuthalichaba T.H.S offers technical subject streams:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Civil Technology', 'Electrical Technology', 'Mechanical Technology', 'Engineering Graphics & Design (EGD)', 'Computer Applications Technology (CAT)'].map((subject, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '1rem',
                  color: '#FFFFFF',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#CC1F2D',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  {subject}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontStyle: 'italic' }}>
              [TO CONFIRM — verify exact technical subject offering with school]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};