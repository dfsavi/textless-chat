import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';

const emojis = ['😊', '👋', '❤️', '🎉', '👍', '🌟', '🤔', '😄', '🙌', '✨',
                '😂', '🥰', '😍', '🤩', '😎', '🥳', '😇', '🤗', '🫶', '💫'];

const EmojiPicker = ({onEmojiSelect}: {onEmojiSelect: (emoji: string) => void}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              style={styles.emojiButton}
              onPress={() => onEmojiSelect(emoji)}>
              <Text style={styles.emojiText}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  emojiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  emojiButton: {
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  emojiText: {
    fontSize: 24,
  },
});

export default EmojiPicker;
