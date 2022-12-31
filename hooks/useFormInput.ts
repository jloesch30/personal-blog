import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => {
    if (typeof e === "string") {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  };

  return {
    value,
    onChange: handleChange,
  };
};
