function workout(input) {

    let days = Number(input[0]);
    let km = Number(input[1]);

    let firstDay = km;

    let totalKm = 0;

    for (let i = 2; i <= days + 1; i++) {
        let currentPercent = Number(input[i]);

        km = km + (km * (currentPercent / 100));
        totalKm += km;
    }

    let total = totalKm + firstDay;

    if (total >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(total - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - total)} more kilometers`);
    }
}


workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"
])