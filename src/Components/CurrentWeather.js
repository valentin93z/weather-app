import icon01d from '../icons/01d.png';
import icon01n from '../icons/01n.png';
import icon02d from '../icons/02d.png';
import icon02n from '../icons/02n.png';
import icon03d from '../icons/03d.png';
import icon03n from '../icons/03n.png';
import icon04d from '../icons/04d.png';
import icon04n from '../icons/04n.png';
import icon09d from '../icons/09d.png';
import icon09n from '../icons/09n.png';
import icon10d from '../icons/10d.png';
import icon10n from '../icons/10n.png';
import icon11d from '../icons/11d.png';
import icon11n from '../icons/11n.png';
import icon13d from '../icons/13d.png';
import icon13n from '../icons/13n.png';
import icon50d from '../icons/50d.png';
import icon50n from '../icons/50n.png';
import iconunknown from '../icons/unknown.png';


export const imageCustom = (icon) => {
    switch (icon) {
        case '01d':
            return icon01d;
        case '01n':
            return icon01n;
        case '02d':
            return icon02d;
        case '02n':
            return icon02n;
        case '03d':
            return icon03d;
        case '03n':
            return icon03n;
        case '04d':
            return icon04d;
        case '04n':
            return icon04n;
        case '09d':
            return icon09d;
        case '09n':
            return icon09n;
        case '10d':
            return icon10d;
        case '10n':
            return icon10n;
        case '11d':
            return icon11d;
        case '11n':
            return icon11n;
        case '13d':
            return icon13d;
        case '13n':
            return icon13n;
        case '50d':
            return icon50d;
        case '50n':
            return icon50n;
        case 'unknown':
            return iconunknown;
        default:
            console.log(icon, 'icon not found');
    }
}

function CurrentWeather({data}) {
    return (
        <div className='CurrentWeather'>
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" alt="weather-icon" src={imageCustom(data.weather[0].icon)} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}&deg;C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}&deg;C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;