import React, {Component} from 'react'
import { Container, Segment, Header, Card, Grid } from 'semantic-ui-react'
import BookItem from '../components/BookItem'
import NewBookItemForm from '../components/NewBookItemForm'
import { fetchingBook } from '../redux/actions.js'
import { connect } from 'react-redux'

class BookContainer extends Component {
  componentDidMount() {
    this.props.fetchingBook()
  }

  render() {
    return (
      <Container>
        <Segment>
          <Grid stackable>
            <Grid.Column width={12}>
              <Header as="h2">Your Audition Book</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
              <NewBookItemForm />
            </Grid.Column>
          </Grid>
          <Card.Group>
            {this.props.book.map(piece => <BookItem piece={piece} key={piece.id} />)}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingBook: () => {dispatch(fetchingBook())},
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
