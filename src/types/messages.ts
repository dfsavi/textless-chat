type Message = {
  id: number;
  timestamp: number;
  senderId: string;
};

type EmojiMessage = Message & {
  messageType: 'emoji';
  text: string;
};

export type { Message, EmojiMessage };
