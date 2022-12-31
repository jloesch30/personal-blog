import { FormEvent } from "react";
import styled from "styled-components";
import { useFormInput } from "hooks";

const Form = () => {
  const { value: nameValue, onChange: onNameChange } = useFormInput("");
  const { value: emailValue, onChange: onEmailChange } = useFormInput("");
  const { value: messageValue, onChange: onMessageChange } = useFormInput("");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    fetch("/api/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("Message sent!");
      } else {
        alert("Message failed to send.");
      }
      onNameChange("");
      onEmailChange("");
      onMessageChange("");
    });
  };

  return (
    <>
      <InputForm action="submit" onSubmit={submitForm}>
        <FieldSet>
          <Legend>Name</Legend>
          <div>
            <input type="text" onChange={onNameChange} value={nameValue} />
          </div>
        </FieldSet>
        <FieldSet>
          <Legend>Email</Legend>
          <div>
            <input type="text" onChange={onEmailChange} value={emailValue} />
          </div>
        </FieldSet>
        <FieldSet>
          <Legend>Message</Legend>
          <div>
            <textarea onChange={onMessageChange} value={messageValue} />
          </div>
        </FieldSet>
        <button type="submit">Send!</button>
      </InputForm>
    </>
  );
};

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  button {
    width: 80px;
    padding: 0.5em;
    box-shadow: 0px 2px 2px rgb(155, 155, 155);
    border: 0px;
    border-radius: 2px;
    color: white;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const FieldSet = styled.fieldset`
  border-bottom: 0px;
  border-right: 0px;
  border-left: 0px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    textarea {
      width: 100%;
      border: 0px;
      border-radius: 2px;
      box-shadow: 0px 2px 2px rgb(155, 155, 155);
      padding: 0.35em;
      margin-top: 1em;
    }
  }
`;

const Legend = styled.legend`
  margin-inline: auto;
  justify-self: center;
  align-self: center;
  padding-inline: 1em;
`;

export { Form };
