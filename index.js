const gritty = require('gritty')

const app = gritty({
  shell: 'bash',
  cwd: process.env.HOME,
  user: process.env.USER
})

app.listen(process.env.PORT, () => {
  console.log(`Gritty is running on port ${process.env.PORT}`)
})
