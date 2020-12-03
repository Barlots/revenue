import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Item from './Item';
import SubmitForm from './SubmitForm';

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleSubmit = (name) => {
    if(!name) {
      return;
    }
    setTasks([...tasks, {name, state: 'New', id: new Date().getTime()}]);
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter(e => e.id != id));
  }

  const getNextState = (state) => {
    switch(state) {
      case 'New':
        return 'In progress'
      case 'In progress':
      case 'Done':
        return 'Done'
      default: 
        return 'New';
    }
  }

  const handleEdit = (id, name) => {
    const newTaskSet = tasks.map(
      (task, i) => task.id === id ? { ...task, name: name} : task
    );
    setTasks(newTaskSet);
  }

  const handleChangeState = (id) => {
    const newTaskSet = tasks.map(
      (task, i) => task.id === id ? { ...task, state: getNextState(task.state)} : task
    );
    setTasks(newTaskSet);
  }

  return (
    <>
      <Header amount={tasks.length}/>
      {
        tasks.map((task) => 
          <Item 
            key={task.id}
            id={task.id} 
            name={task.name} 
            state={task.state}
            onRemove={handleRemove}
            onEdit={handleEdit}
            onChangeState={handleChangeState}/>)
      }
      <SubmitForm onSubmit={handleSubmit}/>
    </>
  );
}

export default App;
