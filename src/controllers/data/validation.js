const models = require('../../mongo');
const User = require('../../mongo/schemas/User')

const validationEntityMiddleware = (req, res, next) => {
  if (models[req.params.entity] === undefined) {
    res.status(400).send({ message: "The entity " + req.params.entity + " is not known"});
  } else {
    return next();
  }
}
const validationEntityIdMiddleware = (req, res, next) => {
  if (req.params.id !== undefined && req.params.id.length !== 24) {
    res.status(400).send({ message: "The id should have 24 hex chars"});
  } else {
    return next();
  }
}

const validateUserRole = (req, res, next) => {
  const userRole = req.user.roles;
  console.log(req.user.roles);

  if (userRole ==  'ROLE_ADMIN' ) {
    next ();
    
    

  }
  
  next();
}


// validateUserRole
/*
Si el usuaro que intenta crear un nuevo User con role Admin no es un Admin, error
Si el usuario que intenta crear un nuevo User con role Teacher no es un Admin, error
Si el usuario que intenta crear un nuevo User con role User no es un Admin o un Teacher, error


Si un user hace un POST, PATCH, o DELETE, error solo puede hacer GET


*/

module.exports = {
  validationEntityMiddleware,
  validationEntityIdMiddleware,
  validateUserRole,
  
}
