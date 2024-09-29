import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.loadSomeData();
	},[]);

	return (
		<div className="container">
			<div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
				<Link to="/demo">
					<button className="btn btn-success">Add Contact</button>
				</Link>
			</div>
			<ul className="list-group">
				{store.contactos.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between align-items-center p-3 border rounded shadow-sm mb-2"
							>
							<div className="d-flex align-items-center">
									
										<img 
											src="https://www.uc3m.es/sdic/media/informatica/img/mediana/original/IM_Icono-Google-Contacts/logo-google-contacts-1.png" 
											alt={`${item.name} profile`} 
											className="rounded-circle me-3"
											width="70"
											height="70"
										/>
										<div>
											<p className="mb-0 fw-bold">{item.name}</p>
											<p className="mb-0 text-muted">Phone: {item.phone}</p>
											<p className="mb-0 text-muted">Email: {item.email}</p>
											<p className="mb-0 text-muted">Address: {item.address}</p>
										</div>
									</div>
							<div className="d-flex align-items-center">
							<Link to={`/modify/${item.id}`} className="btn btn-outline-primary me-2">
								<i className="bi bi-pencil-fill me-1"></i> Modify
							</Link>
							<button type="button" className="btn-outline-danger " data-bs-toggle="modal" data-bs-target="#confDeletemodal"><i className="bi bi-person-x-fill"></i>X</button>
							</div>
						
						</li>
					);
				})}
			</ul>
				<div className="modal fade" id="confDeletemodal" tabIndex="-1" aria-labelledby="confDeletemodalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="confDeletemodalLabel">Are you sure?</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								If you delete this contact, the universe will go down?
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
								<button onClick={()=>actions.deletecontact(item.id)}  type="button" className="btn btn-primary">Yes baby!</button>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);

};
