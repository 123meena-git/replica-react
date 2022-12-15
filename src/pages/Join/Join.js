import React from 'react';
import  Navbar from '../../components/NavbarComponent/Navbar';
import './Join.css';
import Form from '../../components/FormComponent/Form';

function Join() {
  return ( 
    <div className="BannerJoin">
      <Navbar />
      <div className='text-banner-3'>
        <h2>Join the <div className="pink">fun.</div></h2>
    </div>

    <div className="iconAspa1 d-flex justify-content-end"></div>
    <div className="iconAspa1 d-flex justify content:end"></div>

    <div className="form">
    <div className='chart'>
      <Form />
    </div>
</div>
</div>

  );
}

export default Join;
