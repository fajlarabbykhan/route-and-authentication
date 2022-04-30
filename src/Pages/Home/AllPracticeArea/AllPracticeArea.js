import React, { useEffect, useState } from 'react';
import PracticeArea from '../PracticeArea/PracticeArea';
const AllPracticeArea = () => {
    const [practices, setPractices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPractices(data))
    }, [])
    return (
        <div className='container'>
            <div className='row  mt-4'>
                {
                    practices.map(practice => <PracticeArea key={practice.id} practice={practice} ></PracticeArea>)
                }
            </div>
        </div>

    );
};

export default AllPracticeArea;