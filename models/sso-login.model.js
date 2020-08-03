import { Selector } from 'testcafe';

class SSOLoginPageModel {
	
	constructor(){

		this.emailField = Selector('#username');
		this.passwordField = Selector('#password');
		this.loginButton = Selector('#submit-button');

	}

}

export default new SSOLoginPageModel();