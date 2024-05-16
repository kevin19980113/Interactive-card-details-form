/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, labelClassName, inputClassName, ...props },
  ref
) {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        className={inputClassName}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        maxLength={props.maxLength}
        ref={ref}
      />
    </>
  );
});

export default Input;
