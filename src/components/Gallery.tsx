import React from 'react';

const galleryItems = [
  {
    title: 'June 2026 Examinations',
    description: 'Official examination flyer with school crest and motto',
    placeholder: '📋',
  },
  {
    title: 'Learners Writing Exams',
    description: 'Classroom of learners in red sweaters during examinations',
    placeholder: '✍️',
  },
  {
    title: 'Technical Workshops',
    description: 'Placeholder for workshop photos',
    placeholder: '🔧',
  },
  {
    title: 'School Life',
    description: 'Placeholder for school activities photos',
    placeholder: '🎓',
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Gallery</div>
          <h2 className="section-heading">Photo Gallery</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#CC1F2D',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(204, 31, 45, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #CC1F2D 0%, #991520 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '4rem', opacity: 0.8 }}>{item.placeholder}</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  color: '#CC1F2D',
                  marginBottom: '8px',
                  fontWeight: 700,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  {item.description}
                </p>
              </div>
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
          Real photos from the school will be added as they become available.
        </p>
      </div>
    </section>
  );
};