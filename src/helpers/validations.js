export const Required = value => (value ? undefined : 'Required')
export const MaxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const MaxLength15 = MaxLength(15)
export const MinLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const MinLength2 = MinLength(2)
export const Number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const MinValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const MinValue18 = MinValue(18)
export const Email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
export const TooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
export const Aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
export const AlphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const PhoneNumber = value =>
  value && !/^(0|[0-9][0-9]{11})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
export const LogoMax100kb = value =>
// console.log(value[0].size);
value && value[0] && value[0].size <= 5000 ? 'Your logo size is '+value[0].size+' please size Max. 100kb': undefined
