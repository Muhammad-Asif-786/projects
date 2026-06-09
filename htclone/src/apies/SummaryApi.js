// export const baseURL = "http://192.168.1.100:5000"; 192.168.1.7
// export const baseURL = "http://192.168.1.7:5000"; 192.168.1.10
export const baseURL = "http://192.168.1.10:5000";



const SummaryApi = {
    register : {
        url : '/api/auth/register',
        method : 'post'
    },
    login : {
        url : '/api/auth/login',
        method : 'post'
    },
    forgotPassword : {
        url : '/api/auth/forgotPassword',
        method : 'post'
    },
    logout : {
        url : '/api/auth/logout',
        method : 'post'
    },
    resetPassword : {
        url : '/api/auth/resetPassword',
        method : 'post'
    },

}


export default SummaryApi