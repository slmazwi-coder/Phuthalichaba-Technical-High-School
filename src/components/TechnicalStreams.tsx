

const streams = [
  {
    title: 'Civil Technology',
    icon: '🏗️',
    description: 'Construction, woodwork, and bricklaying skills for the building industry.',
  },
  {
    title: 'Electrical Technology',
    icon: '⚡',
    description: 'Electrical systems, wiring, and electronics practical training.',
  },
  {
    title: 'Mechanical Technology',
    icon: '⚙️',
    description: 'Mechanical engineering principles and practical workshop skills.',
  },
  {
    title: 'Engineering Graphics & Design',
    icon: '📐',
    description: 'Technical drawing, CAD skills, and engineering design principles.',
  },
  {
    title: 'Computer Applications Technology',
    icon: '💻',
    description: 'IT skills, software applications, and digital literacy.',
  },
];

export const TechnicalStreams = () => {
  return (
    <section id="technical" style={{ padding: '80px 20px', background: '#FAEAEA' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Technical Focus</div>
          <h2 className="section-heading">Technical Streams</h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', textAlign: 'center', marginBottom: '40px' }}>
            As a <strong>Technical High School</strong>, we offer practical, skills-based subjects alongside our academic curriculum. Our learners gain hands-on experience in workshops and technical training spaces, preparing them for careers in engineering, construction, technology, and more.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {streams.map((stream, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '28px',
                  borderLeft: '4px solid #CC1F2D',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(204, 31, 45, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{stream.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#CC1F2D',
                  marginBottom: '8px',
                  fontWeight: 700,
                }}>
                  {stream.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                  {stream.description}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '32px', textAlign: 'center', fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
            Technical subject offerings may vary. Please contact the school for the latest information.
          </p>
        </div>
      </div>
    </section>
  );
};