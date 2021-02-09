import React from 'react'

function PredictedClasses({ classes }) {
    return (
        <div className="classes">
            <h3>Predicted Classes:</h3>
            <ul>
                {classes && classes.map((cls, i) => <li key={i}>{cls.class} ({cls.score.toFixed(2)})</li>)}
            </ul>
        </div>
    )
}

export default PredictedClasses
