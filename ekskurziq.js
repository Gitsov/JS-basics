function excursion(input) {
    let persons = Number(input[0]);
    let nights = Number(input[1]);
    let mapCount = Number(input[2]);
    let ticketCount = Number(input[3]);

    let nightPrice = nights * 20;
    let mapPrice = mapCount * 1.60;
    let ticketPrice = ticketCount * 6;
    let sum = nightPrice + mapPrice + ticketPrice;
    let groupTotal = persons * sum;
    let sumWithNon = groupTotal * 1.25;

    console.log(sumWithNon.toFixed(2));
}
excursion(["20",
    "14",
    "30",
    "6"
])