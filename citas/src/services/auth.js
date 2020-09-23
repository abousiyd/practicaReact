import axios from 'axios'


const Auth = {
    async login(form) {
        try {
            const {data: {token}} = await axios.post('https://skylabcoders.herokuapp.com/api/v2/users/auth', form)
            localStorage.token = token
          } catch (error) {
            console.error(error)
          }
    }, 
    async register(form) {
        try {
            await axios.post('https://skylabcoders.herokuapp.com/api/v2/users', form)
          } catch (error) {
            console.error(error)
          }
    }
}
export default Auth