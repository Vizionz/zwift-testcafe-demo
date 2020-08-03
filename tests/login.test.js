import landingModel from '../models/landing.model';
import ssoLoginModel from '../models/sso-login.model';

fixture `Zwift Login`
	.page('zwift.com');

test('Login', async (t) => {
	await t
		.maximizeWindow()
		.expect(landingModel.loginButton.visible).ok()
		.click(landingModel.loginButton)
		.expect(ssoLoginModel.emailField.visible).ok()
		.typeText(ssoLoginModel.emailField, 'Your.Email@here.com')
		.typeText(ssoLoginModel.passwordField, 'YourPasswordHere')
		.click(ssoLoginModel.loginButton);
});