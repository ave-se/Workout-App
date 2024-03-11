import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';



const NewSetInput = () => {
const [reps, setReps] = useState('');
const [weight, setWeight] = useState('');


    const addset = () => {
        console.warn('Add Set: ', reps, weight);

setReps('');
setWeight('');
};
    return (
        <View style={styles.container}>
<TextInput value={reps} onChangeText={setReps} placeholder="Reps" style={styles.input} keyboardType="numeric"
 />
<TextInput value={weight} onChangeText={setWeight} placeholder="Weight" style={styles.input} keyboardType="numeric"
 />
<Button title="Add" onPress={addset} />
</View>
 );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      gap: 5,
    },
    row: {
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