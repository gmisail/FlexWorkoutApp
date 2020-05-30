import { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

class WorkoutData
{
    static get(name, author, done)
    {
        axios.get(`http://localhost:3000/workout/${author}/${name}`).then(res => done(res.data));
    }

    static save(data)
    {
        
    }
}

export default WorkoutData;
