var movies = [
  {
    id: 1,
    title: "Where Eagles Dare",
    category: "Action, war",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGE3ZWZiNzktMDIyOC00ZmVhLThjZTktZjQ5NjI4NGVhMDBlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SY1000_CR0,0,670,1000_AL_.jpg",
    alt: "Where Eagles Dare poster"
  },
  {
    id: 2,
    title: "The Odd Couple",
    category: "Comedy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDVhNzQxZDEtMzcyZC00ZDg1LWFkZDctOWYxZTY0ZmYzYjc2XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SY1000_CR0,0,657,1000_AL_.jpg",
    alt: "The Odd Couple poster"
  },
  {
    id: 3,
    title: "The Peacemaker",
    category: "Action, Thriller",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0OTNjOTMtYWU1MC00MWQwLTllMmMtNWZmYmE3NDY0ZTgxXkEyXkFqcGdeQXVyMTE2OTg4Mjg@._V1_.jpg",
    alt: "The Peacemaker poster"
  }
];

var MovieArr = React.createClass({
  propTypes: {
    movieArr: React.PropTypes.array.isRequired,
  },
  render: function() {
    var elem = this.props.movieArr.map(function(item){
      return React.createElement(Movie, {movie: item, key: item.id})
    });
    return (
      React.createElement("ul", {}, elem)
    )
  },
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement("li", {},
        React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
        React.createElement(MovieCategory, {movieCategory: this.props.movie.category}),
        React.createElement(MoviePoster, {moviePoster: this.props.movie.poster,
          movieAlt: this.props.movie.alt})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement("h2", {}, this.props.movieTitle)
    )
  },
});

var MovieCategory = React.createClass({
  propTypes: {
    movieCategory: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement("p", {}, this.props.movieCategory)
    )
  },
});

var MoviePoster = React.createClass({
  propTypes: {
    moviePoster: React.PropTypes.string.isRequired,
    movieAlt: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement(
        "img", 
        {
          src: this.props.moviePoster,
          alt: this.props.movieAlt
        }
      )
    )
  },
});

var element = React.createElement("div", {},
  React.createElement("h1", {}, "Movie list"),
  React.createElement(MovieArr, {movieArr: movies})
);

ReactDOM.render(element, document.getElementById("app"));
