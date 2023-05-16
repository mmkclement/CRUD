import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <div>
      <Form className="create-form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='I agree to the Terms and Conditions'
            checked={checkbox}
            onChange={handleCheckboxChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}
