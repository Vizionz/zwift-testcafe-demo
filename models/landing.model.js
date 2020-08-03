import { Selector } from 'testcafe';

class LandingPageModel {
	
	constructor(){

		this.loginButton = Selector('#znv-header-login-button');
		
	}

}

export default new LandingPageModel();