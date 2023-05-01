import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
export interface EEntry {
  entry: string;
}
interface Props {
  setJournalEntries: React.Dispatch<React.SetStateAction<EEntry[]>>;
  journalEntries: EEntry[];
}
const AddEntry: React.FC<Props> = ({journalEntries: journalEntries, setJournalEntries: setJournalEntries}) => {
  const [entry, setEntry] = useState('');
  const addEntry = () => {
    if (!entry) {
      Alert.alert('no entry!', 'enter some text');
    } else {
      setJournalEntries([
        ...journalEntries,
        {
          entry
        },
      ]);
      setEntry('');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>add journal entry</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="start your entry here"
          value={entry}
          onChangeText={text => setEntry(text)}
        />
        <TouchableOpacity style={styles.addEntryButton} onPress={addEntry}>
          <Text style={styles.buttonText}>add entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addEntryButton: {
    backgroundColor: '#ffdbe0',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddEntry;
