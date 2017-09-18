import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {

  let errors = {};
  var userRules = /^[a-z0-9._]+$/;

  if (Validator.isEmpty(data.firstname) || Validator.isInt(data.firstname)) {
    errors.firstname = 'This field is required';
  }
  if (Validator.isEmpty(data.lastname) || Validator.isInt(data.lastname)) {
    errors.lastname = 'This field is required';
  }
  if (Validator.isEmpty(data.username) || (userRules.test(data.username) == false)) {
    errors.username = 'This field is required';
  }
  if (Validator.isEmpty(data.password) || data.password.length < 8) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'This field is invalid';
  }

  return {errors, isValid: isEmpty(errors)}
}
