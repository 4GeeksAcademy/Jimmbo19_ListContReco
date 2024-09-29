import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<div className="container">
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Add Contact</button>
				</Link>
			</div>
			<ul className="list-group">
				{store.contactos.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
							<p to={"/single/" + index}>
								<span>contacto: {item.name}</span>
								
								<span>numero: {item.phone}</span>
							</p>
							<Link to={`/modify/${item.id}`} >
							<button>Modify</button>
							</Link>
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>
						
								<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
									<div className="modal-header">
										<h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
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
						</li>
					);
				})}
			</ul>
			
		</div>
	);

};
