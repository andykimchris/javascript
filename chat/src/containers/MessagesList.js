import MessagesListComponent  from '../components/MessagesList'
import {connect} from 'react-redux'

export const MessagesList = connect(state => ({
        messages:state.messages })
, {})(MessagesListComponent)
