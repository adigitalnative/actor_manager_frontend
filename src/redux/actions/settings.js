function baseUrl() {
  // Set to the main API URL (endpoints are added where needed)

  // return 'http://localhost:3001/api/v1' //Localhost version
  return 'https://nf-actio-backend.herokuapp.com/api/v1' // Deployed Version
}

function urlPrefix() {
  // Set this to http:// or https:// to match encryption status of frontend
  // Note that an HTTPS site cannot display HTTP sites inside an iFrame

  return 'https://'
}

function statesOptions() {
  return (
    [
      { key: 'AL', text: "AL", value: 'AL'},
      { key: 'AK', text: "AK", value: 'AK'},
      { key: 'AZ', text: "AZ", value: 'AZ'},
      { key: 'AR', text: "AR", value: 'AR'},
      { key: 'CA', text: "CA", value: 'CA'},
      { key: 'CO', text: "CO", value: 'CO'},
      { key: 'CT', text: "CT", value: 'CT'},
      { key: 'DE', text: "DE", value: 'DE'},
      { key: 'FL', text: "FL", value: 'FL'},
      { key: 'GA', text: "GA", value: 'GA'},
      { key: 'HI', text: "HI", value: 'HI'},
      { key: 'ID', text: "ID", value: 'ID'},
      { key: 'IL', text: "IL", value: 'IL'},
      { key: 'IN', text: "IN", value: 'IN'},
      { key: 'IA', text: "IA", value: 'IA'},
      { key: 'KS', text: "KS", value: 'KS'},
      { key: 'KY', text: "KY", value: 'KY'},
      { key: 'LA', text: "LA", value: 'LA'},
      { key: 'ME', text: "ME", value: 'ME'},
      { key: 'DC', text: "DC", value: 'DC'},
      { key: 'MD', text: "MD", value: 'MD'},
      { key: 'MA', text: "MA", value: 'MA'},
      { key: 'MI', text: "MI", value: 'MI'},
      { key: 'MN', text: "MN", value: 'MN'},
      { key: 'MS', text: "MS", value: 'MS'},
      { key: 'MO', text: "MO", value: 'MO'},
      { key: 'MT', text: "MT", value: 'MT'},
      { key: 'NE', text: "NE", value: 'NE'},
      { key: 'NV', text: "NV", value: 'NV'},
      { key: 'NH', text: "NH", value: 'NH'},
      { key: 'NJ', text: "NJ", value: 'NJ'},
      { key: 'NM', text: "NM", value: 'NM'},
      { key: 'NY', text: "NY", value: 'NY'},
      { key: 'NC', text: "NC", value: 'NC'},
      { key: 'ND', text: "ND", value: 'ND'},
      { key: 'OH', text: "OH", value: 'OH'},
      { key: 'OK', text: "OK", value: 'OK'},
      { key: 'OR', text: "OR", value: 'OR'},
      { key: 'PA', text: "PA", value: 'PA'},
      { key: 'RI', text: "RI", value: 'RI'},
      { key: 'SC', text: "SC", value: 'SC'},
      { key: 'SD', text: "SD", value: 'SD'},
      { key: 'TN', text: "TN", value: 'TN'},
      { key: 'TX', text: "TX", value: 'TX'},
      { key: 'UT', text: "UT", value: 'UT'},
      { key: 'VT', text: "VT", value: 'VT'},
      { key: 'VA', text: "VA", value: 'VA'},
      { key: 'WA', text: "WA", value: 'WA'},
      { key: 'WV', text: "WV", value: 'WV'},
      { key: 'WI', text: "WI", value: 'WI'},
      { key: 'WY', text: "WY", value: 'WY'}
    ]
  )
}

export { baseUrl, statesOptions, urlPrefix }
