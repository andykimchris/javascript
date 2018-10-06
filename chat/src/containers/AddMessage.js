import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)