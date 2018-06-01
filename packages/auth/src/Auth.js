// Validations
import {isFunction} from 'validation/isFunction';
// Component
import {create, render} from './component';

class Auth {
    /**
     * Constructor
     *
     * @param element DOM node that will contain the frame
     * @param url Auth API url
     * @param connector Defines name of the connector
     * @param spinner Set to `true` if the loading spinner should be shown
     * @param logLevel Level of logging [error | debug | info | warn]
     * @param customToken If set the Auth will try to sign in with the token
     * @param verifyEmailUrl Redirect url after email verification
     * @param onLoad
     * @param onAuthenticated
     * @param onSignOut
     */
    constructor(element, url, {
        connector = 'unknown',
        spinner = true,
        logLevel = 'error',
        customToken,
        verifyEmailUrl,
        onLoad,
        onAuthSuccess,
        onAuthError,
        onSignOut,
    } = {}) {
        // Create component
        const component = create('lims-auth', url, spinner, logLevel);
        // Render component
        render(component, element, {
            connector,
            customToken,
            verifyEmailUrl,
            onLoad() {
                if (isFunction(onLoad)) {
                    onLoad();
                }
            },
            onAuthSuccess(user) {
                if (isFunction(onAuthSuccess)) {
                    onAuthSuccess(user);
                }
            },
            onAuthError(error) {
                if (isFunction(onAuthError)) {
                    onAuthError(error);
                }
            },
            onSignOut() {
                if (isFunction(onSignOut)) {
                    onSignOut();
                }
            }
        });
    }
}

export default Auth;