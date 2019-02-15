'use strict';

var routes = require('next-routes')();

routes
//  ('url', 'location of file to display on url')
.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNJLEFBREo7Q0FFSyxBQUZMLElBRVMsQUFGVCxrQkFFMkIsQUFGM0Isa0JBR0ssQUFITCxJQUdTLEFBSFQsdUJBR2dDLEFBSGhDLG1CQUlLLEFBSkwsSUFJUyxBQUpULGdDQUl5QyxBQUp6Qyw2QkFLSyxBQUxMLElBS1MsQUFMVCxvQ0FLNkMsQUFMN0M7O0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbmNpZW50ZXZpbC9kS2ljayJ9