import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { newTimer } from './Utils/TimerUtils';
import * as Crypto from 'expo-crypto';

export default function App() {
  const [timers, setTimers] = useState([
    {
      title: 'Title 1',
      project: 'Project 1',
      id: Crypto.randomUUID(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Title 2',
      project: 'Project 2',
      id: Crypto.randomUUID(),
      elapsed: 1273998,
      isRunning: false,
    },
  ]);

  const handleCreateFormSubmit = (timer) => {
    setTimers(prevTimers => [newTimer(timer), ...prevTimers]);
  };

  const handleTimerRemove = (timerId) => {
    
    setTimers(prevTimers => prevTimers.filter(timer => timer.id !== timerId));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onTimerRemove={handleTimerRemove}
            onFormSubmit={handleCreateFormSubmit}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});
