import axios from 'axios';

// const getProjects = () => axios.get('/projects').then(res => res.projects);

export default {
  getProjects() {
    return axios.get('/projects').then(res => res.projects);
  },
};
