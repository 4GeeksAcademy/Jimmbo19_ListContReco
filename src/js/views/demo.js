import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>ADD a new contact</h1>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput" className="form-label">Name</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full name" />
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
					<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" />
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
					<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone" />
				</div>
				<div className="mb-3">
					<label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
					<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Address" />
				</div>
				<button type="button" class="btn btn-primary">save</button>
				<Link to="/" >
				<button type="button" class="btn btn-link">Back contacts</button>
				</Link>
		</div>
	);
};
