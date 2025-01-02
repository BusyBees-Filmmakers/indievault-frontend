import {Credit} from "./credit";

export interface Movie {
  title: string;
  id: number;
  info: string;
  description: string;
  longDescription: string;
  youtubeId: string;
  filmmakerId: number;
  credits: Credit[];
  genre: string;
  posterUrl: string;
}
