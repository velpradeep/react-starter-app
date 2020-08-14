import axios from "axios";

export const logIn = (data) => {
    return axios({
            method: 'post',
            url: '/login',
            data: data
        }).then(response => {
            return { authenticated: true }
        });
};
