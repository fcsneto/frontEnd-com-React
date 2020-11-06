import React, {useState} from 'react';

import './App.css';
import avatar from './assets/img.png';

import Header from './components/Header';

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function addProject(){
        setProjects([...projects,`Novo projeto ${Date.now()}`]);
    }
    //return <Header title="Projects"/>;
    return (
        <>
            <Header title="Projects"/>
            <img width={300} src={avatar}/>
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={addProject}>Adicionar projeto</button>
        </>
    );
}

export default App;