import { baseUrl } from './settings.js'
import { updatedAudition } from './auditionActions'


function updatingReport(report) {
  return(dispatch) => {
    fetch(baseUrl() + '/auditions/' + report.audition_id + "/report", {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ report: report })
    })
    .then(response => response.json())
    .then(audition => {
      dispatch(updatedAudition(audition))
    })
  }
}

export { updatingReport }
