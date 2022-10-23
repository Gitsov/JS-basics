function footballKit(input) {

    let shirtPrice = Number(input[0]);
    let totalSum = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let sockPrice = shortsPrice * 0.20;
    let shooesPrice = 2 * (shirtPrice + shortsPrice);
    let totalPrice = (shirtPrice + shortsPrice + sockPrice + shooesPrice) * 0.85;

    if (totalPrice >= totalSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        let diff = totalSum - totalPrice;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }
}

footballKit(["25",
    "100"
])