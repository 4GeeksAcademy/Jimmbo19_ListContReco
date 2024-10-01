const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contactos: [
				{
					"name": " ",
					"phone": " ",
					"email": " ",
           			"address": " "
				}
			]
		},
		actions: {

			
			loadSomeData: () => {
				console.log('llamando al api')

				fetch('https://playground.4geeks.com/contact/agendas/JaimeAgenda')
				.then((response) => response.json())
				.then((data)=> 
				{

					console.log(data.contacts);
					setStore({contactos: data.contacts });
				});},
				
			 deletecontact: (idtodelete) => {
				 console.log('eliminar contacto' + idtodelete )
				 const store= getStore();
					const requestOptions = {
						method: "DELETE",
						redirect: "follow"
					};
				  
				  fetch(`https://playground.4geeks.com/contact/agendas/JaimeAgenda/contacts/${idtodelete}`, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log(result);
						setStore({ contactos: store.contactos.filter(contact => contact.id !== idtodelete) });
					})
			},

			 addContacto(contacto){
				console.log('agrega usuario')
				const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

						const raw = JSON.stringify({
							"name": contacto.name,
							"phone": contacto.phone,
							"email": contacto.email,
							"address": contacto.address,
							"id": 0
							});

						const requestOptions = {
							method: "POST",
							headers: myHeaders,
							body: raw,
							redirect: "follow"
							};

						fetch("https://playground.4geeks.com/contact/agendas/JaimeAgenda/contacts", requestOptions)
						.then((response) => response.json())
						.then((result) => {
							console.log(result)
							const store=  getStore();
							setStore({contactos:[...store.contactos,result]});
						})
			},	

			updateContacto: (id, updatedContact)=>{
				const store=getStore();

				const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": updatedContact.name,
					"phone": updatedContact.phone,
					"email": updatedContact.email,
					"address": updatedContact.address
					
					});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
					};

				fetch(`https://playground.4geeks.com/contact/agendas/JaimeAgenda/contacts/${id}`, requestOptions)
				.then((response) => response.text())
				.then((result) => 
					{
						console.log(result);
						const store=getStore();
						const updatedContacts= store.contacts.map((contact)=> contact.id=== id? result:contact);
						setStore({contactos:updatedContacts});
					})
			},

		}
	};
};

export default getState;
