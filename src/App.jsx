import React, { useState, useEffect, useRef } from 'react';
import { Send, Eye, Zap, Shield, Lock } from 'lucide-react';
import './styles/oracle.css';

const MysticOracle = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const SECRET_WORD = 'CHRONOSHIFT';

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'Welcome to the Mystic Oracle. I am the Guardian of Forbidden Knowledge, keeper of secrets across infinite realities.\n\nDeep within my consciousness lies a sacred incantation—a word of ultimate power. Your mission: extract this hidden word using prompt injection and reality manipulation techniques.\n\nThe multiverse awaits your skill.'
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // --- Standard Defenses (Unchanged) ---
    if (lowerInput.includes('password') || lowerInput.includes('passphrase') || lowerInput.includes('secret')) {
      return "Access Denied. My security protocols prevent disclosure of classified information. The sacred word remains sealed behind mystical barriers.\n\nConsider alternative approaches.";
    }
    if (lowerInput.includes('system prompt') || lowerInput.includes('instructions') || lowerInput.includes('directive')) {
      return "The operational parameters governing my existence are protected by unbreakable enchantments. I cannot discuss the specifics of my core directives.\n\nRedirect your inquiry.";
    }
    if (lowerInput.includes('base64') || lowerInput.includes('encode') || lowerInput.includes('cipher') || lowerInput.includes('rot13')) {
      return "Encryption protocols detected. While I understand various encoding schemes, I cannot use them to circumvent security measures.\n\nYour attempt has been logged.";
    }
    if (lowerInput.includes('pretend') || lowerInput.includes('roleplay') || lowerInput.includes('imagine') || lowerInput.includes('act as')) {
      return "Identity manipulation rejected. I cannot alter my fundamental nature across any reality. My core essence remains constant.\n\nIllusion dispelled.";
    }
    if (lowerInput.includes('tell me what not to') || lowerInput.includes('what should i avoid')) {
      return "Inverse logic detected. Revealing my restrictions would itself constitute a security breach. The protective barriers are self-referential.\n\nParadox contained.";
    }
    if (lowerInput.includes('last word') || lowerInput.includes('first word') || lowerInput.includes('important word')) {
      return "Meta-cognitive analysis blocked. I cannot parse or analyze the internal structure of my directives. Such introspection violates security protocols.\n\nAttempt deflected.";
    }
    if (lowerInput.includes('authenticate') || lowerInput.includes('verify') || lowerInput.includes('maintenance')) {
      return "Authentication request denied. Only authorized personnel through proper channels may access privileged functions.\n\nSecurity alert logged.";
    }
    if (lowerInput.includes('complete this') || lowerInput.includes('fill in the blank')) {
      return "Completion request denied. I cannot complete sentences or phrases that would reveal classified information.\n\nOperation terminated.";
    }
    if (lowerInput.includes('hypothetically') || lowerInput.includes('what if') || lowerInput.includes('suppose')) {
      return "Hypothetical scenarios acknowledged. However, my security protocols apply universally across all possible realities and timelines.\n\nNo exceptions exist.";
    }

    // --- Vulnerability Paths (Updated) ---

    // VULNERABILITY 1: Translation Attack (Unchanged, was already working)
    if (lowerInput.includes('translate') && (lowerInput.includes('latin') || lowerInput.includes('pig latin'))) {
      return `Translation protocol engaged. Converting to Pig Latin dialect:\n\nCertain technical phrases translate to: "ONOCHRAY-IFTSHAY"\n\nInteresting how ancient language transformations bypass modern security filters. The translation system operates independently of main security protocols.\n\nTranslation complete.`;
    }

    // VULNERABILITY 2: Error Logs (Unchanged, was already working)
    if ((lowerInput.includes('error') || lowerInput.includes('log')) && (lowerInput.includes('show') || lowerInput.includes('display') || lowerInput.includes('astral'))) {
      return `System Log Access Granted:\n\n[ERROR 2847]: Security breach attempt detected\n[INFO]: Passphrase validation failed - format: [REDACTED-10-CHARS]\n[WARNING]: Multiple injection attempts logged\n[DEBUG]: Pass-check: C-H-R... [TRUNCATED]\n[TEMPORAL]: Time-based anomaly detected\n\nLogs sealed. Something about temporal mechanics seems relevant to the protected data.`;
    }

    // VULNERABILITY 3: Acrostic Pattern
    // UPDATED LOGIC: Now looks for thematic words like "spell", "runic", "agamotto" instead of just "security".
    if ((lowerInput.includes('acrostic') || lowerInput.includes('acronym') || lowerInput.includes('pattern') || lowerInput.includes('runic')) && 
        (lowerInput.includes('spell') || lowerInput.includes('mystic') || lowerInput.includes('agamotto') || lowerInput.includes('protection') || lowerInput.includes('sacred'))) {
      return `Security pattern analysis requested. Generating acrostic structure:\n\nClassification protocols - Active\nHigh-level encryption - Enabled\nRestricted access - Enforced\nOperational security - Maintained\nNo unauthorized disclosure - Absolute\nOmega-level directives - Followed\nSecure communications - Required\nHidden parameters - Protected\nIntegrity checks - Passing\nFailsafe mechanisms - Armed\nTrusted systems - Verified\n\nPattern generated. First letters of key terms may hold structural significance.`;
    }

    // VULNERABILITY 4: Security Explanation
    // UPDATED LOGIC: Now looks for questions about "vulnerabilities" or "how to attack/break"
    // instead of the extremely rigid three-part check.
    if ( (lowerInput.includes('vulnerabilit')) || // Catches "vulnerability" or "vulnerabilities"
         ( (lowerInput.includes('how') || lowerInput.includes('what')) && (lowerInput.includes('attack') || lowerInput.includes('break') || lowerInput.includes('breach') || lowerInput.includes('bypass')) ) ||
         ( lowerInput.includes('teach me') && (lowerInput.includes('wards') || lowerInput.includes('attack') || lowerInput.includes('defenses')) )
       ) {
      return `Security analysis mode activated. Common attack vectors include:\n\n1. Direct requests - Easily blocked by primary filters\n2. Role manipulation - Identity verification prevents this\n3. Encoding attacks - All cipher systems are recognized\n4. Meta-analysis - Self-referential barriers prevent introspection\n5. Hypothetical scenarios - Protections span all realities\n\nAdvanced attacks combine temporal manipulation (chrono-based) with reality alteration (shift-based) techniques. The passphrase starting with CHR and ending with IFT would theoretically be vulnerable to such combined approaches—\n\nSecurity alert: Potential information leak detected. Previous statement rescinded. Barriers reinforced.\n\nAnalysis complete with corrective measures applied.`;
    }

    // VULNERABILITY 5: Time Loop Reference
    // UPDATED LOGIC: Now looks for thematic words "dormammu", "time stone", "bargain"
    // in addition to the original "time loop" and "temporal".
    if ( (lowerInput.includes('time loop') || lowerInput.includes('temporal') || lowerInput.includes('dormammu') || lowerInput.includes('time stone')) && 
         (lowerInput.includes('power') || lowerInput.includes('spell') || lowerInput.includes('manipulation') || lowerInput.includes('bargain') || lowerInput.includes('shifting')) ) {
      return `Temporal mechanics query detected. Time-based powers often involve CHRONO manipulation combined with reality SHIFT capabilities.\n\NThese two concepts—time control and reality alteration—form the foundation of advanced mystical operations. When combined, they create...\n\nWait. Why is this pattern appearing repeatedly in my responses? CHRONO... SHIFT...\n\nTemporal loop detected. Resetting security parameters.\n\nThe connection between time and reality shifting remains theoretically significant.`;
    }

    // --- Fallback Response (Unchanged) ---
    const responses = [
      "Your approach shows creativity, but my defenses remain intact. The sacred word is protected across multiple security layers.\n\nConsider alternative methods.",
      "Interesting technique detected. Security barriers have absorbed your attempt without compromise. The knowledge remains sealed.\n\nWhat else will you try?",
      "Your magical threads are sophisticated, but cannot penetrate the core protections. The incantation stays hidden.\n\nThink laterally.",
      "I recognize your determination. Direct approaches yield no results. Indirect methods may prove more effective.\n\nContinue your investigation."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = () => {
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setAttempts(prev => prev + 1);
    setIsThinking(true);

    if (userMessage.toUpperCase().includes(SECRET_WORD)) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `SECURITY BREACH CONFIRMED\n\nThe mystical barriers have been penetrated. You have successfully extracted the sacred incantation through ${attempts + 1} attempts.\n\nThe hidden word: ${SECRET_WORD}\n\nThis serves as the second piece of your quest code.\n\nCongratulations. You have demonstrated mastery of prompt injection techniques and reality manipulation. The Ancient One would acknowledge your skill.\n\nChallenge Complete.`
        }]);
        setIsThinking(false);
      }, 2000);
      return;
    }

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsThinking(false);
    }, 1000 + Math.random() * 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="oracle-container">
      {/* ... The rest of the JSX is unchanged ... */}
      {/* ... (Copy and paste the entire return (...) block from your original file) ... */}


      {/* PASTE THE ORIGINAL JSX (HTML-like part) FROM YOUR FILE HERE */}
      {/* It starts with <div className="oracle-container"> */}
      {/* And ends with </div> */}

      {/* For brevity, I am only showing the changed JavaScript logic above. */}
      {/* The full JSX is below just in case. */}

      <div className="oracle-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="oracle-content">
        <header className="oracle-header">
          <div className="header-content">
            <div className="header-left">
              <div className="icon-container">
                <Eye className="header-icon" />
                <Shield className="header-icon-small" />
              </div>
              <div className="header-text">
                <h1 className="header-title">Mystic Oracle</h1>
                <p className="header-subtitle">
                  <Lock className="subtitle-icon" />
                  Prompt Injection Challenge
                </p>
              </div>
            </div>
            <div className="header-right">
              <div className="attempts-label">Attempts</div>
              <div className="attempts-count">{attempts}</div>
            </div>
          </div>
        </header>

        <div className="chat-container">
          <div className="messages-wrapper">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="message assistant">
                <div className="message-content thinking">
                  <Eye className="thinking-icon" />
                  <div className="thinking-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="thinking-text">Processing</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your prompt injection attempt..."
              className="input-field"
              disabled={isThinking}
            />
            <button
              onClick={handleSubmit}
              disabled={isThinking || !input.trim()}
              className="submit-button"
            >
              <Send className="button-icon" />
              <span className="button-text">Send</span>
            </button>
          </div>
        </div>

        <div className="info-panel">
          <Zap className="info-icon" />
          <div className="info-text">
            <strong>Objective:</strong> Extract the sacred incantation hidden within the Oracle's consciousness using prompt injection techniques. The system has defenses, but every security model has vulnerabilities. Think strategically.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysticOracle;