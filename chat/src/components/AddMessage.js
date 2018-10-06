import PropTypes from 'prop-types';
import React from 'react'

const AddMessage = props =>  {
    let input;

    return (
        <section id="new-messages">
            <input onKeyPress={(e) => {
                if(e.key === 'Enter') {
                    props.dispatch(input.value, 'Me')
                    input.value = ''
                }
            }}
            type="text"
            ref={(node) => {
                input = node
            } }
            />
        </section>
    )
}

AddMessage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage
