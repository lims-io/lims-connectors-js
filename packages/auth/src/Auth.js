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
     * @param customToken
     * @param onLoad
     * @param onAuthenticated
     * @param onSignOut
     */
    constructor(element, url, {
        connector = 'unknown',
        spinner = true,
        logLevel = 'error',
        customToken,
        onLoad,
        onAuthSuccess,
        onAuthError,
        onSignOut,
    } = {}) {
        // Create component
        const component = create('lims-auth', url, spinner, logLevel);
        // Render component
        render(component, element, {
            /**
             * Connector name
             */
            connector,
            /**
             * Custom token
             */
            customToken,
            /**
             * Called when the component has loaded and is ready to be displayed.
             */
            onLoad() {
                if (isFunction(onLoad)) {
                    onLoad();
                }
            },
            /**
             * Called when the user is successfully authenticated
             */
            onAuthSuccess(user) {
                if (isFunction(onAuthSuccess)) {
                    onAuthSuccess(user);
                }
            },
            /**
             * Called when the authentication fails
             */
            onAuthError(error) {
                if (isFunction(onAuthError)) {
                    onAuthError(error);
                }
            },
            /**
             * Called when the user is signed out
             */
            onSignOut() {
                if (isFunction(onSignOut)) {
                    onSignOut();
                }
            }
        });
    }
}

export default Auth;