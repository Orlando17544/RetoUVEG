import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	/*
	var formLogin: FormGroup;

	constructor(formBuilder: FormBuilder) {
	}


	ngOnInit() {
		this.formLogin = this.formBuilder.group({ 
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});	
	}

	send(): any {
		console.log(this.formLogin.value);
	}*/
}
