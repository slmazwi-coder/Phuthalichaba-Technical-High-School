import React from 'react';

const tips = [
  {
    icon: '📖',
    title: 'Prepare Well',
    description: 'Start studying early. Make a study schedule and stick to it.',
  },
  {
    icon: '🎯',
    title: 'Stay Focused',
    description: 'Remove distractions. Find a quiet place to concentrate.',
  },
  {
    icon: '💪',
    title: 'Think Positive',
    description: 'Believe in yourself. Your hard work will pay off!',
  },
  {
    icon: '⏰',
    title: 'Manage Time',
    description: 'Read all questions carefully. Allocate time per section.',
  },
  {
    icon: '📝',
    title: 'Read Carefully',
    description: 'Understand what each question is asking before answering.',
  },
  {
    icon: '🔥',
    title: 'Never Give Up',
    description: 'Keep pushing, keep going. You\'ve got this!',
  },
];

export const ExamPrep = () => {
  return (
    <section id="exams" style={{ padding: '80px 20px', background: '#CC1F2D' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Examination
          </div>
          <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
            Excellence in Examinations
          </h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#FFFFFF', textAlign: 'center' }}>
            At Phuthalichaba T.H.S, we take examination performance seriously. The school runs structured programmes to ensure all learners are well-prepared for the NSC examinations. Our dedicated educators provide guidance, revision sessions, and pastoral support throughout the examination period.
          </p>
        </div>

        {/* Exam Announcement */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          maxWidth: '600px',
          margin: '0 auto 40px',
        }}>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '12px' }}>
            📅 June 2026 Examinations
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
            The June 2026 examinations commenced on <strong>1 June 2026</strong>.
          </p>
        </div>

        {/* Tips Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {tips.map((tip, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{tip.icon}</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px' }}>
                {tip.title}
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div style={{
          maxWidth: '700px',
          margin: '40px auto 0',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#FFFFFF', fontStyle: 'italic', lineHeight: 1.7 }}>
            "Excellence isn't an act — it's a habit. We build that habit every day, in every classroom, workshop and training space."
          </p>
          <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            — Phuthalichaba T.H.S
          </p>
        </div>
      </div>
    </section>
  );
};