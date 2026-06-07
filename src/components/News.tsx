import React from 'react';

const newsItems = [
  {
    title: 'June 2026 Examinations Now Underway',
    date: 'June 2026',
    excerpt: 'The June 2026 examinations commenced on 1 June 2026. We wish all our learners the best in their exams!',
    icon: '📅',
  },
  {
    title: 'Technical Subjects Focus',
    date: 'Ongoing',
    excerpt: 'Phuthalichaba T.H.S continues to invest in technical education, providing hands-on training in civil, electrical, and mechanical technology.',
    icon: '🔧',
  },
  {
    title: '2026 Applications Open',
    date: 'January 2026',
    excerpt: 'Applications for the 2026 academic year are now being accepted. Visit the school with required documents to apply.',
    icon: '📢',
  },
];

export const News = () => {
  return (
    <section id="news" style={{ padding: '80px 20px', background: '#FAEAEA' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Updates</div>
          <h2 className="section-heading">Latest News</h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {newsItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                borderLeft: '4px solid #CC1F2D',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(204, 31, 45, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: '#CC1F2D',
                    fontWeight: 700,
                  }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>
                    {item.date}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};