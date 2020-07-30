import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Notification } from "react-bulma-components"

const Alert = ({alert}) => {
    return (
        <div className="alert">
            <Notification color="danger">{alert}</Notification>
        </div>
    )
}

export default Alert