import React, { useState } from 'react';

export default function InputForm(props) {
    const [text, setText] = useState("");
    const [modal, setModal] = useState(false);
    const [history, setHistory] = useState({
        past: [],
        present: "I am your default text",
        future: []
    });

    const updateHistory = (newText) => {
        setHistory(prevHistory => ({
            past: [...prevHistory.past, prevHistory.present],
            present: newText,
            future: []
        }));
    };

    const handleClickToUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        updateHistory(newText);
        props.showAlert("Converted to Upper Case successfully!", "success");
    };

    const handleClickToLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        updateHistory(newText);
        props.showAlert("Converted to Lower Case successfully!", "success");

    };

    const launchModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleOnChanges = (a) => {
        const newText = a.target.value;
        setText(newText);
        updateHistory(newText);
    };

    const speakText = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    const clearText = () => {
        setText("");
    }

    const handleUndo = () => {
        setHistory(prevHistory => {
            if (prevHistory.past.length === 0) return prevHistory;

            const previous = prevHistory.past[prevHistory.past.length - 1];
            const newPast = prevHistory.past.slice(0, prevHistory.past.length - 1);

            setText(previous);

            return {
                past: newPast,
                present: previous,
                future: [prevHistory.present, ...prevHistory.future]
            };
        });
    };

    const handleRedo = () => {
        setHistory(prevHistory => {
            if (prevHistory.future.length === 0) return prevHistory;

            const next = prevHistory.future[0];
            const newFuture = prevHistory.future.slice(1);

            setText(next);

            return {
                past: [...prevHistory.past, prevHistory.present],
                present: next,
                future: newFuture
            };
        });
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text coppied to the clipboard!", "success");

    }

    return (
        <>
            <div style={props.mode}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="form-group">
                    <textarea
                        style={props.mode}
                        className="form-control"
                        value={text}
                        onChange={handleOnChanges}
                        id="mytext"
                        rows="6"
                        placeholder='Write the text you want to analize'
                        spellCheck="true"
                    ></textarea>
                    <button disabled = {text.length === 0 }onClick={handleClickToUpperCase} className='btn btn-primary my-4' style={props.mode}>Convert to upper case</button>
                    <button disabled = {text.length === 0 }onClick={handleClickToLowerCase} className='btn btn-primary my-4 mx-2' style={props.mode}>Convert to lower case</button>
                    <button disabled = {text.length === 0 }onClick={clearText} className='btn btn-primary my-4 mx-2' style={props.mode}>Clear Text</button>
                </div>
                <button disabled = {text.length === 0 }onClick={handleUndo} className='btn btn-secondary my-2 mx-1' style={props.mode} >Undo</button>
                <button disabled = {text.length === 0 }onClick={handleRedo} className='btn btn-secondary my-2 mx-1' style={props.mode}>Redo</button>
            </div>
            <div className="container" style={props.mode}>
                <h2>This is the result of your text</h2>
                <p>{text.trim() === "" ? "0 words" : `${text.trim().split(/\s+/).length} words, ${text.trim().length} characters`}</p>
                <p>{text.trim().split(" ").length  * 0.008} min read time</p>

                <button disabled = {text.length === 0 }type="button" style={props.mode} onClick={launchModal} className="btn btn-primary">
                    Preview
                </button>
                <button disabled = {text.length === 0 }style={props.mode} type="button" onClick={speakText} className="btn btn-secondary ml-2 mx-2">
                    Speak
                </button>
                <button disabled = {text.length === 0 }style={props.mode} type="button" onClick={copyText} className="btn btn-secondary ml-2 mx-2">
                    Copy
                </button>
                {modal && (
                    <div className="modal fade show d-block" style={props.mode} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" style={props.mode} id="exampleModalLongTitle">Perview your text</h5>
                                    <button disabled = {text.length === 0 }type="button" className="close" onClick={closeModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" style={props.mode}>
                                    <p>{text.length > 0 ? text : "Enter something"}</p>
                                </div>
                                <div className="modal-footer">
                                    <button disabled = {text.length === 0 }type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
