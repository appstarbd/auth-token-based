/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      name: 'register_route',
      type: 'input',
      required: true,
      message: 'Route for user registration',
      default: '/auth/register',
    },
    {
      name: 'verification_route',
      type: 'input',
      required: true,
      message: 'Route for user verification',
      default: '/auth/verify',
    },
    {
      name: 'login_route',
      type: 'input',
      required: true,
      message: 'Route for user login',
      default: '/auth/login',
    },
    {
      name: 'password_forgot_route',
      type: 'input',
      required: true,
      message: 'Route for forgotten password request',
      default: '/auth/password/forgot',
    },
    {
      name: 'password_reset_route',
      type: 'input',
      required: true,
      message: 'Route to reset password',
      default: '/auth/password/reset',
    },
    {
      name: 'fetch_user_route',
      type: 'input',
      required: true,
      message: 'Route to fetch authenticated user',
      default: '/auth/user',
    },
    {
      name: 'superuser_functionality',
      type: 'confirm',
      message: 'Add superuser functionality (user management)?',
      default: true
    }
  ]
}
