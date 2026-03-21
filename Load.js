// Fly Pakistan GeoFS Main Script
// Loads selected Fly Pakistan aircraft into GeoFS

(function() {
    // Aircraft definitions
    const flyPakistanPlanes = [
        {
            name: "Boeing 777-300ER",
            path: "https://raw.githubusercontent.com/AirplanesAviation2361/Fly-Pakistan-/main/777-300ER/"
        },
        {
            name: "Airbus A320neo",
            path: "https://raw.githubusercontent.com/AirplanesAviation2361/Fly-Pakistan-/main/A320neo/"
        },
        {
            name: "Boeing 787-10",
            path: "https://raw.githubusercontent.com/AirplanesAviation2361/Fly-Pakistan-/main/787-10/"
        }
    ];

    // Load each aircraft into GeoFS
    flyPakistanPlanes.forEach(plane => {
        geofs.aircraftLoader.loadAircraftFromPath(plane.path)
            .then(() => console.log(`Loaded ${plane.name}`))
            .catch(err => console.error(`Error loading ${plane.name}:`, err));
    });

    console.log("Fly Pakistan script fully loaded!");
})();
