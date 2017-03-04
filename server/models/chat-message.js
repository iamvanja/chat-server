'use strict';

module.exports = function(Chatmessage) {

  Chatmessage.beforeRemote('create', function(context, user, next) {
    context.args.data.created = Date.now();
    context.args.data.clientId = context.req.accessToken.userId;
    next();
  });

  Chatmessage.observe('after save', function(ctx, next) {
    // saved
    if (ctx.instance) {
      // console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
      // find client and include (owner of this message)
      Chatmessage.findById(
        ctx.instance.id, {
          include: { relation: 'client' }
        },
        function(err, message) {
          if (err) {
            next(err);
          }
          // emit message to the client side
          Chatmessage.app.io.emit('message:new', message);
        });
    }
    // updated
    else {
      console.log('Updated %s matching %j',
        ctx.Model.pluralModelName,
        ctx.where);
    }
    next();
  });

};
