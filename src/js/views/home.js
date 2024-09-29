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
							<button onClick={()=>actions.deletecontact(item.id)}>Eliminar</button>
							
						</li>
					);
				})}
			</ul>
			
		</div>
	);

};
