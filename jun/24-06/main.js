console.log('this is main.js')


async function getData() {

    // specify where to get the data from
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')

    console.log('The response is', response.data.meals[0])

    addImage(response.data.meals[0].strMealThumb)
}

async function getDataFetch() {

    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    
        const data = await response.json()
        console.log('response is', data)
        
    } catch (error) {
        console.log('Error:', error.message)

        alert('Error getting data!')
    }

}

function getDataThenCatch() {

    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        console.log('response is', response)

        return response.json()
    })
    .then(data => console.log('data are', data))
    .catch(error => console.log('error:', error))
    
}

getDataThenCatch()

function addImage(src) {
    const img = document.getElementById('image')

    img.src = src
}