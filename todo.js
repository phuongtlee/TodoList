import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {List} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default function Todo({id, title, complete}) {
  async function toggleComplete() {
    await firestore().collection('todos').doc(id).update({complete: !complete});
  }
  return (
    <List.Item
      titleStyle={{fontSize: 20, fontStyle: complete ? 'normal' : 'italic'}}
      title={title}
      onPress={() => toggleComplete()}
      left={props => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  );
}
