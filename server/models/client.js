'use strict';

module.exports = function(Client) {

  // disable unused remote methods
  Client.disableRemoteMethod('__count__chatMessages');
  Client.disableRemoteMethod('__create__chatMessages');
  Client.disableRemoteMethod('__delete__chatMessages');
  Client.disableRemoteMethod('__destroyById__chatMessages');
  Client.disableRemoteMethod('__findById__chatMessages');
  Client.disableRemoteMethod('__get__chatMessages');
  Client.disableRemoteMethod('__updateById__chatMessages');

  Client.disableRemoteMethod('__count__accessTokens');
  Client.disableRemoteMethod('__create__accessTokens');
  Client.disableRemoteMethod('__delete__accessTokens');
  Client.disableRemoteMethod('__destroyById__accessTokens');
  Client.disableRemoteMethod('__findById__accessTokens');
  Client.disableRemoteMethod('__get__accessTokens');
  Client.disableRemoteMethod('__updateById__accessTokens');

};
