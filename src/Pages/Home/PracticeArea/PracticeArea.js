import React from 'react';
import { useNavigate } from 'react-router-dom';

const PracticeArea = ({ practice }) => {
    const { id, img, name } = practice || {}
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded text-center ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary" >Go For Details</button>
                </div>
            </div>
        </div>
    );
};

export default PracticeArea;