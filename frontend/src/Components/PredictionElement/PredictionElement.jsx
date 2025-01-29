import './PredictionElement.css';

function PredictionElement({ home_team, away_team, home_win_prob, draw_prob, away_win_prob }) {
    return (
        <div className="prediction-container">
            <div className="team home-team">{home_team}</div>
            <div className="versus">vs</div>
            <div className="team away-team">{away_team}</div>
            <div className="probability">{Math.round(100*home_win_prob)}% Home Win</div>
            <div className="probability">{Math.round(100*draw_prob)}% Draw</div>
            <div className="probability">{Math.round(100*away_win_prob)}% Away Win</div>
        </div>
    )
}

export default PredictionElement;