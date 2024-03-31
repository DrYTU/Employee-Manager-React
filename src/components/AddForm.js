import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';
import { useState } from 'react';
const AddForm = () => {

    const addEmployee = useContext(EmployeeContext).addEmployee;
    
    const [newEmployee, setNewEmployee] = useState({
        name:'', email:'', address:'', phone:''
    })
    const {name, email, address, phone} = newEmployee;
    
    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                className='my-2'
                value={name} 
                type="text"
                name="name"
                placeholder="Name *" 
                onChange={e => onInputChange(e)} 
                required></Form.Control>
            </Form.Group>

            <Form.Group >
                <Form.Control
                className='my-2'
                type="email"
                name="email"
                placeholder="Email * "
                value={email} onChange={e => onInputChange(e)}
                required
                ></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control
                className='my-2'
                type="textarea"
                name="address"
                placeholder="Address *"
                value={address} onChange={e => onInputChange(e)}
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
                onChange={e => onInputChange(e)}></Form.Control>
            </Form.Group>

            <div className="d-grid">
                <Button type='submit' className='my-2' variant="success" size="md">
                    Add New Employee
                </Button>
            </div>
        </Form>
    );
};

export default AddForm;