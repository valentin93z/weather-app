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
import { imageCustom } from './CurrentWeather';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel 
} from 'react-accessible-accordion';


function Forecast({data}) {

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const currentTime = data.list[0].dt_txt.split(/\D/)[3];
    const for5days = (arr) => arr.filter((item) => item.dt_txt.split(/\D/)[3] === currentTime);

    const windDirection = (deg) => {
        if (deg >= 337.5 || deg < 22.5) {
            return 'North';
        }
        else if(deg >= 22.5 && deg < 67.5) {
            return 'NorthEast'
        }
        else if(deg >= 67.5 && deg < 112.5) {
            return 'East'
        }
        else if(deg >= 112.5 && deg < 175.5) {
            return 'SouthEast'
        }
        else if(deg >= 175.5 && deg < 202.5) {
            return 'South'
        }
        else if(deg >= 202.5 && deg < 247.5) {
            return 'SouthWest'
        }
        else if(deg >= 247.5 && deg < 292.5) {
            return 'West'
        }
        else if(deg >= 292.5 && deg < 337.5) {
            return 'NorthWest'
        }
    }

    // console.log(for5days(data.list).slice(1));

    return (
        <div className="Forecast">
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {for5days(data.list).slice(1).map((item, idx) => {
                    return(
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img className='icon-small' alt='weather' src={imageCustom(item.weather[0].icon)} />
                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='temp'>{Math.round(item.main.temp)}&deg;C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Feels like:</label>
                                    <label>{Math.round(item.main.feels_like)}&deg;C</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>

                                <div className='daily-details-grid-item'>
                                    <label>Wind direction:</label>
                                    <label>{windDirection(item.wind.deg)}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default Forecast;