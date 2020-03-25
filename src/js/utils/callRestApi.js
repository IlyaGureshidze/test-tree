import axios from 'axios';

const callRestApi = (url) => {
    return (
    new Promise((resolve, reject) => (
            axios({
                method: "GET",
                url: url,
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (response.status == 200) {
                    resolve(response)
                }
            })
            .catch(function (error) {
                reject({status: "error" , message: "Error", data: error})
            })
        ))
    )};

export default callRestApi;  
