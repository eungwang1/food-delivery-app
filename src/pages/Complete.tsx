import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

type Props = {};

function Complete({}: Props) {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>{count}</Pressable>
    </View>
  );
}

export default Complete;
