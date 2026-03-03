import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bienvenue, voyageur temporel ! 🕰️ Je suis ChronoBot, votre assistant de voyage dans le temps. Comment puis-je vous aider ?",
    isBot: true,
    timestamp: new Date(),
  },
];

const quickReplies = [
  "Paris 1889",
  "Crétacé",
  "Florence 1504",
  "Comment ça marche ?",
];

const botResponses: Record<string, string> = {
  paris: "Paris 1889 est l'une de nos destinations phares ! 🗼 Vous assisterez à l'Exposition Universelle et verrez la Tour Eiffel dans toute sa gloire naissante. Le voyage dure 48h et inclut une garde-robe d'époque. Prix : 15 000 ChronoCrédits.",
  crétacé: "Le Crétacé est notre aventure la plus extrême ! 🦕 Vous observerez des dinosaures depuis notre bulle de protection temporelle. Durée : 24h. Équipement fourni. Prix : 25 000 ChronoCrédits. Garantie anti-paradoxe incluse.",
  florence: "Florence 1504 est un voyage culturel exceptionnel ! 🎨 Vous pourrez visiter l'atelier de Léonard de Vinci et admirer le David de Michel-Ange fraîchement sculpté. Durée : 72h. Prix : 18 000 ChronoCrédits.",
  comment: "C'est simple ! 1️⃣ Choisissez une destination 2️⃣ Nous préparons votre briefing historique 3️⃣ Embarquez dans notre capsule temporelle 4️⃣ Vivez l'aventure ! Notre technologie de pointe garantit un retour sécurisé. 🚀",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("paris") || lower.includes("1889") || lower.includes("eiffel"))
    return botResponses.paris;
  if (lower.includes("crétacé") || lower.includes("cretace") || lower.includes("dinosaure") || lower.includes("dino"))
    return botResponses.crétacé;
  if (lower.includes("florence") || lower.includes("1504") || lower.includes("vinci") || lower.includes("renaissance"))
    return botResponses.florence;
  if (lower.includes("comment") || lower.includes("marche") || lower.includes("fonctionn") || lower.includes("processus"))
    return botResponses.comment;
  if (lower.includes("prix") || lower.includes("coût") || lower.includes("combien"))
    return "Nos voyages démarrent à 15 000 ChronoCrédits. Le prix varie selon la destination et la durée. Quelle époque vous intéresse ? 💰";
  if (lower.includes("danger") || lower.includes("sécurité") || lower.includes("risque"))
    return "Votre sécurité est notre priorité absolue ! 🛡️ Chaque voyageur est équipé d'un bouclier temporel et d'un dispositif de retour instantané. Nous n'avons jamais perdu un seul voyageur.";
  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello"))
    return "Bonjour ! Ravi de vous accueillir chez ChronoVoyage ! 😊 Quelle époque aimeriez-vous explorer ?";
  return "Question intéressante ! Je ne suis pas sûr de bien comprendre. Pourriez-vous reformuler ? Vous pouvez aussi me demander des infos sur Paris 1889, le Crétacé ou Florence 1504 ! 🕰️";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 800 + Math.random() * 800);
  };

  const handleSend = () => sendMessage(input);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:w-[400px]"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">ChronoBot</p>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] text-muted-foreground">En ligne</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        msg.isBot ? "bg-primary/15" : "bg-secondary"
                      }`}
                    >
                      {msg.isBot ? (
                        <Bot className="h-3 w-3 text-primary" />
                      ) : (
                        <User className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.isBot
                          ? "rounded-tl-md bg-secondary text-secondary-foreground"
                          : "rounded-tr-md bg-primary text-primary-foreground"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                    <div className="rounded-2xl rounded-tl-md bg-secondary px-4 py-3">
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
                        <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Replies */}
            <div className="flex gap-2 overflow-x-auto border-t border-border px-4 py-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:scale-105 disabled:opacity-30"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="gold-glow fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatBot;
