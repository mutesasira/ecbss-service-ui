import React, {useState} from 'react';
import ConceptForm from './ConceptForm';
import uuid from 'uuid/v1';


function Attributes() {
    const [names, setNames] = useState([
        {name: 'cpx', id: 1},
        {name: 'osx', id: 1}
    ]);
    const addName = (name) =>{
        setNames([...names, {name, id: uuid() }]);
    }
    return (
        <div className = "bg-blue-100 mx-32 my-12">

            <div className="flex mb-4">
                <div className="w-full h-12 mx-8">
                    <ConceptForm addName={addName}/>
                    {names.map(cname =>{
                          return (key = {cname.id}>{cname.name});
                    })}
                </div>
            </div>
        </div>
    )
}

export default Attributes
