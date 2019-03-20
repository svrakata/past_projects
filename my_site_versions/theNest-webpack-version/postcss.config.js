const autoprefixer = require('autoprefixer');

const autoPrefixerPlugin = autoprefixer({ browsers: 'last 4 versions' });

module.exports = {
    plugins: [autoPrefixerPlugin],
};
