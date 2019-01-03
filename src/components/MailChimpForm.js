import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { subscribeUser } from '../redux/actions/subscriberActions.js'

class MailChimpForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
    }
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    this.props.subscribeUser(this.state.email)
  }

  render() {
    if (this.props.subscribed) {
      return (
        <p>Thanks for signing up!</p>
      )
    } else {
      return(
        <Form size="mini" inverted>
          <Form.Input label="Email" placeholder="Your email..." name="email" required onChange={this.handleChange} />
          <Form.Button type="submit" size="tiny" fluid onClick={this.handleSubmit}>Sign Up</Form.Button>
        </Form>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    subscribeMessage: state.subscribeMessage,
    subscribed: state.subscribed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subscribeUser: subscriber => {dispatch(subscribeUser(subscriber))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailChimpForm)

// Raw form from MailChimp

// <div id="mc_embed_signup">
//   <form action="https://nativefoundry.us14.list-manage.com/subscribe/post?u=a4ad2b219e591f6d9ce0245fa&amp;id=58b4b33615" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
//       <h2>Subscribe to our mailing list</h2>
//       <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
//       <div class="mc-field-group">
//         <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
//         </label>
//         <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
//       </div>
//       <div id="mce-responses" class="clear">
//         <div class="response" id="mce-error-response" style="display:none"></div>
//         <div class="response" id="mce-success-response" style="display:none"></div>
//       </div>
//       <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a4ad2b219e591f6d9ce0245fa_58b4b33615" tabindex="-1" value=""></div>
//       <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
//   </form>
// </div>
