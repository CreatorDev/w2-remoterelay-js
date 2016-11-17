var creator = require('creator-js-client')('API_KEY', 'API_SECRET');

creator.request({
    steps: ['clients', {Name: 'Creator Remote Relay'}, 'objecttypes', {ObjectTypeID: '3201'}, 'instances', {InstanceID: '0'}]
}, function(clients){
    console.log(clients);
});
