import React from 'react'

function Alert(props) {
    const convertFirstLetterToUpperCase = (word) => {
        // Convert entire word to lowercase first
        let lowerCaseWord = word.toLowerCase();
        
        // Capitalize the first letter and concatenate with the rest of the word
        let convertedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
        
        return convertedWord;
    }
    
    return (
        
           props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {convertFirstLetterToUpperCase(props.alert.type)} : {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={props.dissmissAlert} aria-label="Close"></button>
            </div>
        
    )
}

export default Alert
