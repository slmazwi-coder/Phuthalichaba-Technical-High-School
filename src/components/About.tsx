import React, { useEffect, useState } from 'react';

export const About = () => {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '8–12', label: 'Grades', icon: '📚' },
    { value: 'Technical', label: 'School Type', icon: '🔧' },
    { value: 'No-Fee', label: 'Public School', icon: '🏫' },
    { value: '200501023', label: 'EMIS Number', icon: '📋' },
  ];

  return (
    <section id="about" style={{ padding: '80px 20px', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">About Us</div>
          <h2 className="section-heading">About Phuthalichaba Technical High School</h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#FAEAEA',
            borderRadius: '16px',
            padding: '40px',
            borderLeft: '5px solid #CC1F2D',
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', marginBottom: '20px' }}>
              <strong>Phuthalichaba Technical High School</strong> is a public technical high school located at Outspan, Ha-Sibi, Matatiele, in the Eastern Cape. We operate under the <strong>Alfred Nzo West Education District</strong> within the Elundini Local Municipality.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222', marginBottom: '20px' }}>
              Our motto — <strong style={{ color: '#CC1F2D' }}>"Grow in Excellence"</strong> — is more than a slogan; it is the culture we build every day. At Phuthalichaba T.H.S, we believe that excellence is not an act — it is a habit. We are committed to building future leaders through a combination of rigorous academics, practical technical training, and strong personal discipline.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#222222' }}>
              As a <strong>Technical High School</strong>, we offer something distinctive: a curriculum that bridges classroom knowledge with real-world technical skills. Our learners emerge not only ready for tertiary education, but equipped with practical competencies that prepare them for the world of work and entrepreneurship.
            </p>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: '#CC1F2D',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                }}>
                  {countersVisible ? stat.value : '0'}
                </div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};