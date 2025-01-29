import PredictionElement from "../PredictionElement/PredictionElement";

function PredictionList({ predictions }) {


    return (
        <div>
            {predictions.map((prediction, index) => (
                <PredictionElement key={index} {...prediction}/>
            ))}
        </div>
    );
}

export default PredictionList;