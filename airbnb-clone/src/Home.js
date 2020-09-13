import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            
            <Banner />
            <div className="home_section">
                <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts."/>
                <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" title="Unique stays" description="Spaces that are more than just a place to sleep."/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Entire Homes" description="Comfortable private places, with room for freinds and family."/>
            </div>
            <div className="home_section">
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="3 Bedroom Flat in Bournemouth" description="Superhost with a stunning view of the beachside in sunny Bournemouth" price="$110/night"/>
                <Card src="https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict0003510023852.jpg?w=620" title="Penthouse in London" description="Enjoy the amazing sights of London with this stunning penthouse" price="$399/night"/>
                <Card src="https://media.nomadicmatt.com/2018/apartment.jpg" title="1 Bedroom Appartment" description="Superhost with great amenities and a fabolous shopping complex nearby" price="$70/night"/>
            </div>
        </div>
    )
}

export default Home
