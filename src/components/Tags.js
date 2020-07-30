import React from "react"
import {v4 as uuidv4} from "uuid"

const Tags = ({ healthLabels }) => {
    return healthLabels.map(healthLabel => {
        return (
            <ul key={uuidv4()} className="tags">
                <li className="tag">-{healthLabel['']}</li>
            </ul>
        );
    });
};

export default Tags;