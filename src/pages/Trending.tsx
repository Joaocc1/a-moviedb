import { useEffect, useState } from "react";
import apiKey from "../services/api";
import MovieCard from "../components/MovieCard";
import { Flex, Header, HeaderOne } from "./styles";
import { Movie } from "../models/movies";
import "bootstrap/dist/css/bootstrap.min.css";


const Trending = () => {

  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(() => {
    
      const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((e) => console.log(e));
    
    
  }, []);

  return (
    <>
    <div>
      <Header>
        <HeaderOne>Trending</HeaderOne>
      </Header>

      <Flex>
        {movies.map((movieList) => (
          <MovieCard key={movieList.id} {...movieList}></MovieCard>
        ))}
      </Flex>
    </div>
    </>
  );

};


export default Trending;