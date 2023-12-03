window.onload = function() {
    var urls = [
        'https://forms.office.com/e/eVT9DyW6a5',
        'https://forms.office.com/e/m0Buzn0aCS',
        'https://forms.office.com/e/FmshFhqhRR',
        'https://forms.office.com/e/u36ycUWzuV'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
