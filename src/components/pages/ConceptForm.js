import React, {useState} from 'react';

const ConceptForm = ({addName}) => {
    const [name, setName] = useState('');
    const handleSubmit = (e) =>{
         e.preventDefault();
         addName(name);
         setName('');
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label className = "my-2 text-lg">Concept Name: </label>
            <input type = 'text' value={name} required onChange = {(e) =>setName(e.target.value)}/>
                <button type = 'submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 ml-4"  >
                    Add New Concept
                </button>
        </form>
    );

}

export default ConceptForm;