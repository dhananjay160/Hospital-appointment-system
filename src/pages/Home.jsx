import React from 'react'
import Header from '../Component/Header'
import SpecialityMenu from '../Component/SpecialityMenu'
import TopDoctors from '../Component/TopDoctors'
import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home