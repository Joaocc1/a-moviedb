import { useEffect, useState } from "react";
import apiKey from "../services/api";
import MovieCard from "../components/MovieCard";
import { Flex, Header, HeaderOne } from "./styles";
import { Movie } from "../models/movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Home = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchMovie = () => {
  
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch((e) => console.log(e));
    };
  
    searchMovie();
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
    <div>
      <Header>
        <HeaderOne>A Movie Database</HeaderOne>
      </Header>

      <Form>
        <FormGroup className="mb-3 search-form">
          <Form.Control
            type="search"
            placeholder="Search here..."
            required
            name="query"
            value={query}
            onChange={handleInputChange}
          />
        </FormGroup>
      </Form>

      <Flex>
        {movies.map((movieList) => (
          <MovieCard key={movieList.id} {...movieList}></MovieCard>
        ))}
      </Flex>
    </div>
    </>
  );

}

export default Home;