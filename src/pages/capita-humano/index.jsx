import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/Index';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
        </div>
    );
}

export default Index;