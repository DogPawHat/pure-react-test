var path = require('path');

var commonModule = {
    exclude: /(node_modules|bower_components)/,
    loaders: [
        { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
};

var commonTsLint = {
    emitErrors: false,
    failOnHint: false
}

var commonResolve = {
    alias: {
        templates: './templates'
    },
    extensions: ['', '.webpack.js', '.web.js', '.scss', '.ts', '.tsx', '.js', '.jsx']
};

module.exports = [
    {
        entry: './src/index.ts',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'client.bundle.js'
        },
        target: 'web',
        debug: true,
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: "./dist"
        },
        resolve: commonResolve,
        module: commonModule,
        tslint: commonTsLint
    }
];