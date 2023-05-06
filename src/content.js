


const div = target.createElement("div");
div.id = "target-for-ext";
div.style.position = "absolute";
div.style.top = "0";
div.style.right = "0";
div.style.zIndex = 99999
div.innerHTML = `
    <div style="padding: 10px; background: #fff; border: 1px solid #000;">
        <h1>React App</h1>
        <p>This React app is rendered by a Chrome extension.</p>
    </div>
`
document.body.appendChild(div);
