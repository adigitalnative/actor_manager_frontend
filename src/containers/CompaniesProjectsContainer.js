import React, { Component } from 'react'
import { Container, Segment, Table, Header, Divider } from 'semantic-ui-react'
import { fetchingCompanies } from '../redux/actions/companyActions'
import { fetchingProjects } from '../redux/actions/projectActions'
import { fetchingResultOptions } from '../redux/actions/resultActions'
import { connect } from 'react-redux'
import CompanyListing from '../components/CompanyListing'


class CompaniesProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies()
    this.props.fetchResultOptions()
  }

  render() {
    return(
      <Container>
        <Segment>
          <Header as='h2' textAlign="centered">Companies & Projects</Header>
          <Divider />
          <Table celled>
            {this.props.companies.map(company => <CompanyListing company={company} key={company.id} resultOptions={this.props.resultOptions} />)}
          </Table>
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanies: () => {dispatch(fetchingCompanies())},
    fetchProjects: () => {dispatch(fetchingProjects())},
    fetchResultOptions: () => {dispatch(fetchingResultOptions())},
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    projects: state.projects,
    resultOptions: state.resultOptions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesProjectsContainer)
