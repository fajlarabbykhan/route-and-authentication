import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PracticeArea from '../PracticeArea/PracticeArea';

const PracticeAreas = () => {
    const [practices, setPractices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPractices(data))
    }, [])
    if (practices.length) {
        practices.length = 3
    }
    return (

        <div className="container">
            <h1 className='text-center m-2'>Practice Areas({practices.length})</h1>
            <div className='row  mt-4'>
                {
                    practices.map(practice => <PracticeArea key={practice.id} practice={practice} ></PracticeArea>)
                }

            </div>

            <div className='text-center'><Link to="/practiceareas" className='btn btn-primary '>Load More...</Link></div>
        </div>

    );
};

export default PracticeAreas;