import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: { id: string };
};

// export const metadata = {
//   title: "Chat AA Jibiti (ChatGpt Clone)",
//   description: "Chat Jibiti (ChatGpt Clone)",
// };

export async function generateMetadata({ params: { id } }: Props) {
  
  return {
    title: "",
  };
}

export default function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}
