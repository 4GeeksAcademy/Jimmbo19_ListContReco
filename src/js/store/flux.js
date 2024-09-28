const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "hola",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactos: [
				{
					"name": "jaime",
					"phone": "5552114546",
					
				},
				{
					"name": "jaime",
					"phone": "5552114546",
					
				},
				{
					"name": "jaime",
					"phone": "5552114546",
					
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log('llamando al api')

				fetch('https://playground.4geeks.com/contact/agendas/JaimeAgenda')
				.then((response) => response.json())
				.then((data)=> {
					console.log(data.contacts);
					setstore({contactos: data.contacts });
				})
				
				.catch((error) => console.error(error));
			},
			 deletecontact: (indextodelete) => {
				console.log('eliminar contacto' + indextodelete )
				const store= getStore();
				setStore({contactos: store.contactos.filter((contact,index)=>index !=indextodelete)})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
