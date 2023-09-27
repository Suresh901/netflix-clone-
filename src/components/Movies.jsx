import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Movies = ({item}) => {
    const [like, setLike]= useState(false)
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block'  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
    <div className='w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100  text-white '>
        <p className='white-space-normal text-xs md:text-sm lg:text-lg flex items-center justify-center h-full text-center'>{item?.title}</p>
        <p>
            {like ? <FavoriteIcon className='absolute top-4 left-4 text-gray-300'/> : <FavoriteBorderIcon className='absolute top-4 left-4 text-gray-300'/> }
        </p>
    </div>
</div> 
  )
}

export default Movies