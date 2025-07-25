import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { millisecondsToHuman } from '../Utils/TimerUtils';
import TimerButton from './TimerButton';
export default function Timer({ id, title, project, elapsed, onTimerRemove, editPress }) {
  const elapsedString = millisecondsToHuman(elapsed);
  
  const handleRemove = () => {
    Alert.alert(
      'Remove Timer',
      `Are you sure you want to remove "${title}"?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Remove',
          onPress: () => onTimerRemove(id),
        },
      ]
    );
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={editPress} />
        <TimerButton color="blue" small title="Remove" onPress={handleRemove} />
      </View>
      <TimerButton color="#21BA45" title="Start" />
    </View>
  );
}
const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
