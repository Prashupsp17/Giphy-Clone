import React, { useEffect, useCallback } from 'react';
import FilterGif from '../components/FilterGif';
import Gif from '../components/Gif';
import { GifState } from "../context/GifContext";

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState();

  const fetchTrendingGifs = useCallback(async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g"
    });
    setGifs(data);
  }, [gf, filter, setGifs]);

  useEffect(() => {
    fetchTrendingGifs();
  }, [fetchTrendingGifs]);

  return (
    <div>
      <img 
        src="/banner.gif"
        alt="earth_banner"
        className='mt-2 rounded w-full'
      />
      <FilterGif showTrending />
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif?.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
