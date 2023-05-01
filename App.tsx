import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Header from './src/components/header';
import AddEntry, {EEntry} from './src/components/addEntry'
import Entry from './src/components/Entry';
import RootNavigator from './src/navigation';

const App = () => {
  const [journalEntries, setJournalEntries] = useState<EEntry[]>([]); // set the type of what the hook expects to be an array of IItems.
  return (
    <>
      {/* <RootNavigator /> */}
      <SafeAreaView style={styles.container}>
        <Header title="journal" />
        <View style={styles.contentWrapper}>
          <AddEntry
            setJournalEntries={setJournalEntries}
            journalEntries={journalEntries}
          />
          <FlatList
            data={journalEntries}
            keyExtractor={(entry, index) => `${entry.entry}-${index}`}
            renderItem={({item}) => (
              <Entry entry={item.entry} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;

