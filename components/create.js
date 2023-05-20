import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import "./Members.css";

export default function Create() {
    let history = useHistory();
    const [dogName, setDogName] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [dogAbout, setDogAbout] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    
    const postData = () => {
        axios.post(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`, {
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
        <div class='container col-md-8 my-5'>
            <div className="card Apply">
                <div class='card-header'>
                    <h2>Apply</h2>
                </div>
                    <div class='card-body'>
                        <Form className="create-form">
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Your Name</label>
                                <input placeholder='Janice Smith' onChange={(e) => setDogName(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                            <label>Speciality</label>
                            <input placeholder='Deep Tissue' onChange={(e) => setDogBreed(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                            <label>MO License Number</label>
                            <input placeholder='200112345678' onChange={(e) => setOwnerName(e.target.value)}/>
                            </Form.Field>
                        </Form.Group>
                            <Form.Field>
                                <label>About</label>
                                    <input placeholder='Include graduation year, school of study, specialities' onChange={(e) => setDogAbout(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='jsmith@mymail.com' onChange={(e) => setOwnerEmail(e.target.value)}/>
                            </Form.Field>
                            <Button onClick={postData} type='submit'>Submit</Button>
                        </Form>
                    </div>
            </div>
        </div>
        </>
    )
}
  
  