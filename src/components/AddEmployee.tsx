import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),

      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Add Employee</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
