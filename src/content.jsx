import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index';

const target = document.createElement("div");
target.id = "myExtensionId"
var root;

function mount(target) {
    if (!root) {
        root = createRoot(target);
    }

    root.render(<App />);
}

document.body.appendChild(target);

mount(target);
