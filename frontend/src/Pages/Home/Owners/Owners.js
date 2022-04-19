import React from 'react';
import css from './Owners.css'
import owner from '../../../images/owner.jpg'


const Owners = () => {

    return (
        <div className='owner-section '>

            <div className='owner-container ' >

                {/* owner-1 */}

                <div className='owner '>
                    <div className='owner-img'>
                        <img src={owner} className='img-fluid' alt="" />
                    </div>
                    <div className='owner-text'>
                        <h4>hello iam owner</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at.</p>
                    </div>
                </div>

                {/* owner-2  */}

                <div className='owner '>
                    <div className='owner-img '>
                        <img src={owner} className="img-fluid" alt="" />
                    </div>
                    <div className='owner-text overflow-hidden'>
                        <h4>hello iam owner</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio molestias vitae
                            Lorem ipsum dolor sit  </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Owners;