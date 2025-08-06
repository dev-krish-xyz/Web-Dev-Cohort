let movieRatings = [
  {
    title: "Movie A",
    ratings: [4, 5, 3],
  },
  {
    title: "Movie B",
    ratings: [5, 5, 4],
  },
  {
    title: "Movie C",
    ratings: [4, 3, 2],
  },
];

const avgRating = movieRatings.reduce((movierating, object) => {
    const avg = object.ratings.reduce((acc,crr)=> acc+= crr) / object.ratings.length;

    movierating[object.title] = (movierating[object.title] || 0) + parseFloat(avg.toFixed(1));
    return movierating;
}, {});

console.log(avgRating);