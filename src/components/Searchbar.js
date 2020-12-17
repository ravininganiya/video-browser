import React,{useState} from 'react';

const Searchbar =(props)=> {
    const[value,setValue]=useState("");
    const onInputChange =(e)=>{
        // console.log(e.target.value)
        setValue(e.target.value);
    };
    const onFormSubmit=(e)=>{
        e.preventDefault();
        props.onFormSubmit(value)
    }
    
        return(
            <div className="search-bar ui segment">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={onInputChange} value={value} placeholder="Search video here and hit enter..."  />
                    </div>
                </form>
            </div>
        );  
    
}
export default Searchbar;
