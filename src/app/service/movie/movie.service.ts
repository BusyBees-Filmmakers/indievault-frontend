import { Injectable } from '@angular/core';
import { Movie } from "../../common/interface/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieDatabase: Movie[] = [
    {
      title: "The Solitude of Sand",
      id: 1,
      info: "A reflective journey through the desert.",
      description: "A wanderer discovers the secrets of the shifting sands.",
      longDescription: "Set in the vast expanse of a desert, this short film explores themes of isolation, survival, and the whispers of the past buried beneath the dunes.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Alice Green" },
        { role: "Writer", name: "Ben Harper" },
        { role: "Lead Actor", name: "Clara Mendel" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=1"
    },
    {
      title: "Echoes of the Metro",
      id: 2,
      info: "A musician finds inspiration in the city's underground.",
      description: "Music echoes through the tunnels, carrying stories of urban life.",
      longDescription: "A subway busker's journey to connect with people in a bustling cityscape, finding melody in chaos.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Sam Delaney" },
        { role: "Composer", name: "Lila West" },
        { role: "Cinematographer", name: "Hugo Lane" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=2"
    },
    {
      title: "Lanterns in the Mist",
      id: 3,
      info: "A village's ritual and its mysterious origins.",
      description: "Lanterns guide the way, but to where?",
      longDescription: "A breathtaking tale of a small community shrouded in fog, where tradition meets mystery as glowing lanterns light a path through the unknown.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Elena Cruz" },
        { role: "Producer", name: "Martin Yates" },
        { role: "Lead Actor", name: "Sophia Lin" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=3"
    },
    {
      title: "Threads of Tomorrow",
      id: 4,
      info: "A seamstress dreams of altering fate.",
      description: "Can fabric and fate intertwine?",
      longDescription: "In a futuristic society, a skilled seamstress discovers a fabric that can alter destiny, leading her to question the consequences of changing the threads of life.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Writer", name: "Chris Nolan" },
        { role: "Costume Designer", name: "Patricia Miles" },
        { role: "Lead Actress", name: "Emma Thorn" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=4"
    },
    {
      title: "Whispering Pines",
      id: 5,
      info: "An eerie forest holds untold secrets.",
      description: "Voices in the wind, tales in the trees.",
      longDescription: "A group of friends uncover an ancient legend while hiking through a forest known for its haunting whispers.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Jake Lowry" },
        { role: "Screenwriter", name: "Melissa Grant" },
        { role: "Sound Designer", name: "Olivia Carter" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=5"
    },
    {
      title: "Flight of the Fireflies",
      id: 6,
      info: "A child's journey of hope and resilience.",
      description: "Fireflies light the path to a better tomorrow.",
      longDescription: "Following the struggles of a young child in a war-torn land, this film captures the innocence and determination to find light in the darkest of times.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Ravi Singh" },
        { role: "Producer", name: "Maria Ortega" },
        { role: "Lead Actor", name: "Leo Chen" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=6"
    },
    {
      title: "Timeless Glance",
      id: 7,
      info: "A photographer captures fleeting moments of eternity.",
      description: "A single frame, a thousand stories.",
      longDescription: "A traveling photographer discovers the magic of capturing not just images but the soul of fleeting moments, where time seems to stand still.",
      youtubeId: "CXhnPLMIET0",
      filmmakerId: 101,
      credits: [
        { role: "Director", name: "Isla Brown" },
        { role: "Writer", name: "Ethan Miles" },
        { role: "Editor", name: "Nina Lopez" }
      ],
      genre: "action",
      posterUrl: "https://picsum.photos/150?random=7"
    }
  ];

  constructor() { }

  getMovieDatabase(): Movie[] {
    return this.movieDatabase;
  }

  addMovie(movie: Movie): void {
    this.movieDatabase.push(movie);
  }

  getMovieById(id: number): Movie | null {
    const movie = this.movieDatabase.find(movie => movie.id === id);
    return movie || null;
  }

  getMoviesByFilmmakerId(filmmakerId: number): Movie[] {
    return this.movieDatabase.filter(movie => movie.filmmakerId === filmmakerId);
  }
}
