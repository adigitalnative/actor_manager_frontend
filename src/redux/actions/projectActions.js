import { baseUrl } from './settings.js'
import { updatedCompany } from './companyActions'
import { updatedDashboard } from './dashboard'


function fetchingProjects() {
  return(dispatch) => {
    fetch(baseUrl() + '/projects',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(projects => {
      dispatch(fetchedProjects(projects))
    })
  }
}

function fetchedProjects(projects) {
  return {type: "FETCHED_PROJECTS", projects}
}

function updateProject(project) {
  return(dispatch) => {
    fetch(baseUrl() + '/projects/' + project.id, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        project: project
      })
    })
    .then(response => response.json())
    .then(companyData => {
      if(!companyData.error) {
        dispatch(updatedCompany(companyData))
      }
    })
  }
}

function updateProjectFromDashboard(project) {
  return(dispatch) => {
    fetch(baseUrl() + '/dashboard/projects/' + project.id, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        project: project
      })
    })
    .then(response => response.json())
    .then(dashboardData => {
      if(!dashboardData.error) {
        dispatch(updatedDashboard(dashboardData))
      }
    })
  }
}

export { fetchingProjects, updateProject, updateProjectFromDashboard }
