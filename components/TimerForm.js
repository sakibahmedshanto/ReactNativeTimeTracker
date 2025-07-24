import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import TimerButton from './TimerButton';

export default function TimerForm({ id, title: initialTitle, project: initialProject, onFormSubmit, onFormClose }) {
  const [title, setTitle] = useState(id ? initialTitle : '');
  const [project, setProject] = useState(id ? initialProject : '');

  const handleSubmit = () => {
    if (!title || !project) {
      Alert.alert(
        'Missing Information',
        'Please provide both a title and a project name.',
        [{ text: 'OK' }]
      );
      return;
    }
    onFormSubmit({
      id,
      title,
      project,
    });
  };

  const submitText = id ? 'Update' : 'Create';

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={setTitle}
            value={title}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={setProject}
            value={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
