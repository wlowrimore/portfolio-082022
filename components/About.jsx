import React from 'react'

const About = () => {
  return (

    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p>About</p>
                <h2>Who I Am</h2>
                <p>I am not your average developer</p>

                <p>Bio goes here 1st paragraph</p>

                <p>Bio goes here 2nd paragraph</p>

                <p>Bio goes here 3rd paragraph</p>

                <p>...And so on...</p>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About