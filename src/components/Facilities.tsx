

const facilities = [
  {
    icon: '🏫',
    title: 'Classrooms',
    description: 'Well-equipped academic classrooms for all grade levels',
  },
  {
    icon: '🔬',
    title: 'Science Rooms',
    description: 'Life Sciences and Physical Sciences practical spaces',
  },
  {
    icon: '🔧',
    title: 'Technical Workshops',
    description: 'Hands-on training spaces for technical subjects',
  },
  {
    icon: '📚',
    title: 'Library',
    description: 'Study resources, reference materials, and quiet study areas',
  },
  {
    icon: '💻',
    title: 'Computer Lab',
    description: 'IT facilities for Computer Applications Technology',
  },
  {
    icon: '🏃',
    title: 'Sports Grounds',
    description: 'Outdoor space for physical education and sport activities',
  },
];

export const Facilities = () => {
  return (
    <section id="facilities" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Infrastructure</div>
          <h2 className="section-heading">Our Facilities</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {facilities.map((facility, index) => (
            <div
              key={index}
              style={{
                background: '#FAEAEA',
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
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{facility.icon}</div>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#CC1F2D',
                marginBottom: '8px',
                fontWeight: 700,
              }}>
                {facility.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '32px',
          fontSize: '0.9rem',
          color: '#888',
          fontStyle: 'italic',
        }}>
          [TO CONFIRM — verify exact facility details with school]
        </p>
      </div>
    </section>
  );
};