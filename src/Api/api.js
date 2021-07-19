export const getAdvertisement = () => fetch("http://localhost:8000/getAllAdvertisemets").then((fetched) => {
    if (fetched.ok) {
        return fetched.json()
    }
}).catch((err) => {
    console.log(err)
})