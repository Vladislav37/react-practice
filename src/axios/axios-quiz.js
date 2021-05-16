import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-practice-85360-default-rtdb.firebaseio.com'
})