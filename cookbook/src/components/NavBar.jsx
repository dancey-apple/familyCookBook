import { useRouter, userRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };

    return (
        <nav>
            <button onClick={goToHome}>Home</button>
        </nav>
    );