let profile = [userName = "DavidH", 22, true, 
    {location: "North America"}, 
    ["Coding", "Golfing", "Skiing"]
];

console.log(`${userName}, ${profile[4][1]}`);

profile[1] = 20;
profile[4][3] = "Swimming";

console.log(profile);