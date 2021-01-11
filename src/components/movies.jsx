import React, { Component } from 'react';
import { getMovies} from '../services/movieServices';
import Paggination from './paggination';
import { paginate } from '../util/pagination';   
import { getGenres } from '../services/genreService';
import GenreList from './genreList';
import _ from "lodash";
import { Link } from 'react-router-dom';


class Movie extends Component {
    state = {
        movies: [],
        genres:[],
        pageSize:3,
        currentPage:1,
        selectedGenre:null,
        sortColumn: { path: 'title', order: 'asd' },
      }

      async componentDidMount() {
      
        const { data: movies } = await getMovies();
        const genres= [{name:"All Genres"},...getGenres()]
        this.setState({movies,genres});
        
        
      }
      handlePageChange=page=>{
          this.setState({currentPage:page})

      }

      handleGenreSelect=genre=>{
        this.setState({selectedGenre:genre, currentPage:1});
      }
      handleSort=path=>{

        const sortColumn={...this.state.sortColumn};
        if(sortColumn.path===path)
            sortColumn.order =(sortColumn.order=="asc")?"desc": "asc";
        
else{
    sortColumn.path=path;
    sortColumn.order="asc";
}

        this.setState({sortColumn});
      }
    render() { 
        const {length:count}=this.state.movies;
        const{pageSize,currentPage,movies:allMovies,selectedGenre,sortColumn}=this.state;

        const filtered= selectedGenre && selectedGenre._id?allMovies.filter(m=>m.genre===selectedGenre.name):allMovies;
        
        const sorted= _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        
        const movies=paginate(sorted,currentPage,pageSize);
        if(count===0)
        return(<p>There are no movies in the database</p>)

        return (<React.Fragment>
              <div className="row">
              <div className="col-3">
                  <GenreList items={this.state.genres} onItemSelect={this.handleGenreSelect}
                  selectedItem={selectedGenre}/>
              </div>
        <div className="col">
        <p>Showing {filtered.length} movies in the database</p>
            <table className="table">
            <thead>
                <tr>
                    <th className="clickable" onClick={()=>this.handleSort("name")}>Name </th>
                    <th className="clickable" onClick={()=>this.handleSort("productionYear")}>Year</th>
                    <th className="clickable" onClick={()=>this.handleSort("genre")}>Genre</th>
                    <th className="clickable" onClick={()=>this.handleSort("synopsisShort")}>Synopsis</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie=><tr>
                    <td > <Link to={`/movies/${movie.name}`}>{movie.name}</Link></td>
                    <td >{movie.productionYear}</td>
                    <td >{movie.genre}</td>
                    <td >{movie.synopsisShort}</td>
                </tr>)}
                
            </tbody>
        </table> 
        <Paggination itemCount={filtered.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
        </div>
       
        </div>
           
        </React.Fragment> );
    }
}
 
export default Movie;