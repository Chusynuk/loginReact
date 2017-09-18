import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();

// function validateInput(data) {
//
//   let errors = {};
//
//   if (Validator.isEmpty(data.firstname)) {
//     errors.firstname = 'This field is required';
//   }
//   if (Validator.isEmpty(data.lastname)) {
//     errors.lastname = 'This field is required';
//   }
//   if (Validator.isEmpty(data.username)) {
//     errors.username = 'This field is required';
//   }
//   if (Validator.isEmpty(data.password)) {
//     errors.password = 'This field is required';
//   }
//   if (Validator.isEmpty(data.email)) {
//     errors.email = 'This field is required';
//   }
//   if (!Validator.isEmail(data.email)) {
//     errors.email = 'Email is invalid';
//   }
//
//   return {errors, isValid: isEmpty(errors)}
// }

router.post('/', (req, res) => {
  const {errors, isValid} = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

});

export default router;
