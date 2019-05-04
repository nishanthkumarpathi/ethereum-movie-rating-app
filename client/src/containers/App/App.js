import React, { Component } from 'react';
import './App.css';
import logo from '../../images/logo.svg';

import { ratingContract } from '../../EthereumSetup';
import ShowMovies from '../../components/ShowMovies/ShowMovies';
import Navbar from '../../components/Navbar/Navbar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          name: 'Star Wars',
          rating: 0
        },
        {
          name: 'Avatar',
          rating: 0
        },
        {
          name: 'Inception',
          rating: 0
        }
      ]
    };

    this.handleVoting = this.handleVoting.bind(this);
  }

  handleVoting(movie) {
    ratingContract.voteForMovie(movie)

    let votes = ratingContract.totalVotesFor(movie).toNumber();

    this.setState({
      movies: this.state.movies.map(
        (el) => el.name === movie ? Object.assign({},el,{rating:votes}):el
      )
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          {/* <div className="App-logo">
            <img src={logo} className="App-logo" alt="logo" width={60}/>
          </div> */}
          <div className="movie-table">
            <ShowMovies
              movies={this.state.movies}
              vote={this.handleVoting}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
