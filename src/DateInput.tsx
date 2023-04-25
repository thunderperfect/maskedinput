import React, { SyntheticEvent, useEffect, useState } from "react";
import MaskedInput from "antd-mask-input";
import { InputRef } from "antd";
import IMask from "imask";
import "./styles.css";

interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value = "", onChange }) => {
  //console.log("value", value);
  //console.log("onChange", onChange);

  const ref = React.useRef<InputRef>(null);
  const [dateStr, setDateStr] = useState<string>(value);

  // const triggerChange = (changedValue: {    date?: string;  }) => {
  //   onChange?.({ dateStr, ...value, ...changedValue });
  // };

  // const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newNumber = parseInt(e.target.value || "0", 10);
  //   if (Number.isNaN(number)) {
  //     return;
  //   }
  //   if (!("number" in value)) {
  //     setNumber(newNumber);
  //   }
  //   triggerChange({ number: newNumber });
  // };

  // const onCurrencyChange = (newCurrency: Currency) => {
  //   if (!("currency" in value)) {
  //     setCurrency(newCurrency);
  //   }
  //   triggerChange({ currency: newCurrency });
  // };

  const onInputChange = (
    event: SyntheticEvent & { maskedValue: string; unmaskedValue: string }
  ) => {
    console.log("onInputChange", event.maskedValue);
    setDateStr(event.maskedValue);
    onChange?.(event.maskedValue);
  };
  var masked = IMask.createMask({
    mask: "00/00/0000"
    // ...and other options
  });
  // const mask = {
  //   mask: TypeMask.Date
  // };
  useEffect(() => {
    if (value === "") {
      ref.current.input.value = "";
      //masked.updateValue();
    }
  }, [value]);

  return (
    <MaskedInput
      allowClear
      ref={ref}
      mask={masked.mask}
      value={dateStr}
      onChange={onInputChange}
    />
  );
};
export default DateInput;
