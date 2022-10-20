import React from "react";
import { FC } from "react";
import { Form, FormControlProps } from "react-bootstrap";

interface FormControlTextAreaProps {
  height?: number,
};

const FormControlTextArea = React.forwardRef((
  props: FormControlProps & FormControlTextAreaProps,
  ref,
) => {
  return <Form.Control
    className="FormControlTextArea"
    ref={ref}
    as="textarea"
    {...props}
    style={{
      height: props.height,
      resize: 'none',
    }} />
})

export default FormControlTextArea;