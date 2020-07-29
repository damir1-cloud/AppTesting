import React from 'react';
import {Button} from '@material-ui/core';



 export const Form = ()=> {

return (
    <div>
        <form>
            <label htmlFor = "usern">Username</label>
            <input type = "text" id="usern"></input>
            <br/>
            <Button type="submit">Submit</Button>
            
        </form>


    </div>

);

}
