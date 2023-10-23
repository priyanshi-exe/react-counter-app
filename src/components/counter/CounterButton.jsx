import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    function incrementCounterFunction() {
        incrementMethod(by)
    }
    
    function decrementCounterFunction() { 
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <button className="counterButton" 
                    onClick={incrementCounterFunction}
            >+{by}</button>

            <button className="counterButton" 
                    onClick={decrementCounterFunction}
            >-{by}</button>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}


CounterButton.defaultProps = {
    by: 1
}