import "./ComingSoon.css";
import { Loader } from '@mantine/core';

export default function ComingSoon() {
    return (
        <div className="coming-soon">
            <p className="coming-soon__text">Coming soon</p>
            <Loader />
        </div>
    )
}
