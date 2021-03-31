const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FF5100',
                            "@link-color": "#FF5100",
                            "@border-radius-base": "5px"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};