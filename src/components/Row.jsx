import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Movies from './Movies'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])
   
    useEffect(()=>{
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
        })

    },[fetchUrl])

    const slider = useRef();
    

    const slideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - 500;
      };

      const slideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + 500;
      };

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4' >{title}</h2>
        <div className='relative flex items-center group'>
        
            <KeyboardArrowLeftIcon className="hidden group-hover:block bg-white left-0 rounded-full opacity-50 hover:opacity-100 absolute z-10" onClick={slideLeft}/>
                <div ref={slider} className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative">
                    {
                        movies.map((item, id)=> (
                           <Movies key={id} item={item} />
                        ))
                    }
                </div>
            <KeyboardArrowRightIcon className= " right-0 bg-white rounded-full opacity-50 hover:opacity-100 absolute z-10 custom-hidden-icon" onClick={slideRight}/>  
        </div>
    </div>
  )
}

export default Row