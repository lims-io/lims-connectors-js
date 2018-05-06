import xcomponent from 'xcomponent';

/**
 * Creates an instance of xcomponent
 *
 * @param identifier Unique identifier of the component
 * @param url Content URL
 * @param logLevel Level of logging [error | debug | info | warn]
 * @return component
 */
const create = (identifier, url, logLevel) => {

    // Create new instance
    if (xcomponent.getByTag(identifier) === undefined) {
        xcomponent.create({

            // Component identifier
            tag: identifier,

            // iframe wrapper dimensions.
            // Both dimensions are set to `0px` because they will be
            // changed whenever the `onLayout` method is called.
            dimensions: {
                width: '100%',
                height: '100%'
            },

            // The url that will be loaded in the iframe
            url,

            // Logging level
            defaultLogLevel: logLevel,

            // Disable prerender template
            prerenderTemplate: function (opts) {
                // Just create empty html tag
                return opts.jsxDom('html');
            }
        });
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
};

export {
    create,
    render
};
