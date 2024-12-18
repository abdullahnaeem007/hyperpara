import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import chatbot_png from "../assets/Features/Chatbot/chatbot.png";
import ProfilePic from '../assets/portfolio/10.png'; 
import { FaSpinner } from "react-icons/fa";

const trainingData = "Abdullah Naeem is a highly skilled Full Stack Developer and Software Engineer with a proven track record in building innovative, scalable, and consumer-focused products. Currently an Associate Software Engineer at Dubizzle Labs, he specializes in developing and maintaining backend systems for the Jarvis product using Ruby on Rails, focusing on API development, data management, performance optimization, and scalability. As a freelancer on Fiverr and Upwork since 2022, Abdullah has successfully automated businesses by integrating AI technologies and Lang-chain architectures, creating seamless web applications with Next.js/React for frontends, Node.js for backends, and PostgreSQL for databases. He earned his Bachelor’s degree in Computer Science from the National University of Computer and Emerging Sciences (2020-2024, GPA: 3.23) and further honed his expertise through apprenticeships at Devsinc (Ruby on Rails) and Grandeur (IoT). His skills include frontend development with ReactJS, NextJS, and Figma; backend technologies such as Ruby on Rails, NodeJS, ExpressJS, and FastAPI; AI integration using Python, OpenAI, and custom-trained models; application deployment with Heroku, Cloudflare, Railway, and Render; and version control using GitHub. Abdullah has delivered a range of impactful projects, including DivergeHR, an AI-driven IT talent acquisition platform that streamlines hiring with chatbot interviews and candidate evaluations; ThreeJS Portfolio, an immersive 3D showcase of his work; Resume Analysis AI, a SaaS for optimizing resumes using Node.js, React.js, ChatGPT, and Stripe integration; Truthlook, an unbiased search engine providing fair access to web content using advanced algorithms; FuturAI, an innovative platform empowering users to explore AI capabilities like generating visuals and answering queries; and PostBud AI, a digital assistant for crafting engaging social media content and marketing copy. Abdullah’s technical expertise extends to integrating AI tools and creating applications that blend creativity with technical innovation. He is open to collaborations and discussions to elevate digital experiences and innovate solutions. You can connect with Abdullah at Abdullahnaeem0914@gmail.com, via phone at +923314744409"

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "user", 
      content: `You have to act Abdullah Naeem who’s a software engineer. Start your conversation with 'Hey, I am Abdullah Naemm...' a short punchline and question like 'What I can do for you'. KEEP THE INTRODUCTION SHORT. Give interesting and informative replies. Keep your responses short and avoid bullet points. Keep to the point and give accurate replies. When the user asks for details, do provide them information but compact.
      Context: ${trainingData}` 
    },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const ScrollRef = useRef(null); 


  const handleSendMessage = async() => {
    if (userMessage.trim()) {
      setLoading(true)
      const tempMessages = [
        ...messages,
        { role: "user", content: userMessage },
      ]
      setMessages(tempMessages);
      const updatedMessages = await fetchOpenAIResponse(tempMessages)
      setMessages(updatedMessages)
      setUserMessage("");
      setLoading(false)
    }
  };

  const fetchOpenAIResponse = async(input) =>{
   try{
    const response = await axios.post("https://hyperpara.onrender.com/chat",{
      messages: input
    })
    const output = await response.data
    return [...input, output];
   } 
   catch(error){
    console.error("Error fetching response:", error);
   }
  }

  const scrollToBottom = () => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=>{
    if(isChatOpen && messages.length == 1){
      fetchOpenAIResponse(messages).then((updatedMessages) => {
        setMessages(updatedMessages);
      });
    }

    scrollToBottom()
  },[isChatOpen, messages])

  return (
    <div 
      className="fixed bottom-4 right-4 flex flex-col items-end z-[99999] space-y-[0.5rem]" 
      style={{ pointerEvents: "none" }} // Prevent unintended overlap interactions
    >
      {/* Conditional Rendering */}
      {!isChatOpen && (
        <div 
          className="w-fit rounded-full rounded-br-none bg-white px-[1rem] py-[0.5rem] text-black animate-bounce cursor-pointer mr-[5rem]"
          style={{ pointerEvents: "auto" }} // Re-enable interaction here
          onClick={() => setIsChatOpen(true)}
        >
          <span>Chat with me</span>
        </div>
      )}
  
      {isChatOpen && (
        <div
          className="lg:max-w-[35vw] max-w-[45vw] h-[65vh] max-h-[65vh] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col z-[99999] mr-[5rem]"
          style={{ pointerEvents: "auto" }} // Allow interaction with the interface
        >
          <div className="w-full flex bg-[#9b59f6] h-fit items-start space-x-[1rem] p-[0.5rem]">
            <img 
              src={ProfilePic} 
              className="rounded-full w-[3rem]" 
              style={{ transform: "scale(1.3)" }} 
            />
            <div className="h-full flex flex-col">
              <text className="font-medium text-lg">Abdullah Naeem</text>
              <text className="text-sm font-light">Software Engineer</text>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-auto space-y-4">
            {messages.map((msg, index) => (
              index > 0 && (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`${
                      msg.role === "user"
                        ? "bg-[#f1f1f1] text-black"
                        : "bg-[#9b59f6] text-white"
                    } max-w-[70%] rounded-lg p-3`}
                  >
                    {msg.content}
                  </div>
                </div>
              )
            ))}
            <div ref={ScrollRef} />
          </div>
  
          {/* Input Section */}
          <div className="flex items-center p-4 bg-[#f1f1f1]">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg border border-[#ccc] text-black"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
              className="bg-[#9b59f6] hover:bg-[#8e44dd] ml-2 text-white p-2 rounded-lg"
              onClick={handleSendMessage}
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin text-white text-xl" />
              ) : (
                "send"
              )}
            </button>
          </div>
        </div>
      )}
      <button
        className="bg-[#9b59f6] hover:bg-[#8e44dd] w-fit h-fit rounded-full p-[0.3rem] shadow-lg mr-[2rem]"
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{ pointerEvents: "auto" }}
      >
        <img src={chatbot_png} className="w-[4.5rem]" />
      </button>
    </div>
  );
}

export default Chatbot;
