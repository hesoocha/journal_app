import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const dummyEntries = [
    {
      id: 1,
      entry: 'lalalalalla'
    },
    {
      id: 2,
      entry: 'ahhaha'
    },
    {
      id: 3,
      entry: 'entry #3!!!!'
    }
  ]

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
    </View>
  )
}

export default HomeScreen
