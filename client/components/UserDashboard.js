import React from 'react'
import CreateEventForm from './CreateEventForm'
import UpcomingEventCard from './UpcomingEventCard'
import {connect} from 'react-redux'
import {fetchEvents} from '../store/events'

class UserDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false,
      events: []
    }
  }

  componentDidMount() {
    const {userId} = this.props
    const events = this.props.fetchEvents(userId)
    this.setState({events: events})
  }

  handleClick = e => {
    this.setState({isFormOpen: !this.state.isFormOpen})
  }

  render() {
    const {isFormOpen} = this.state
    console.log(this.props)
    return (
      <div className="container">
        <h1 className="is-size-2 my-5">Upcoming Events</h1>
        <div className="columns">
          <div className="column is-one-third">
            <UpcomingEventCard />
          </div>

          <div className="column is-one-third">
            <UpcomingEventCard />
          </div>

          <div className="column is-one-third">
            <UpcomingEventCard />
          </div>
        </div>

        <div>
          <h1 className="is-size-2 my-5">Create a New Event</h1>

          {isFormOpen === false ? (
            <button
              type="button"
              className="button is-info"
              onClick={this.handleClick}
            >
              Get Started
            </button>
          ) : null}
        </div>

        {isFormOpen ? <CreateEventForm /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: userId => dispatch(fetchEvents(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)