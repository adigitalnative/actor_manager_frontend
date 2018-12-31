import React, { Component } from 'react'
import { Container, Segment, Table } from 'semantic-ui-react'
import { fetchingCompanies } from '../redux/actions/companyActions'
import { fetchingProjects } from '../redux/actions/projectActions'
import { connect } from 'react-redux'
import CompanyListing from '../components/CompanyListing'


class CompaniesProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies()
  }

  render() {
    return(
      <Container>
        <Segment>
          <Table celled>
            {this.props.companies.map(company => <CompanyListing company={company} key={company.id} />)}
          </Table>
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanies: () => {dispatch(fetchingCompanies())},
    fetchProjects: () => {dispatch(fetchingProjects())}
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesProjectsContainer)
