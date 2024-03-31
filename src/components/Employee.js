import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {


    const deleteEmployee = useContext(EmployeeContext).deleteEmployee;


    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        handleClose();
    }, [employee])

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>

                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>


                    <button onClick={handleShow} className="btn text-warning p-0" data-toggle="modal">
                        <i className="material-icons">&#xE254;</i>
                    </button>
                </OverlayTrigger>


                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => { deleteEmployee(employee.id) }} className="btn text-danger p-0" data-toggle="modal">
                        <i className="material-icons">&#xE872;</i>
                    </button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Kapat</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Employee; // Employee bileşenini default olarak export ediyoruz
