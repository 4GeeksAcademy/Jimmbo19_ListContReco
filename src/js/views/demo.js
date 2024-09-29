import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const[name, setName]= useState(" ");
	const[email, setEmail]= useState(" ");
	const[phone, setPhone]= useState(" ");
	const[address, setAddress]= useState(" ");


	const holdcontactdata=()=>{
		const newcontact={
			name,email,phone,address
		};
		actions.addContacto(newcontact);

		setName(" ");
		setEmail(" ");
		setPhone(" ");
		setAddress(" ");
	};

	return (
		<div className="container">
			<h1>ADD a new contact</h1>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">Name</label>
					<input type="text" className="form-control" id="name" placeholder="Full name" value={name} onChange={(e)=> setName(e.target.value)} />
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
					<input type="text" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" placeholder="Enter Address" value={address} onChange={(e)=> setAddress(e.target.value)} />
				</div>
				<button onClick={holdcontactdata} type="button" class="btn btn-primary"  >save</button>
				<Link to="/" >
				<button  type="button" class="btn btn-link" >Back contacts</button>
				</Link>
		</div>
	);
};
