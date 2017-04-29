'use strict'

module.exports = {
  description: 'HTTP Response when the resource has been deleted.\n' +
    'More info: http://jsonapi.org/format/#crud-deleting-responses-200',
  headers: {
    'Content-Type': {
      description: 'JSON-API Content Type of HTTP Request ' +
        '(application/vnd.api+json)',
      example: 'application/vnd.api+json'
    }
  }
}
