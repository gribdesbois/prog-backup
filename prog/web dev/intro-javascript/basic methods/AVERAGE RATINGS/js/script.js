// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  
  return sum / ratings.length;

}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`

/*
ex array


class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('An Unexpected Climax', 60, false);

// Create your array here
// ====================================
let episodes = [secondEpisode,
thirdEpisode,
firstEpisode               ]; 



// ====================================

const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}

//push/pop...
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('An Unexpected Climax', 60, false);

// Modify the array here
// ====================================
let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode, firstEpisode,
firstEpisode, secondEpisode, thirdEpisode, thirdEpisode, firstEpisode             );
episodes.pop();
let numberOfEpisodes = episodes.length;

// ====================================

const body = document.querySelector('body');

document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}

class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    
    // Add conditions here
    // =================================
    if (duration === minutesWatched) {
      this.hasBeenWatched = true;
    } else if (minutesWatched < duration) {
      this.hasBeenWatched = false;
    }
    // =================================
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

const body = document.querySelector('body');

for(let i = 0; i < 3; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}



class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    // Add logic here
    // ======================
    if (minutesWatched === 0) {
      this.watchedText = 'Not yet watched';
      this.continueWatching = false;
    } else if (minutesWatched > 0 && minutesWatched < duration) {
      this.watchedText = 'Watching';
      this.continueWatching = true;
    } else if (minutesWatched === duration) {
      this.watchedText = 'Watched';
      this.continueWatching = false;
    }
    
    
    // ======================
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].watchedText}
`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  if (episodes[i].continueWatching) {
    let newButton = document.createElement('button');
    newButton.innerText = 'Continue watching';
    newParagraph.append(newButton);
  }
  body.append(newDiv);
}*/