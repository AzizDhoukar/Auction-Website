import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import {Stomp , CompatClient } from '@stomp/stompjs';

import MessageBubble from './components/MessageBubble';

interface IProps {
  link: string;
  name: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<{ text: string }[]>([
    { text: 'Hello, this is a test message!' },
    { text: 'This is another test message.' },
    { text: 'And one more for good measure.' },
  ]);
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);

  useEffect(() => {
  const socket = new SockJS('http://localhost:8888/ws');
  const client = Stomp.over(socket);

  client.connect({}, () => {
    client.subscribe('/topic/messages', (message : any) => {
      const receivedMessage = JSON.parse(message.body);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });
    setStompClient(client);
  });
  
  const handleNicknameChange = (event : any) => {
    setNickname(event.target.value);
  }

  const handleMessageChange = (event : any) => {
    setMessage(event.target.value);
  }

  const sendMessage = () => {
    if(message.trim()){
      const chatMessage ={
        nickname,
        content: message
      };
      if(stompClient){
        stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
      }
      sendMessage();
    }
  }

  return () =>{ 
    client.disconnect()
  };
}, []);
  return (
  <div className="h-full flex flex-col border">
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBubble key={index} data={message.text} />
      ))}
    </div>
  </div>
  );
};

export default Chat;