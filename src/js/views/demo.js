import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const{id}=useParams();
	const editContact=id !==undefined;
	const navigate = useNavigate();

	const[name, setName]= useState(" ");
	const[email, setEmail]= useState(" ");
	const[phone, setPhone]= useState(" ");
	const[address, setAddress]= useState(" ");

	useEffect(()=>{
		if (editContact){
			const contactToedit= store.contactos.find(contact=> contact.id === parseInt(id));
			if(contactToedit){
				setName(contactToedit.name);
				setEmail(contactToedit.email);
				setPhone(contactToedit.phone);
				setAddress(contactToedit.address);
			}
		}
	},[id,store.contactos,editContact]);

	const holdcontactdata=()=>{
		const newcontact={
			name,email,phone,address, id:editContact? parseInt(id):0

		};

		if(editContact){
			actions.updateContacto(id,newcontact);
		}else{

			actions.addContacto(newcontact);
		}

		navigate("/");
	};

	return (
		<div className="container">
			<div className="text-center">
				<h1>{editContact?"Modify":"Add"} a  contact</h1>
			</div>
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

				<div className="d-grid gap-2">
					<button onClick={holdcontactdata} type="button" class="btn btn-primary"  >{editContact ? "Update" : "Save"}</button>
				</div>
				
				<Link to="/" >
					<button  type="button" class="btn btn-link" >Back contacts</button>
				</Link>
		</div>
	);
};
