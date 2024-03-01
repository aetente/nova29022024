import "@/app/globals.css";
import DeepBreath from "@/components/DeepBreath";
import { useRouter } from "next/router";
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
// const ChatBot = require('react-simple-chatbot')

const steps = [
  {
    "id": "1",
    "options": [
      { "value": 1, "label": "I\'m having a really hard time. My freinds are playing football. I used to play with them every tuesday but now I can\'t anymore.", "trigger": "2" },
    ]
  },
  {
    "id": "2",
    "message": "High levels of stress can impact your physical and mental health. What activities do you do to cope with stress?",
    "trigger": "3"
  },
  {
    "id": "3",
    "options": [
      { "value": "exercise", "label": "Exercise", "trigger": "5" },
      { "value": "meditation", "label": "Meditation", "trigger": "5" },
      { "value": "deep breathing", "label": "Deep Breathing", "trigger": "5" },
      { "value": "talking to someone", "label": "Talking to Someone", "trigger": "5" },
      { "value": "listening to music", "label": "Listening to Music", "trigger": "5" },
      { "value": "other", "label": "Other", "trigger": "5" }
    ]
  },
  {
    "id": "5",
    component: (
      <DeepBreath />
    ),
    // "trigger": "6"
  },
  {
    "id": "6",
    "message": "Thank you for using our service",
    end: true
    
  },
]


const SimpleChatbotComponent = () => {

  const router = useRouter()

  return (
    <div className="flex justify-center items-center">
      <ChatBot
        handleEnd={() => {
          setTimeout(() => {
            router.push("/volunteers")
          }, 3000)
        }}
        steps={steps}
        // floatingIcon={""}
        hideBotAvatar
        hideUserAvatar
        bubbleStyle={{
          backgroundColor: "#f0f0f0",
          color: "black",
        }}
        bubbleOptionStyle={{
          backgroundColor: "#f0f0f0",
          color: "black",
        }}
        contentStyle={{
          backgroundColor: "#fff",
          color: "black",
        }}
        footerStyle={{
          backgroundColor: "#f0f0f0",
          color: "black",
        }}
        headerComponent={(
          <div className="flex gap-3 min-h-16 bg-white items-center py-4 px-6 border-b-slate-200 border-b-2">
            <figure className="relative h-8 w-8  rounded-full bg-cover bg-center bg-cyan-800">
              {/* <img src="image.jpeg" alt="" className="h-full w-full object-cover" /> */}
            </figure>
            <div>
              Sigal
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default SimpleChatbotComponent;