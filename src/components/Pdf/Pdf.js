import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "./styles.css";
const ref = React.createRef();

function Pdffile() {
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Pdffile />, rootElement);
