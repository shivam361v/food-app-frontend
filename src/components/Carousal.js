import React from 'react';
import { Link } from 'react-router-dom';

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                <div class="carousel-caption d-none d-md-block" style={{zIndex: "10"}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="search"/>
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                
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
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>

        </div>
    )
}
