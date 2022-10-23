function courierExress(input) {
    let kgPratka = Number(input[0]);
    let type = input[1];
    let razstorqnieKm = Number(input[2]);
    
    let price = 0;
    let nadcenkaKg = 0
    let nadcenkaKm = 0
    let obshtaNadcenka = 0

    if (type == "standard") {
        if (kgPratka < 1)  {
            price = razstorqnieKm * 0.03
        } else if (kgPratka >= 1 && kgPratka < 10) {
            price = razstorqnieKm * 0.05
        } else if (kgPratka >= 10 && kgPratka < 40) {
            price = razstorqnieKm * 0.10
        } else if (kgPratka >= 40 && kgPratka < 90) {
            price = razstorqnieKm * 0.15
        } else if (kgPratka >= 90 && kgPratka < 150) {
            price = razstorqnieKm * 0.20
        }
    } else if (type = "express") {
        if (kgPratka < 1) {
            price = razstorqnieKm * 0.03
            nadcenkaKg = 0.8 * 0.03;
            nadcenkaKm = kgPratka * nadcenkaKg
            obshtaNadcenka = razstorqnieKm * nadcenkaKm
            price = price + obshtaNadcenka
        } else if (kgPratka >= 1 && kgPratka < 10) {
            price = razstorqnieKm * 0.05
            nadcenkaKg = 0.4 * 0.05;
            nadcenkaKm = kgPratka * nadcenkaKg
            obshtaNadcenka = razstorqnieKm * nadcenkaKm
            price = price + obshtaNadcenka
        } else if (kgPratka >= 10 && kgPratka < 40) {
            price = razstorqnieKm * 0.10
            nadcenkaKg = 0.05 * 0.10;
            nadcenkaKm = kgPratka * nadcenkaKg
            obshtaNadcenka = razstorqnieKm * nadcenkaKm
            price = price + obshtaNadcenka
        } else if (kgPratka >= 40 && kgPratka < 90) {
            price = razstorqnieKm * 0.15
            nadcenkaKg = 0.02 * 0.15;
            nadcenkaKm = kgPratka * nadcenkaKg
            obshtaNadcenka = razstorqnieKm * nadcenkaKm
            price = price + obshtaNadcenka
        } else if (kgPratka >= 90 && kgPratka < 150) {
            price = razstorqnieKm * 0.20
            nadcenkaKg = 0.01 * 0.20;
            nadcenkaKm = kgPratka * nadcenkaKg
            obshtaNadcenka = razstorqnieKm * nadcenkaKm
            price = price + obshtaNadcenka
        }
    }
    console.log(`The delivery of your shipment with weight of ${kgPratka.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
}
courierExress([20,"standard",349]);