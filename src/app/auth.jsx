import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../providers/AuthContext';

const AuthScreen = () => {
  const [localUsername, setLocalUsername] = useState('');
  const { setUsername, username } = useAuth();

  const onSignIn = () => {
    setUsername(localUsername);
  };

  if (username) {
    return <Redirect href={'/'} />;
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: 'Workout App ' }} />

      <Text style={styles.label}>Username</Text>
      <TextInput
        value={localUsername}
        onChangeText={setLocalUsername}
        placeholder="Username"
        style={styles.input}
      />
   <Pressable onPress={onSignIn} style={styles.button}>
      <Text style={styles.buttonText}>Sign In</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    color: 'pink',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center', // Add this line
    width: 100, // Or specify a fixed width
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AuthScreen;