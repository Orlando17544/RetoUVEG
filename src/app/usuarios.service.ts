import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	let users: { name: string, email: string, password: string }[] = [
		{ "name": "Pedro", "email": "pedro@gmail.com", "password": "123456" },
		{ "name": "Paco", "email": "paco@gmail.com", "password": "abc123" },
		{ "name": "Raul", "email": "raul@gmail.com", "password": "adegkta" },
		{ "name": "Alberto", "email": "alberto@gmail.com", "password": "rg32tutn" },
		{ "name": "Luis", "email": "luis@gmail.com", "password": "rtacceh3" },
	];

	constructor() { }

	addUser() {
		users.push();
	}
}
