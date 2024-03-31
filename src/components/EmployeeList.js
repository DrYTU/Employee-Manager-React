import Employee from "./Employee";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Alert } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
    const employees = useContext(EmployeeContext).employees;

    // Alert State İşlemleri
    const [showAlert, setShowAlert] = useState(false)
    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    };
    const handleCloseAlert = () => setShowAlert(false)

    // Modal State İşlemleri
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // Pagination State İşlemleri

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);


    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [employees])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(employees.length / employeesPerPage)

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            Manage <b>Employees</b>
                        </h2>
                    </div>
                    <div className="col-sm-6">
                        <Button
                            onClick={handleShow}
                            className="btn btn-success text-white"
                            data-toggle="modal"
                        >
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>
            <Alert show={showAlert} variant="success" onClose={handleCloseAlert} dismissible>
                Employee list successfully updated.
            </Alert>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees={currentEmployees}
                employees={employees}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Kapat</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EmployeeList;
