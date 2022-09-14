import React from 'react';
import { useState } from 'react';
import { EditTable } from './compoents/EditTable';
import { Resource } from './compoents/Resource';

import { UserTable } from './compoents/UserTable';



function App() {

  const userData = [
    {
      id: 1, studentName: 'dhana sekar', email: 'dhanasekardhaya@gmail.com', 
      mobileNumber: 9585225888, dob: '1992-11-23', course: 'cse',
      address: '40 smc line Gugai salem'
    }
  ];

  // Adding New Data

  const addNew = (users) => {

    users.id = user.length + 1;
    setUser([...user, users])
    alert("SucessFully Added " + users.studentName);
    setAdd(false);

  }

  const [user, setUser] = useState(userData);

  const [adduser, setAdd] = useState(false);

  const deleteUser = (id) => {
    setUser(user.filter((users) => users.id !== id))
    alert("Are you sure Delete this Id :" + id);
  }

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    studentName: '',
    email: '',
    mobileNumber: 0,
    dob: '',
    course: '',
    address: ''
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, studentName: user.studentName, email: user.email, mobileNumber: user.mobileNumber,
      dob: user.dob, course: user.course, address: user.address
    })

  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUser(user.map((user) => (user.id === id ? updateUser : user)))
    alert("Success Updated Record")


  }


  return (
    <>

      <div className="container mt-5 col-lg-12 col-md-6 col-sm-1">
        {(adduser) ?
          <>
            <button className="btn btn-success" onClick={() => {
              setAdd(false)
            }}>Dashboard</button>
            <Resource addNew={addNew} />
          </>
          :
          (editing) ?
            <>
              <EditTable setEditing={setEditing} currentUser={currentUser}
                updateUser={updateUser}
              />
            </> :
            <><button className='btn btn-primary' onClick={() => {
              setAdd(true);
            }}>Add User</button>
              <div className='col-lg-12 sm-2'><UserTable editRow={editRow} deleteUser={deleteUser} users={user} /></div>
            </>

        }
      </div>
    </>
  );
}

export default App;
