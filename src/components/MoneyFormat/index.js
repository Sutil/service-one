import React from 'react';
import NumberFormat from 'react-number-format';

// import { Container } from './styles';

export default function MoneyFormat({ moneyValue, TextRender }) {
  return (
    <NumberFormat
      value={moneyValue}
      displayType="text"
      prefix="R$ "
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      renderText={value => <TextRender>{value}</TextRender>}
    />
  );
}
