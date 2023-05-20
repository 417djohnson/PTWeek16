import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {
    render() {
        return (
          <>
          <div className='jumbotron'>
                <div className='container'>
                  <h1>Life Essentials</h1>
                  <p className="statement">Therapeutic Massage & Wellness Center</p>
                </div>
          </div>
          <div className='container col-md-8 mt-2 mb-5'>
            <div className='card Home'>
                <div className='card-header'>
                  <h2>About Us</h2>
                </div>
                <div className='card-body'>
                  <p className="Desc">Award winning, Life Essentials, located in Springfield, Missouri, has served guests in southwest Missouri, Branson, and surrounding communities since 1995. We are focused on providing our guests with the ultimate therapeutic experience with friendly, knowledgeable Massage Therapists who are dedicated to promoting your well-being. Locally owned and operated by the Johnson family, Life Essentials is part of the Johnson Pharmacy family of companies.</p>
                  <p className="Desc">The classy and luxurious atmosphere is a key element loyal customers profess to love. You will be welcomed with perfectly dimmed lights, soothing music, a calming aroma, a complimentary beverage and the warmth of a therapeutic wrap draping your shoulders.  Do you like a quiet place to center yourself before a session? We offer a semi-private retreat room you can decompress in, just request it when you book your service.</p>
                  <p className="Desc">This is the ultimate massage experience. Sit back, relax, and wait for your expert massage therapist to soothe away those aches and pains.</p>
                </div>
            </div>
          </div>
        </>
        
        );
    }
} 