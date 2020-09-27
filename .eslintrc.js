module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
    plugins: ['react', 'import'],
};
