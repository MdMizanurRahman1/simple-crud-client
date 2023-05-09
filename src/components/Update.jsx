import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loggedUser = useLoaderData();


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loggedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }

    return (
        <div>
            <h3>Updated information of {loggedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loggedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loggedUser?.email} id="" />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default Update;