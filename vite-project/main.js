import './style.css'
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import loggin from './login';

window.Alpine = Alpine
Alpine.plugin(persist)

Alpine.data('isOpen',loggin );
Alpine.start()

