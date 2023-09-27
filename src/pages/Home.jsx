import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row title = 'Now Playing' fetchUrl = {requests.requestNowPlaying} />
        <Row title = 'Upcoming' fetchUrl = {requests.requestUpComing} />
        <Row title = 'Popular' fetchUrl = {requests.requestPopular} />
        <Row title = 'Top Rated' fetchUrl = {requests.requestTopRated} />
    </>
  )
}

export default Home