import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { gql } from 'graphql-request';
import { useMutation } from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';


const mutationDocument = gql`
mutation MyMutation($newSet: NewSet!) {
  insertSet(
    document: $newSet
    dataSource: "Cluster0"
    database: "workouts"
    collection: "sets"
  ) {
    insertedId
  }
}
`;

const NewSetInput = ({exerciseName}) => {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

const { mutate, error, isError, isPending } = useMutation({mutationFn: (newSet) => graphqlClient.request(mutationDocument, { newSet })});



const addSet = () => {
  const newSet = {
  
    exercise: exerciseName,
    reps: Number.parseInt(reps),
  };
  if (Number.parseFloat(weight)) {
    newSet.weight = Number.parseFloat(weight);
  }
  mutate(newSet);
};

console.log('error')

  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
});

export default NewSetInput;