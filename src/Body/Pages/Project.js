import React from 'react'
import "./Project.css"
import Img from "../../photos/carpool.png"

export default function Project() {
  return (
    <div id="Project">
        <div id="Project-head">
            <div id="title">Projects</div>
        </div>
        <div id="Project-body">
            <div id='Project-body-left' className="box">
                <img src={Img}></img>
            </div>
            <div id='Project-body-right' className="box">
                <div id="side-heading">Carpooling </div>
                <p>
                Created a comprehensive full-stack carpooling website aimed at connecting individuals to facilitate ride-sharing, thereby rProjectcing travel costs. Leveraging a technology stack that includes Python Flask and MongoDB, I successfully designed and implemented this platform to offer a seamless and user-friendly experience. My role encompassed the entire development lifecycle, from conceptualization and database design to front-end development and back-end functionalities.
                </p>
            </div>
        </div>
    </div>
  )
}
