const axios = require("axios");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const userId = response.data.map((user) => user.id);
        return userId;
    } catch (e) {
        console.log(e);
    }
};

module.exports = getData;
