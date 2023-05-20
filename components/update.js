import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import "./Members.css";
import '../App.css'

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [dogName, setDogName] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [dogAbout, setDogAbout] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setDogName(localStorage.getItem('Your Name'));
        setDogBreed(localStorage.getItem('Speciality'));
        setOwnerName(localStorage.getItem('License Number'))
        setDogAbout(localStorage.getItem('About You'))
        setOwnerEmail(localStorage.getItem('Email'))
}, []);

const updateAPIData = () => {
    axios.put(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs/${id}`, {
        dogName,
        dogBreed,
        ownerName,
        dogAbout,
        ownerEmail
	}).then(() => {
        history.push('/read')
    })
}

    return (
        <>
        <div className='container col-md-8 my-5'>
            <div className='card Update'>
                <div className='card-header'>
                    <h2>Update Your Entry</h2>
                </div>
                <div className="container">
                    <div className="card-body mb-3">
                        <Form className="create-form">
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Your Name</label>
                                    <input placeholder='Janice Smith' value={dogName} onChange={(e) => setDogName(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Speciality</label>
                                    <input placeholder='Deep Tissue' value={dogBreed} onChange={(e) => setDogBreed(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>MO License Number</label>
                                    <input placeholder='200112345678' value={ownerName} onChange={(e) => setOwnerName(e.target.value)}/>
                                </Form.Field>
                            </Form.Group>
                                <Form.Field>
                                    <label>About You</label>
                                    <input placeholder='Include graduation year, school of study' value={dogAbout} onChange={(e) => setDogAbout(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Your Email</label>
                                    <input placeholder='jsmith@myemail.com' value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)}/>
                                </Form.Field>
                                    <Button type='submit' onClick={updateAPIData}>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
