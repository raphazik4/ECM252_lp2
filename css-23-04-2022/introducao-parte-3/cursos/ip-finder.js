const axios = require('axios')

const iplist = []
let listindex = 0
let falseIps = 0

for(let i = 0; i < 256; i++){
    axios.get(`http://10.33.109.${i}:5500/`).then((response) => {
        if (response.status === 200){
            iplist[listindex] = i
            listindex++
            console.log(`http://10.33.109.${i}:5500/`)
        }
    }).catch((error) => {
        falseIps++
    })
}

