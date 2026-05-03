import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaMicrophone, FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';
import Avatar from './Avatar';

const AIGuide = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  // Dynamic transformations based on scroll
  const avatarScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.5, 0.2]);
  const avatarX = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const avatarY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setCurrentText(text);
  };

  const handleChat = async (input) => {
    if (!input.trim()) return;
    const msg = input || userInput;
    setChatHistory(prev => [...prev, { role: 'user', text: msg }]);
    setUserInput("");
    setIsThinking(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are Mohammed Ali's AI Avatar Guide. Keep it professional, futuristic, and helpful. 
      The user asked: "${msg}". 
      Context: Mohammed is a Full-Stack dev skilled in React, Three.js, Node. 
      Respond concisely and verbally.`;

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      
      setChatHistory(prev => [...prev, { role: 'ai', text: responseText }]);
      speak(responseText);
      
      // Auto-navigation based on AI response keywords
      if (responseText.toLowerCase().includes("projects")) document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' });
      if (responseText.toLowerCase().includes("story")) document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
      if (responseText.toLowerCase().includes("contact")) document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
      
    } catch (error) {
      console.error(error);
      speak("My neural link is flickering, but I'm here to help.");
    } finally {
      setIsThinking(false);
    }
  };

  useEffect(() => {
    const handleSpeakEvent = (e) => speak(e.detail);
    window.addEventListener('ai-speak', handleSpeakEvent);
    return () => window.removeEventListener('ai-speak', handleSpeakEvent);
  }, []);

  return (
    <>
      {/* Global 3D Avatar Stage */}
      <motion.div 
        style={{ 
          scale: avatarScale, 
          opacity: avatarOpacity,
          x: avatarX,
          y: avatarY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="fixed top-1/2 left-1/2 w-[100vw] h-[100vh] z-0 pointer-events-none"
      >
        <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#9929EA" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FAEB92" />
          <Avatar isSpeaking={isSpeaking} scale={2} position={[0, -1.5, 0]} />
        </Canvas>
      </motion.div>

      {/* Floating Chat Interface */}
      <div className="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-6">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel w-80 md:w-96 h-[500px] flex flex-col overflow-hidden border-neon-primary/30 shadow-2xl mb-4"
            >
              <div className="p-6 bg-gradient-to-r from-neon-primary/20 to-transparent flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-3">
                  <FaRobot className="text-neon-primary" />
                  <span className="text-xs font-black uppercase tracking-widest">Avatar Brain</span>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-white/50 hover:text-white"><FaTimes /></button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-none">
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-neon-primary text-white' : 'bg-white/5 border border-white/10 text-gray-300 italic'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-2xl animate-pulse text-[10px] uppercase tracking-widest text-gray-500">Processing...</div>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-white/5 bg-black/40">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleChat(userInput); }}
                  className="relative flex items-center"
                >
                  <input 
                    type="text" 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask the avatar..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-neon-primary transition-colors pr-12"
                  />
                  <button type="submit" className="absolute right-4 text-neon-primary hover:scale-110 transition-transform">
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-20 h-20 rounded-full flex items-center justify-center glass-panel border-neon-primary/30 text-neon-primary shadow-[0_0_30px_rgba(153,41,234,0.3)] pointer-events-auto transition-all ${chatOpen ? 'rotate-90' : ''}`}
        >
          {chatOpen ? <FaTimes size={24} /> : <FaRobot size={32} />}
        </motion.button>
      </div>

      {/* Narrative Subtitle Overlay */}
      <AnimatePresence>
        {isSpeaking && currentText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-6 text-center pointer-events-none"
          >
            <div className="glass-panel py-6 px-10 border-white/10 shadow-2xl">
              <p className="text-lg md:text-xl font-medium italic text-white leading-relaxed">
                "{currentText}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIGuide;
