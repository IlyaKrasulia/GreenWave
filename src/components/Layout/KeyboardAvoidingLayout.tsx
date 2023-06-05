import React from 'react';
import { Platform, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { baseStyle } from 'utils/styles';

interface KeyboardAvoidingLayoutProps {
  children?: React.ReactNode;
  keyboardVerticalOffset?: number;
}

export const KeyboardAvoidingLayout = ({
  children,
  keyboardVerticalOffset = 0,
}: KeyboardAvoidingLayoutProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={baseStyle.screenView}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

