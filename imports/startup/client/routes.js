import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/app-body.js';
import '/imports/ui/pages/app-not-found.js';
import '/imports/ui/pages/app-dashboard.js';

FlowRouter.route('/', {
  name: 'App_dashboard',
  action() {
    BlazeLayout.render('App_body', { main: 'App_dashboard' });
  },
});
