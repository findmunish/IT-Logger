const fetchWrapper = async () => {
    try {
        const response = await fetch('/logs');
        return await response.json();
    } catch(error) {
        console.log('Error fetching result')
    }
}

export default fetchWrapper;