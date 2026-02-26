import { useState, useEffect, useRef } from "react";
import "./LeadChatBot.css";

const WHATSAPP_PHONE = "+918448443047";

const steps = [
  {
    key: "name",
    text: "What is your name?",
    options: null
  },
  {
    key: "plotType",
    text: "What type of plots do you want?",
    options: ["Commercial", "Residential"]
  },
  {
    key: "plotSize",
    text: "How much size of plot do you want?",
    options: ["100 sq yd", "200 sq yd", "300 sq yd", "Other"]
  },
  {
    key: "budget",
    text: "What is your budget?",
    options: null
  }
];

export default function LeadChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Welcome to Golden City Township support." },
    { from: "bot", text: steps[0].text }
  ]);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);
  useEffect(() => {
    setTimeout(() => {
    setIsOpen(true)
  }, 5000);
  }, []);
  
  const currentStep = steps[step];

  const buildWhatsAppUrl = (leadAnswers) => {
    const labelMap = {
      name: "Name",
      plotType: "Plot Type",
      plotSize: "Plot Size",
      budget: "Budget"
    };

    const detailLines = Object.entries(labelMap)
      .map(([key, label]) => (leadAnswers[key] ? `${label}: ${leadAnswers[key]}` : null))
      .filter(Boolean);

    const message = [
      "Hi! , I'm interested in Golden City Township plots. Here are my details:",
      detailLines.length ? "My details:" : null,
      ...detailLines,
      "Please connect with me."
    ]
      .filter(Boolean)
      .join("\n");

    const cleanPhoneNumber = WHATSAPP_PHONE.replace(/[^\d+]/g, "").replace("+", "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  };

  const addAnswer = (value) => {
    const updatedAnswers = {
      ...answers,
      [currentStep.key]: value
    };

    const newMessages = [
      ...messages,
      { from: "user", text: value }
    ];

    const next = step + 1;

    if (next < steps.length) {
      newMessages.push({
        from: "bot",
        text: steps[next].text
      });
      setStep(next);
    } else {
      const nextWhatsAppUrl = buildWhatsAppUrl(updatedAnswers);
      newMessages.push(
        {
          from: "bot",
          text: "Thank you for your details. Please download the project information below."
        },
        {
          from: "bot",
          text: "Our sales team will contact you shortly. You can continue the conversation on WhatsApp by clicking the button below."
        },
        {
          from: "bot",
          text: "Connecting you to WhatsApp now..."
        }
      );
      setStep(steps.length);
      setWhatsappUrl(nextWhatsAppUrl);
    //   setTimeout(() => {
    //     window.location.href = nextWhatsAppUrl;
    //   }, 800);
      console.log("Lead:", updatedAnswers);
    }

    setAnswers(updatedAnswers);
    setMessages(newMessages);
    setInput("");
  };

  const sendText = () => {
    if (!input.trim()) return;
    addAnswer(input.trim());
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-toggle-button ${isOpen ? "open" : ""}`}
        aria-label="Open Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M12 8V4H8"></path>
               <rect x="5" y="8" width="14" height="12" rx="2"></rect>
               <circle cx="9" cy="13" r="0.5"></circle>
               <circle cx="15" cy="13" r="0.5"></circle>
               <path d="M9 17h6"></path>
               <circle cx="8" cy="4" r="1"></circle>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`chatbot-window ${isOpen ? "" : "closed"}`}
      >

      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-header-content">
          <div className="chatbot-header-info">
            <div className="chatbot-header-avatar">
              GC
            </div>
            <div>
              <div className="chatbot-header-title">Golden City Township</div>
              <div className="chatbot-header-subtitle">
                <span className="online-indicator"></span>
                Sales Concierge | Online
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="chatbot-close-button"
            aria-label="Close Chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="chatbot-messages-container"
        style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(26,54,93,0.04), transparent 42%), radial-gradient(circle at 70% 0%, rgba(34,75,134,0.04), transparent 38%)" }}
      >
        <div className="chatbot-messages-list">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-row ${m.from}`}
            >
              <div
                className={`message ${m.from}`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {step < steps.length && currentStep.options && (
            <div className="message-row bot">
              <div className="options-container">
                <div className="options-header">
                  Choose an option
                </div>
                <div className="options-list">
                  {currentStep.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => addAnswer(opt)}
                      className="option-button"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input / Options area */}
      <div className="chatbot-input-area">

        {/* Step questions */}
        {step < steps.length && !currentStep.options && (
          <>
            <div className="input-container">
              <div className="input-header">
                {currentStep.text}
              </div>
              <div className="input-wrapper">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendText()}
                  placeholder="Type your answer..."
                  className="input-field"
                />
                <button
                  onClick={sendText}
                  className="send-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Download section after chat */}
        {step >= steps.length && (
          <div className="download-section">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                className="block"
              >
                <button className="download-button whatsapp">
                  Continue on WhatsApp
                </button>
              </a>
            )}

            <a
              href="/brochure.pdf"
              download
              className="block"
            >
              <button className="download-button brochure">
                Download Brochure
              </button>
            </a>

            <a
              href="/payment-plan.pdf"
              download
              className="block"
            >
              <button className="download-button payment">
                Download Payment Plan
              </button>
            </a>

            <a
              href="/layout.pdf"
              download
              className="block"
            >
              <button className="download-button layout">
                Download Layout
              </button>
            </a>

          </div>
        )}

      </div>
      </div>
    </>
  );
}

