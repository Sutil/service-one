import React from 'react';
import { TextInput } from 'react-native';
import NumberFormat from 'react-number-format';

// import { Container } from './styles';

export default function MoneyInput({
  value,
  onChange,
  placeholder,
  style,
  returnKeyType,
  onSubmitEditing,
}) {
  function textInputChange(text) {
    let parsedValue = text.replace(/[^\d]/g, '');
    if (parsedValue.length > 1) {
      parsedValue = parsedValue.replace(/([0-9]*)([0-9]{2})/g, '$1.$2');
    } else {
      parsedValue = `0.0${parsedValue}`;
    }

    try {
      onChange(Number(parsedValue));
    } catch (err) {
      onChange(0);
    }
  }

  return (
    <NumberFormat
      value={value}
      displayType="text"
      prefix="R$ "
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      renderText={textValue => (
        <TextInput
          value={textValue}
          keyboardType="numeric"
          onChangeText={textInputChange}
          placeholder={placeholder}
          style={style}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
      )}
    />
  );
}
