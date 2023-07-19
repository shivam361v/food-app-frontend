import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { Link } from 'react-router-dom';
//import Carousal from '../components/Carousal';
//import Carousal from '../components/Carousal'

export default function Home() 
{
  //Create object to manage state of the component
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  //Request to data
  const loadData = async () => {
    
    let response = await fetch("https://foodapp-api-u4lc.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);

  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>

        <div><Navbar/></div>
      
        <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                <div class="carousel-caption d-none d-md-block" style={{zIndex: "10"}}>
                    <div className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>
                
                </div>                

                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?burger " alt="..."  />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pastry" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?barbeque " alt="..." />
                    </div>
                </div>
                <Link className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
           
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Previous</span> */}
                </Link>
                <Link className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Next</span> */}
                </Link>
            </div>

        </div>
      
        <div className='container'>
{/* Create an iteration of content */}
          {
            foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr/>
                  { foodItem !== [] 
                  ?
                   foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                   .map(filterItems=>{
                      return(
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 me-3 mx-3" >
                          <Card foodItem = {filterItems}
                            options={filterItems.options[0]}
                            imgSrc={filterItems.img}
                          ></Card>
                        </div>
                      ) }
                    )
                    
                    
                    : <div>No Data</div>}
                </div>
              )
            }) : <div> ......</div>
          }
        </div>
        <div><Footer/></div>
    </div>
  )
}
