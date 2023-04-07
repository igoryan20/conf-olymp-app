import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            auth: false,
            user: null,
            role: null,
            isLoaded: false
        }
    },
    actions: {
        async getUser() {
            axios.get('/api/user')
                .then((response) => {
                    this.auth = true
                    this.user = response.data.data
                    this.role = response.data.role
                    console.log(response)
                })
                .catch((error) => {
                    this.auth = false
                    this.user = null
                    this.role = null
                    console.log(error)
                });
        }
    }
})
