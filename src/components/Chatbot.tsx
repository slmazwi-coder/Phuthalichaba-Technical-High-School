import React, { useState } from 'react';

const responses = [
  {
    keywords: ['apply', 'admission', 'enrol', 'register', 'application'],
    answer: "Applications are handled directly at the school. Visit us at Outspan, Ha-Sibi, Matatiele, 4730, or call us on 082 868 3439. You can also email us at 200501023@edu.ecprov.gov.za. You'll need your latest report, birth certificate, and parent/guardian ID."
  },
  {
    keywords: ['fee', 'fees', 'cost', 'pay', 'free', 'no-fee'],
    answer: "Phuthalichaba Technical High School is a no-fee public school — there are no tuition fees charged to learners."
  },
  {
    keywords: ['grade', 'grades', 'offer'],
    answer: "We offer Grades 8 through 12."
  },
  {
    keywords: ['subject', 'subjects', 'curriculum', 'math', 'science', 'english', 'academic'],
    answer: "We offer the full NSC/CAPS curriculum including Mathematics, English, Life Sciences, Physical Sciences, Geography, History, Business Studies, and Life Orientation. As a Technical High School, we also offer technical subjects such as Civil Technology, Electrical Technology, Mechanical Technology, and Engineering Graphics & Design."
  },
  {
    keywords: ['technical', 'practical', 'workshop', 'civil', 'electrical', 'mechanical', 'egp', 'cat'],
    answer: "As a Technical High School, we offer practical, skills-based subjects alongside our academic curriculum. Our learners gain hands-on experience in workshops and technical training spaces, preparing them for careers in engineering, construction, technology, and more."
  },
  {
    keywords: ['matric', 'exam', 'preparation', 'revision', 'nsc', 'june'],
    answer: "Absolutely. Matric preparation is a key focus at Phuthalichaba THS. We run structured exam preparation programmes and provide learner support to help Grade 12 students excel in the NSC examinations. The June 2026 examinations commenced on 1 June 2026."
  },
  {
    keywords: ['tip', 'tips', 'advice', 'study', 'exam tips'],
    answer: "Our advice: Prepare well, stay focused, think positive, manage your time, read carefully, and never give up! Your hard work today builds your tomorrow. We believe in you! 💪"
  },
  {
    keywords: ['facility', 'facilities', 'classroom', 'library', 'science', 'workshop', 'computer'],
    answer: "We have well-equipped classrooms, science rooms, technical workshops, a library, and study resources — all designed to support both academic and practical learning."
  },
  {
    keywords: ['contact', 'phone', 'call', 'reach', 'address', 'where', 'location', 'email'],
    answer: "You can call us on 082 868 3439, email 200501023@edu.ecprov.gov.za, or visit us at Outspan, Ha-Sibi, Matatiele, 4730. You can also find us on Facebook: Phuthalichaba Technical High School."
  },
  {
    keywords: ['motto', 'grow', 'excellence', 'tagline'],
    answer: "Our motto is 'Grow in Excellence' — and our tagline is 'Building Future Leaders Through Excellence & Discipline'. It drives everything we do."
  },
  {
    keywords: ['where', 'location', 'matatiele', 'ha-sibi', 'outspan', 'maluti'],
    answer: "We're located at Outspan, Ha-Sibi, Matatiele, in the Eastern Cape — within the Alfred Nzo West Education District."
  },
  {
    keywords: ['colour', 'colors', 'red', 'scarlet'],
    answer: "Our school colours are red and white."
  },
  {
    keywords: ['emis', 'number'],
    answer: "Our EMIS number is 200501023."
  },
  {
    keywords: ['principal', 'head', 'leader'],
    answer: "Please contact the school directly for information about our principal."
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "👋 Hi! I'm the Phuthalichaba Technical High School assistant. Ask me anything about admissions, subjects, technical streams, examinations, facilities, or how to contact us!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const findResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();
    for (const response of responses) {
      if (response.keywords.some(keyword => lower.includes(keyword))) {
        return response.answer;
      }
    }
    return "That's a great question! For more details, please contact us on 082 868 3439, email 200501023@edu.ecprov.gov.za, or visit us at Outspan, Ha-Sibi, Matatiele, 4730.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, role: 'bot' as const, text: findResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#CC1F2D',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(204, 31, 45, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          zIndex: 1000,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Open chatbot"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '350px',
          height: '500px',
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            background: '#CC1F2D',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}>
              🔧
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>
                Ask Phuthalichaba
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
                Your school assistant
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#FAEAEA',
          }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#CC1F2D' : '#FFFFFF',
                  color: msg.role === 'user' ? '#FFFFFF' : '#222222',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 4px',
                background: '#FFFFFF',
                color: '#666',
                fontSize: '0.9rem',
              }}>
                typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid #FAEAEA',
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: '10px 16px',
                border: '2px solid #E8A0A5',
                borderRadius: '20px',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: '10px 16px',
                background: '#CC1F2D',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};