import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from '../context/GifContext';
import GifSearch from './GifSearch';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const { gf, favorites } = GifState();

    console.log(categories);

    const fetchGifCategories = useCallback(async () => {
        const { data } = await gf.categories();
        setCategories(data);
    }, [gf]);

    useEffect(() => {
        fetchGifCategories();
    }, [fetchGifCategories]);

    return (
        <nav>
            <div className='relative flex gap-4 justify-between items-center mb-2'>
                <Link to="/" className='flex gap-2'>
                    <img src="/logo.svg" className='w-8' alt="Giphy Logo" />
                    <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1>
                </Link>
                <div className='font-bold text-md flex gap-2 items-center'>
                    {/* Render Categories */}
                    {categories.slice(0, 5).map((category) => (
                        <Link
                            key={category.name}
                            to={`/${category.name_encoded}`}
                            className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                        >
                            {category.name}
                        </Link>
                    ))}
                    <Link className='px-4 py-1 hover:gradient border-4 hidden lg:block'>Reactions</Link>
                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical
                            size={35}
                            className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`}
                        />
                    </button>
                    {favorites.length > 0 && (
                        <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded sm:p-1 px-3'>
                            <Link to="/favorites">Favorite GIFs</Link>
                        </div>
                    )}
                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiMiniBars3BottomRight className='text-sky-400 block lg:hidden' />
                    </button>
                </div>
                {showCategories && (
                    <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
                        <span className='text-3xl font-extrabold'>Categories</span>
                        <hr className='bg-gray opacity-50 my-5' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                            {categories.map((category) => (
                                <Link
                                    key={category.name}
                                    to={`/${category.name_encoded}`}
                                    className="font-bold"
                                    onClick={() => setShowCategories(false)}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <GifSearch />
        </nav>
    );
};

export default Header;
