import { Accordion } from 'react-accessible-accordion';

function Forecast({data}) {
    return (
        <div className="Forecast">
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>

            </Accordion>
        </div>
    )
}

export default Forecast;