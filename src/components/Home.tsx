import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { IEmployee } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";
import { ShowPageProps } from "./Employee.type";
import "./EmployeeForm.style.css";

const Home: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
  const [shownPage, setShownPage] = useState<ShowPageProps | null>("list");
  const [dataToEdit, setDataToEdit] = useState<IEmployee | null>(null);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      updateEmployeeListAndSave(JSON.parse(listInString));
    }
  }, []);

  const onAddEmployeeClickHnd = () => {
    setShownPage("add");
  };

  const showListPage = () => {
    setShownPage("list");
  };
  function updateEmployeeListAndSave(list: IEmployee[]): void {
    setEmployeeList(list);
    localStorage.setItem("EmployeeList", JSON.stringify(list));
  }

  const addEmployee = (data: IEmployee) => {
    updateEmployeeListAndSave([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
    console.log(data.id);
    localStorage.setItem("EmployeeList", JSON.stringify(tempList));
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage("edit");
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const updatedList = employeeList.map((item) =>
      item.id === data.id ? data : item
    );
    setEmployeeList(updatedList);
  };
  return (
    <>
      <article className="article-header">
        <header>
          <h1>Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === "list" && (
          <>
            <button
              type="button"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            >
              Add Employee
            </button>

            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === "add" && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}

        {shownPage === "edit" && (
          <EditEmployee
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
            data={dataToEdit as IEmployee}
          />
        )}
      </section>
    </>
  );
};

export default Home;
