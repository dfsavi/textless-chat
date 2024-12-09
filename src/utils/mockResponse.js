const mockResponses = [
  '😊',
  '👋',
  '❤️',
  '🎉',
  '👍',
  '🌟',
  '🤔',
  '😄',
  '🙌',
  '✨',
  '🚀',
  '🌈',
  '🌸',
  '🌼',
  '🌷',
  '🌹',
];

export const getMockResponse = () => {
  const randomIndex = Math.floor(Math.random() * mockResponses.length);
  return mockResponses[randomIndex];
};
