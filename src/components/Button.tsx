import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '@metamask/design-tokens';

const Button = ({ title }: { title: string }) => (
  <TouchableOpacity className="bg-primary-default p-4 rounded-md mb-2">
    <Text className="text-primary-inverse">{title}</Text>
  </TouchableOpacity>
);

export default Button;
