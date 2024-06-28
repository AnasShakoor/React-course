import React, { useState } from 'react';

export default function InputForm(props) {
    const [text, setText] = useState("I am your default text");
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
    };

    const handleClickToLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        updateHistory(newText);
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
    }

    return (
        <>
            <div>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChanges}
                        id="mytext"
                        rows="6"
                        placeholder='Write the text you want to change'
                        spellCheck="true"
                    ></textarea>
                    <button onClick={handleClickToUpperCase} className='btn btn-primary my-4'>Convert to upper case</button>
                    <button onClick={handleClickToLowerCase} className='btn btn-primary my-4 mx-2'>Convert to lower case</button>
                    <button onClick={clearText} className='btn btn-primary my-4 mx-2'>Clear Text</button>
                </div>
                <button onClick={handleUndo} className='btn btn-secondary my-2 mx-1'>Undo</button>
                <button onClick={handleRedo} className='btn btn-secondary my-2 mx-1'>Redo</button>
            </div>
            <div className="container">
                <h2>This is the result of your text</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} min read time</p>

                <button type="button" onClick={launchModal} className="btn btn-primary">
                    Preview
                </button>
                <button type="button" onClick={speakText} className="btn btn-secondary ml-2 mx-2">
                    Speak
                </button>
                <button type="button" onClick={copyText} className="btn btn-secondary ml-2 mx-2">
                    Copy
                </button>
                {modal && (
                    <div className="modal fade show d-block" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Perview your text</h5>
                                    <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {text}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
