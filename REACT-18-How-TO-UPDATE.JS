// You can update Your Project via Two step

1. Yarn add react@latest react-dom@latest

2. Update index.js

REPLACE-
  ReactDOM.render(<App />, document.getElementById('root'));

WITH

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
