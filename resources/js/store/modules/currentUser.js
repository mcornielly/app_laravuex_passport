import axios from "axios";

const state = {
    user:{}
};
const getters = {};
const actions = {
    loginUser({}, user){
        axios.post("/api/auth/login",{
            email: user.email,
            password: user.password
        }).then(response => {
            console.log(response.data)
            if(responser.data.access_token){
                localStorage.set(
                    "app_token",
                    response.data.access_token
                )

                window.location.replace("/home")
            }
        }).catch(error => {
            console.log(error.data)
        });
    }
};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}