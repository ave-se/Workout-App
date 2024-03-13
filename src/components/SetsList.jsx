import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import graphqlClient from '../graphqlClient';


const setsQuery = gql`
  query exercises {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

const SetsList = ({ ListHeaderComponent, exerciseName }) => {
const { data, isLoading } = useQuery({
    queryKey: ['sets', exerciseName],
    queryFn: () =>
      graphqlClient.request(setsQuery, { exercise: exerciseName }),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={data.sets.documents}
      ListHeaderComponent={() => (
        <>
          <ListHeaderComponent />
         
        </>
      )}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Text 
        style= {
         {
           backgroundColor: 'pink',
           marginVertical: 5,
           padding: 10,
           borderRadius: 5,
        
         }
     
       }>
       </Text>    
     )}
   />
 );
       }
    

export default SetsList;