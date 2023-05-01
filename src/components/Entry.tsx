import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EEntry} from './addEntry';
const Entry: React.FC<EEntry> = ({entry}) => {
  return (
    <View style={styles.entry}>
      <Text style={styles.entryText}>{entry}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  entry: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  entryText: {
    fontWeight: '500',
  },
});
export default Entry;
