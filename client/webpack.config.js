const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./index.html",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
