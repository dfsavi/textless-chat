import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EmojiPicker from './EmojiPicker';

type MessageInputProps = {
  onSend: (message: string) => void;
};

const MessageInput: React.FC<MessageInputProps> = ({onSend}) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const expandAnim = useState(new Animated.Value(0))[0];

  const handleOptionPress = (option: string) => {
    if (activeOption === option) {
      // Close the container
      setActiveOption(null);
      Animated.timing(expandAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      // Open the container
      setActiveOption(option);
      Animated.timing(expandAnim, {
        toValue: 200, // Height of the expanded container
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    onSend(emoji);
    setActiveOption(null);
    Animated.timing(expandAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const renderExpandedContent = () => {
    switch (activeOption) {
      case 'emoji':
        return <EmojiPicker onEmojiSelect={handleEmojiSelect} />;
      case 'photo':
        return <View style={styles.expandedContent} />; // Placeholder for photo picker
      case 'audio':
        return <View style={styles.expandedContent} />; // Placeholder for audio recorder
      case 'play':
        return <View style={styles.expandedContent} />; // Placeholder for play feature
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.expandedContainer,
          {
            height: expandAnim,
          },
        ]}>
        {renderExpandedContent()}
      </Animated.View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            activeOption === 'emoji' && styles.activeOption,
          ]}
          onPress={() => handleOptionPress('emoji')}>
          <Icon
            name="emoji-emotions"
            size={24}
            color={activeOption === 'emoji' ? '#007AFF' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            activeOption === 'photo' && styles.activeOption,
          ]}
          onPress={() => handleOptionPress('photo')}>
          <Icon
            name="photo-camera"
            size={24}
            color={activeOption === 'photo' ? '#007AFF' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            activeOption === 'audio' && styles.activeOption,
          ]}
          onPress={() => handleOptionPress('audio')}>
          <Icon
            name="mic"
            size={24}
            color={activeOption === 'audio' ? '#007AFF' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            activeOption === 'play' && styles.activeOption,
          ]}
          onPress={() => handleOptionPress('play')}>
          <Icon
            name="sports-esports"
            size={24}
            color={activeOption === 'play' ? '#007AFF' : '#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  expandedContainer: {
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  expandedContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  option: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeOption: {
    backgroundColor: '#e3f2fd',
  },
});

export default MessageInput;
