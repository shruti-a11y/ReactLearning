import React from 'react'

const TopButtonPanel = () => {
    const cities=[
        {
            id :1,
            name: 'London'
        },
        {
            id :2,
            name: 'Tokyo'
        },
        {
            id :3,
            name: 'Delhi'
        },
        {
            id :4,
            name: 'Paris'
        },
        {
            id :5,
            name: 'Toranto'
        }
     ]
  return (
    <div className='flex items-center justify-center my-6'>
      {
        cities.map((city)=>(
            <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-2 py-2 rounded-xl transition ease-in'>{city.name}</button>
        ))
    }
    </div>
  )
}

export default TopButtonPanel
