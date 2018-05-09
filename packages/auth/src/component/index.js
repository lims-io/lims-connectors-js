import xcomponent from 'xcomponent';

/**
 * Fixes xcomponent height by add height='inherit' to iframe context div.
 * Thanks to that the iframe will always fill the parent div.
 * @param element
 * @param height
 */
const fixHeight = (element, height = 'inherit') => {
    const elements = element.getElementsByClassName('xcomponent-context-iframe');

    if (elements && elements.length > 0) {
        elements[0].style.height = height;
    }
};

/**
 * Creates an instance of xcomponent
 *
 * @param identifier Unique identifier of the component
 * @param url Content URL
 * @param spinner Set to `true` if the loading spinner should be shown
 * @param logLevel Level of logging [error | debug | info | warn]
 * @return component
 */
const create = (identifier, url, spinner, logLevel) => {
    // Create new instance
    if (xcomponent.getByTag(identifier) === undefined) {
        const options = {
            // Component identifier
            tag: identifier,

            // iframe wrapper dimensions.
            // Note that `height` dimension is dynamically changed
            // based on the root container size.
            dimensions: {
                width: '100%',
                height: '100%'
            },

            // Enable viewport scrolling
            scrolling: true,

            // The url that will be loaded in the iframe
            url,

            // Logging level
            defaultLogLevel: logLevel
        };

        // Hide the spinner if disabled
        if (!spinner) {
            // Note that prerender template must return a function
            options.prerenderTemplate = () => ({});
        }

        // Create xcomponent
        xcomponent.create(options);
    }

    return xcomponent.getByTag(identifier);
};

/**
 * Renders the component
 *
 * @param component
 * @param element Element id to which the component should render
 * @param api An object containing api calls
 */
const render = (component, element, api) => {
    component.render(api, element);
    fixHeight(element);
};

export {
    create,
    render
};
