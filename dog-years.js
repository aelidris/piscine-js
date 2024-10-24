function dogYears(planetName, dogAgeInSeconds) {
    const earthYearInSeconds = 31557600; 

    const orbitalPeriods = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    if (!orbitalPeriods.hasOwnProperty(planetName)) {
        return 'Invalid planet name';
    }

    const dogAgeInEarthYears = dogAgeInSeconds / earthYearInSeconds;
    const dogAgeOnPlanet = dogAgeInEarthYears / orbitalPeriods[planetName];

    return parseFloat((dogAgeOnPlanet * 7).toFixed(2));
}