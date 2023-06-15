export const isValid = (formState) => {
  try {
    if (formState.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw Error('email should be string')
    }

    if (!formState.password.match(/^[a-zA-Z0-9\s ]+$/g)) {
      throw Error('password should be string')
    }

    return true
  } catch (error) {
    return error
  }
}