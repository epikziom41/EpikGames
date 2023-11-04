// Znajdź przycisk do gry Happy Towers
const happyTowersButton = document.querySelector('#games a[href="https://epikziom41.github.io/Happy-Towers/"]');

// Dodaj obsługę kliknięcia
happyTowersButton.addEventListener('click', function(event) {
    event.preventDefault(); // Zapobiegaj domyślnej akcji przekierowania

    // Przenieś na stronę Happy Towers
    window.location.href = "https://epikziom41.github.io/Happy-Towers/";
});
