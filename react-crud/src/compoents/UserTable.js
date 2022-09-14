import React from 'react';

export const UserTable = (props) => {
    return (
        <div class="row">
            <div className='col-lg-12 ms-6'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>DOB</th>
                            <th>Course</th>
                            <th>Address</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.length > 0 ? (
                            props.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.studentName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobileNumber}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.course}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => {
                                            props.editRow(user)

                                        }}>Edit</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => {
                                            props.deleteUser(user.id)
                                        }}>Delete</button>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colspan="8">No Records</td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    )
}
