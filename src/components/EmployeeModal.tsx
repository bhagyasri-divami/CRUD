import "./EmployeeModal.css";
import { IEmployee } from "./Employee.type";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <h1>Employee data</h1>
        </div>
        <div>
          <div>
            <label>Firstname: {data.firstName}</label>
          </div>
          <div>
            <label>Lastname: {data.lastName}</label>
          </div>
          <div>
            <label>Email: {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeModal;
