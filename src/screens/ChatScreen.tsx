import React, {useState} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import ChatMessage from '../components/ChatMessage';
import MessageInput from '../components/MessageInput';
import {getMockResponse} from '../utils/mockResponse';
import type {EmojiMessage} from '../types/messages';

const ChatScreen = () => {
  const [messages, setMessages] = useState<EmojiMessage[]>([]);

  const handleSend = (text: string) => {
    // Add user message
    const userMessage: EmojiMessage = {
      id: Date.now(),
      timestamp: Date.now(),
      senderId: 'user',
      messageType: 'emoji',
      text,
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botMessage: EmojiMessage = {
        id: Date.now() + 1,
        timestamp: Date.now(),
        senderId: 'bot',
        messageType: 'emoji',
        text: getMockResponse(),
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ChatMessage
            message={item.text}
            isUser={item.senderId === 'user'}
          />
        )}
        inverted={false}
        style={styles.messageList}
      />
      <MessageInput onSend={handleSend} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageList: {
    flex: 1,
  },
});

export default ChatScreen;
