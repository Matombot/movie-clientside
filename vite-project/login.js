import axios from "axios";

export default function loggin() {
  const URL_BASE = import.meta.env.VITE_SERVER_URL;
  return {
    isOpen: false, username: '', userName: '', Password: '', firstname: '', lastname: '', show_this: true, show_that: false,

    password: '', register: false, login: true, accessUser: false,thismovies:true,
    error: false, info_message: '', moviename: '', movies: [],movie:'',
    init() {

     },
    registerUser() {
      if (this.username !== '' && this.password !== '') {
        axios
          .post(`${URL_BASE}/api/signup`, { username: this.username, password: this.password, firstname: this.firstname, lastname: this.lastname })
          .then(result => result.data)
          .then(() => {
            this.info_message = 'registration is successful',
              this.error = false,
              this.register= false,
              // this.login= true,
              // this.thismovies=true,
              console.log('registration is successful'),
              console.log(this.username, this.password)
          })
      }

      else if (this.username === '' || this.password==='' || this.firstname==='' || this.lastname==='') {
        this.info_message = 'please fill all required filled'
        this.error = true

      } setTimeout(() => {

        this.info_message = '';
        this.error = false;
      }, 3000);
      this.username = ''
      this.password = ''
    },
    loadData() {
      
      axios
        .post(`${URL_BASE}/api/login`, { username: this.userName, password: this.Password })
        .then(r => r.json)
        .then(result => result.data)
        .then(()=>{
          this.register = false
         this.thismovies = true
        })
        .catch(error => console.error(error))
      
    },
    hideLogin() {
      this.login = false
      this.register = true
    },
    hideRegister() {
      this.login = true
      this.register = false
    },
    searchMovie() {
      fetch(`${URL_BASE}/search?movie=${this.moviename}`)
        .then(r => r.json())
        .then(result => this.movies = result.data.results)
        .then(() => { console.log(this.movies) 
          this.login = false
          this.register = false
         })
        .catch(error => console.error(error))
    },

    logout() {
      localStorage.clear()


    },
  }
}
