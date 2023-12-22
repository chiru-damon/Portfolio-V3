import React from 'react'
import './Certs.css'
import python from "../../certs/python.jpg"
import linux from "../../certs/linux.png"
import net from "../../certs/networking.png"

export default function Certs() {
  return (
    <div id='Certs'>
        <div id='title'>
            Cerifications
        </div>
        <div id='Certs-body'>
            <div id='cert'>
                <img src={python} alt="Python for Data Science"></img>
                <p>Python for DataScience</p>
            </div>
            <div id='cert'>
                <img src={linux} alt="Linux"></img>
                <p>NDG Network Essentials</p>
            </div>
            <div id='cert'>
                <img src={net} alt="Networking Basics"></img>
                <p>Juniper Networks Networking Virtual Internship</p>
            </div>
        </div>
    </div>
  )
}
