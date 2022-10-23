function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    let userInput = input[index];
    let revenue = 0;
    index++;
    while (userInput != "closed") {
        let service = input[index];
        index++;
        let servicetype = input[index];
        index++;
        if (revenue >= target) { break;}
        if (service == "haircut") {
            if (servicetype == "mens") {
                revenue += 15
            } else if (servicetype == "ladies") {
                revenue += 20
            } else {
                revenue += 10
            }
        } else if (service == "color") {
            if (servicetype == "touch up") {
                revenue += 20
            } else {
                revenue += 30
            }
        }
        userInput = input[index];
    }
    if (revenue >= target) {
        console.log(`You have reached your target for the day!`);
    } else {
        let needed = target - revenue;
        console.log(`Target not reached! You need ${needed}lv. more.`)
    }
    console.log(`Earned money: ${revenue}lv.`)
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);