
module.exports = {
    context: __dirname + '/assets/js/reactSrc/',
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output:{
        path: __dirname + '/assets/js/',
        filename: 'bundle.js'
    }
};
