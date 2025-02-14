// Funktsioon koeravideo või pildi toomiseks
async function fetchDogMedia() {
    try {
        let response = await fetch('https://random.dog/woof.json');
        let data = await response.json();
        let mediaUrl = data.url;

        // Kui URL viitab video formaadile, siis kuvame video
        if (mediaUrl.endsWith('.mp4')) {
            // Eemaldame pildi konteineri, kui see eksisteerib
            document.getElementById('image-container').innerHTML = '';

            document.getElementById('video-container').style.display = 'block';
            document.getElementById('video-source').src = mediaUrl;
            document.getElementById('dog-video').load(); // Laadime video uue URL-iga
        } else if (mediaUrl.endsWith('.jpg')) {
            // Eemaldame video konteineri, kui see eksisteerib
            document.getElementById('video-container').style.display = 'none';

            let imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = `<img src="${mediaUrl}" alt="Koera pilt" width="600">`;
        } else {
            fetchDogMedia(); // Kui ei ole video ega pilt, proovime uuesti
        }
    } catch (error) {
        console.error('Viga media laadimisel:', error);
    }
}

// Kutsume funktsiooni lehe laadimise ajal
window.onload = fetchDogMedia;
