import './style.scss';
import {OrbitProgress} from 'react-loading-indicators'

export default function Loading() {
    return (
        <div className="loading-component">
            <OrbitProgress color="#008080" size="medium" text="" textColor="" />
            Loading...
        </div>)
}