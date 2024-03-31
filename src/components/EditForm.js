import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

    const editEmployee = useContext(EmployeeContext).editEmployee;

    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        editEmployee(id, updatedEmployee)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Control
                className='my-2'  
                type="text"
                name="name"
                placeholder="Name *" 
                value={name}
                onChange={(e => setName(e.target.value))}
                required></Form.Control>
            </Form.Group>

            <Form.Group >
                <Form.Control
                className='my-2'
                type="email"
                name="email"
                placeholder="Email * "
                value={email}
                onChange={(e => setEmail(e.target.value))}
                required
                ></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control
                className='my-2'
                type="textarea"
                name="address"
                placeholder="Address *"
                value={address}
                onChange={(e => setAddress(e.target.value))}
                rows={3}
                ></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control
                className='my-2'
                type="text" 
                name="phone"
                placeholder="Phone *"
                value={phone}
                onChange={(e => setPhone(e.target.value))}
                ></Form.Control>
            </Form.Group>

            <div className="d-grid">
                <Button type='submit' variant="success" size="md">
                    Edit Employee
                </Button>
            </div>
        </Form>
    );
};

export default EditForm;