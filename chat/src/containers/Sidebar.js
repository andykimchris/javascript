import SidebarComponent from '../components/Sidebar'
import { connect } from 'react-redux'

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent)

