import React, { useRef, useState } from "react";
import chatbot_png from "../assets/Features/Chatbot/chatbot.png";
import PersonalPic from "../assets/Features/Chatbot/personal_chatbot.png";
import MedicalPic from "../assets/Features/Chatbot/medical_chatbot.png";
import ChatbotInterface from "./ChatbotInterface";

const personalTrainingData = "Abdullah Naeem is a highly skilled Full Stack Developer and Software Engineer with a proven track record in building innovative, scalable, and consumer-focused products. Currently an Associate Software Engineer at Dubizzle Labs, he specializes in developing and maintaining backend systems for the Jarvis product using Ruby on Rails, focusing on API development, data management, performance optimization, and scalability. As a freelancer on Fiverr and Upwork since 2022, Abdullah has successfully automated businesses by integrating AI technologies and Lang-chain architectures, creating seamless web applications with Next.js/React for frontends, Node.js for backends, and PostgreSQL for databases. He earned his Bachelor’s degree in Computer Science from the National University of Computer and Emerging Sciences (2020-2024, GPA: 3.23) and further honed his expertise through apprenticeships at Devsinc (Ruby on Rails) and Grandeur (IoT). His skills include frontend development with ReactJS, NextJS, and Figma; backend technologies such as Ruby on Rails, NodeJS, ExpressJS, and FastAPI; AI integration using Python, OpenAI, and custom-trained models; application deployment with Heroku, Cloudflare, Railway, and Render; and version control using GitHub. Abdullah has delivered a range of impactful projects, including DivergeHR, an AI-driven IT talent acquisition platform that streamlines hiring with chatbot interviews and candidate evaluations; ThreeJS Portfolio, an immersive 3D showcase of his work; Resume Analysis AI, a SaaS for optimizing resumes using Node.js, React.js, ChatGPT, and Stripe integration; Truthlook, an unbiased search engine providing fair access to web content using advanced algorithms; FuturAI, an innovative platform empowering users to explore AI capabilities like generating visuals and answering queries; and PostBud AI, a digital assistant for crafting engaging social media content and marketing copy. Abdullah’s technical expertise extends to integrating AI tools and creating applications that blend creativity with technical innovation. He is open to collaborations and discussions to elevate digital experiences and innovate solutions. You can connect with Abdullah at Abdullahnaeem0914@gmail.com, via phone at +923314744409"

const chatbotOptions = [
  { id: "medical", label: "Medical Chatbot (finetuned)", image: MedicalPic },
  { id: "personal", label: "Personal Chatbot", image: PersonalPic },
];

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [chatbotStates, setChatbotStates] = useState({
    medical: {
      isChatOpen: false,
      messages: [
        {
          role: "system",
          content: "You are interacting with the Medical Chatbot. How can I help you today?",
        },
      ],
    },
    personal: {
      isChatOpen: false,
      messages: [
        { 
          role: "system", 
          content: `You have to act Abdullah Naeem who’s a software engineer. Start your conversation with 'Hey, I am Abdullah Naemm...' a short punchline and question like 'What I can do for you'. KEEP THE INTRODUCTION SHORT. Give interesting and informative replies. Keep your responses short and avoid bullet points. Keep to the point and give accurate replies. When the user asks for details, do provide them information but compact.
          Context: ${personalTrainingData}` 
        },
      ],
    },
  });

  const handleChatbotSelection = (type) => {
    setSelectedChatbot(type);
    setIsChatOpen(true);
    setChatbotStates((prev) => ({
      ...prev,
      [type]: { ...prev[type], isChatOpen: true },
    }));
  };

  const handleCloseChat = (type) => {
    setChatbotStates((prev) => ({
      ...prev,
      [type]: { ...prev[type], isChatOpen: false },
    }));
    setIsChatOpen(false);
    setSelectedChatbot(null);
  };

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-end z-[99999] space-y-[0.5rem]"
      style={{ pointerEvents: "none" }}
    >
      {/* Initial Chat Prompt */}
      {!isChatOpen && (
        <div
          className="w-fit rounded-full rounded-br-none bg-white px-[1rem] py-[0.5rem] text-black animate-bounce cursor-pointer mr-[5rem]"
          style={{ pointerEvents: "auto" }}
          onClick={() => setIsChatOpen(true)}
        >
          <span>Chat with my Chatbots</span>
        </div>
      )}

      {/* Chatbot Selection Dropdown */}
      {isChatOpen && !selectedChatbot && (
        <div
          className="w-[18rem] rounded-lg bg-[#1c1c1e] px-4 py-3 shadow-md cursor-pointer mr-[5rem]"
          style={{ pointerEvents: "auto" }}
        >
          <h3 className="text-white font-medium text-lg mb-3">Select a Chatbot</h3>
          <div className="space-y-2">
            {chatbotOptions.map((bot) => (
              <div
                key={bot.id}
                className="flex items-center p-3 rounded-lg bg-[#2c2c2e] hover:bg-[#8e44dd] hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleChatbotSelection(bot.id)}
              >
                <img src={bot.image} alt={bot.label} className="w-10 h-10 rounded-full mr-3" />
                <span className="text-white font-medium">{bot.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot Interface */}
      {selectedChatbot && (
        <ChatbotInterface
          isChatOpen={chatbotStates[selectedChatbot].isChatOpen}
          messages={chatbotStates[selectedChatbot].messages}
          setMessages={(messages) =>
            setChatbotStates((prev) => ({
              ...prev,
              [selectedChatbot]: { ...prev[selectedChatbot], messages },
            }))
          }
          onClose={() => handleCloseChat(selectedChatbot)}
          chatbotType={selectedChatbot}
        />
      )}

      {/* Chatbot Toggle Icon */}
      <button
        className="bg-[#8e44dd] hover:bg-[#7b3dcf] w-fit h-fit rounded-full p-[0.3rem] shadow-lg mr-[2rem]"
        onClick={() => {
          setIsChatOpen(!isChatOpen);
          if (selectedChatbot !== null) setSelectedChatbot(null);
        }}
        style={{ pointerEvents: "auto" }}
      >
        <img src={chatbot_png} className="w-[4.5rem]" alt="Chatbot Icon" />
      </button>
    </div>
  );
}

export default Chatbot;
