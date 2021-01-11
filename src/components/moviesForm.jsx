import React, { Component } from 'react';
import { getMovies} from '../services/movieServices';

class MovieForm extends Component {
    state = {
       
         name: this.props.match.params.name ,
      
      };
     
    render() { 
        
        return ( <div>
            <h1>{this.state.name}</h1>
            
        </div>);
    }
}
 
export default MovieForm;