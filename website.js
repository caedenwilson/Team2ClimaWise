var wkdyHvacStartTime;
var wkdyHvacEndTime;
var wkndHvacStartTime;
var wkndHvacEndTime;
var wkdyLightStartTime;
var wkdyLightEndTime;
var wkndLightStartTime;
var wkndLightEndTimee;
var wkdyAplnceStartTime;
var wkdyAplnceEndTime;
var wkndAplnceStartTime;
var wkndAplnceEndTime;
var wkdyWtrHeatStartTime;
var wkdyWtrHeatEndTime;
var wkndWtrHeatStartTime;
var wkndWtrHeatEndTime;

//Function to calculate the charge based on time range and day type

function calculateCost(startTime, endTime, isWeekend, powerRate) {
    //Convert start and end times to integers for comparison
    startHour = parseInt(startTime.split(':')[0]);
    endHour = parseInt(endTime.split(':')[0]);

    var totalCharge = 0;

    for (let hour = startTime; hour <= endTime; hour++) {
        if (isWeekend) {
            var rate = 8;  // 8 cents per hour for weekends
            totalCharge += rate * (endHour - startHour);
        } else {
            if (hour < 14) {
                rate = 8;  // 8 cents per hour before 2 pm
            } else if (hour < 19) {
                rate = 26;  // 26 cents per hour between 2 pm and 7 pm
            } else {
                rate = 8;  // 8 cents per hour after 7 pm
            }
        }
        var energy_consumption = powerRate * rate / 1000;

        totalCharge += energy_consumption;
    }
    // Calculate the total charge based on the rate and time range total_charge = (end_hour - start_hour) * rate

    return totalCharge

}

let button = document.querySelector("#submit-button");
button.addEventListener("click", (e) => {
    e.preventDefault();
    wkdyHvacStartTime = document.querySelector("#wkdy-hvac-start").value;
    wkdyHvacEndTime = document.querySelector("#wkdy-hvac-end").value;
    wkndHvacStartTime = document.querySelector("#wknd-hvac-start").value;
    wkndHvacEndTime = document.querySelector("#wknd-hvac-end").value;
    wkdyLightStartTime = document.querySelector("#wkdy-light-start").value;
    wkdyLightEndTime = document.querySelector("#wkdy-light-end").value;
    wkndLightStartTime = document.querySelector("#wknd-light-start").value;
    wkndLightEndTime = document.querySelector("#wknd-light-end").value;
    wkdyAplnceStartTime = document.querySelector("#wkdy-aplnce-start").value;
    wkdyAplnceEndTime = document.querySelector("#wkdy-aplnce-end").value;
    wkndAplnceStartTime = document.querySelector("#wknd-aplnce-start").value;
    wkndAplnceEndTime = document.querySelector("#wknd-aplnce-end").value;
    wkdyWtrHeatStartTime = document.querySelector("#wkdy-wtrheat-start").value;
    wkdyWtrHeatEndTime = document.querySelector("#wkdy-wtrheat-end").value;
    wkndWtrHeatStartTime = document.querySelector("#wknd-wtrheat-start").value;
    wkndWtrHeatEndTime = document.querySelector("#wknd-wtrheat-end").value;

    // Define power rates for each category (in watts)
    var power_rate_hvac = 3500  // Example power rate for HVAC system in watts
    var power_rate_lighting = 100  // Example power rate for lighting in watts
    var power_rate_appliances = 1500  // Example power rate for appliances in watts
    var power_rate_water_heating = 4500  // Example power rate for water heating in watts

    // Calculate the charges and display the results for both weekends and weekdays
    var energy_hvac_wknd = parseFloat(calculateCost(wkndHvacStartTime, wkndHvacEndTime, true, power_rate_hvac).toFixed(2));
    var energy_hvac_wkdy = parseFloat(calculateCost(wkdyHvacStartTime, wkdyHvacEndTime, false, power_rate_hvac).toFixed(2));

    var energy_lighting_wknd = parseFloat(calculateCost(wkndLightStartTime, wkndLightEndTime, true, power_rate_lighting).toFixed(2));
    var energy_lighting_wkdy = parseFloat(calculateCost(wkdyLightStartTime, wkdyLightEndTime, false, power_rate_lighting).toFixed(2));

    var energy_appliances_wknd = parseFloat(calculateCost(wkndAplnceStartTime, wkndAplnceEndTime, true, power_rate_appliances).toFixed(2));
    var energy_appliances_wkdy = parseFloat(calculateCost(wkdyAplnceStartTime, wkdyAplnceEndTime, false, power_rate_appliances).toFixed(2));

    var energy_water_heating_wknd = parseFloat(calculateCost(wkndWtrHeatStartTime, wkndWtrHeatEndTime, true, power_rate_water_heating).toFixed(2));
    var energy_water_heating_wkdy = parseFloat(calculateCost(wkdyWtrHeatStartTime, wkdyWtrHeatEndTime, false, power_rate_water_heating).toFixed(2));

    // Define electricity cost in cents per kWh
    var cost_per_kwh = 0.26;  // Example cost per kWh

    // Calculate the costs for each category
    var cost_hvac_wknd = energy_hvac_wknd * cost_per_kwh.toFixed(2);
    var cost_hvac_wkdy = energy_hvac_wkdy * cost_per_kwh.toFixed(2);

    var cost_lighting_wknd = energy_lighting_wknd * cost_per_kwh.toFixed(2);
    var cost_lighting_wkdy = energy_lighting_wkdy * cost_per_kwh.toFixed(2);

    var cost_appliances_wknd = energy_appliances_wknd * cost_per_kwh.toFixed(2);
    var cost_appliances_wkdy = energy_appliances_wkdy * cost_per_kwh.toFixed(2);

    var cost_water_heating_wknd = energy_water_heating_wknd * cost_per_kwh.toFixed(2);
    var cost_water_heating_wkdy = energy_water_heating_wkdy * cost_per_kwh.toFixed(2);

    let p = document.getElementById('results');
    p.removeAttribute("hidden");


    //console.log("Total charges:");
    //console.log(`HVAC (Weekend): ${cost_hvac_wknd.toFixed(2)}`);
    //console.log(`HVAC (Weekday): ${cost_hvac_wkdy.toFixed(2)}`);
    document.querySelector("#hvac-dollar-cost").innerHTML = (`The rough cost of your HVAC system's energy usage for one year in USD is $${parseFloat((cost_hvac_wkdy * 260).toFixed(2)) + parseFloat((cost_hvac_wknd * 105).toFixed(2))}`)
    //console.log(`Lighting (Weekend): ${cost_lighting_wknd.toFixed(2)}`);
    //console.log(`Lighting (Weekday): ${cost_lighting_wkdy.toFixed(2)}`);
    document.querySelector("#light-dollar-cost").innerHTML = (`The rough cost of your house lights' energy usage for one year in USD is $${parseFloat((cost_lighting_wkdy * 260).toFixed(2)) + parseFloat((cost_lighting_wknd * 105).toFixed(2))}`)
    //console.log(`Appliances (Weekend): ${cost_appliances_wknd.toFixed(2)}`);
    //console.log(`Appliances (Weekday): ${cost_appliances_wkdy.toFixed(2)}`);
    document.querySelector("#appliance-dollar-cost").innerHTML = (`The rough cost of your appliance's energy usage for one year in USD is $${parseFloat((cost_appliances_wkdy * 260).toFixed(2)) + parseFloat((cost_appliances_wknd * 105).toFixed(2))}`)
    //console.log(`Water Heating (Weekend): ${cost_water_heating_wknd.toFixed(2)}`);
    //console.log(`Water Heating (Weekday): ${cost_water_heating_wkdy.toFixed(2)}`);
    document.querySelector("#water-heater-dollar-cost").innerHTML = (`The rough cost of your water heater's energy usage for one year in USD is $${parseFloat((cost_water_heating_wkdy * 260).toFixed(2)) + parseFloat((cost_water_heating_wknd * 105).toFixed(2))}`)

    // Calculate the total costs for all categories
    var total_cost = cost_hvac_wknd * 105 + cost_lighting_wknd * 105 + cost_appliances_wknd * 105 + cost_water_heating_wknd * 105 + cost_hvac_wkdy * 260 + cost_lighting_wkdy * 260 + cost_appliances_wkdy * 260 + cost_water_heating_wkdy * 260;

    console.log(`Total Cost for All Categories: ${total_cost.toFixed(2)}`);

    // Calculate the total kWh for each category
    var hvac_kwh = (energy_hvac_wknd * 105 + energy_hvac_wkdy * 260);
    var lighting_kwh = (energy_lighting_wknd * 105 + energy_lighting_wkdy * 260);
    var appliances_kwh = (energy_appliances_wknd * 105 + energy_appliances_wkdy * 260);
    var water_heating_kwh = (energy_water_heating_wknd * 105 + energy_water_heating_wkdy * 260);

    //Dollar cost
    document.querySelector("#hvac-kwh-cost").innerHTML = (`The rough cost of your HVAC system's energy usage for one year in kWh is ${hvac_kwh} kWh`);
    document.querySelector("#light-kwh-cost").innerHTML = (`The rough cost of your house lights' energy usage for one year in kWh is ${lighting_kwh} kWh`);
    document.querySelector("#appliance-kwh-cost").innerHTML = (`The rough cost of your appliance's energy usage for one year in kWh is ${appliances_kwh} kWh`);
    document.querySelector("#water-heater-kwh-cost").innerHTML = (`The rough cost of your water heater's energy usage for one year in kWh is ${water_heating_kwh} kWh`);

    //kWh cost
    // console.log(`HVAC kWh: ${hvac_kwh} kWh`);
    // console.log(`Lighting kWh: ${lighting_kwh} kWh`);
    // console.log(`Appliances kWh: ${appliances_kwh} kWh`);
    // console.log(`Water Heating kWh: ${water_heating_kwh.toFixed(2)} kWh`);

    //total cost
    document.querySelector("#total-dollar-cost").innerHTML = (`The rough cost of your home's total energy usage for one year in USD is $${total_cost.toFixed(2)}`)

    var b = hvac_kwh + lighting_kwh + appliances_kwh + water_heating_kwh;

    document.querySelector("#total-kwh-cost").innerHTML = (`The rough cost of your home's total energy usage for one year in kWh is ${b.toFixed(2)} kWh`)

    //b=int(input("enter your current room temp: "))
    //c= int(input("how much would you like to decrease: "))

    //per_decrease = c*2.5
    for (let i = 1; i < 11; i++) {
        kwh_saved = (i * b * 2.5) / 100;
        cost_kwh = 0.26;
        amount_Saved = kwh_saved * cost_kwh;
        if (i === 1) {
            document.querySelector("#one-deg-diff").innerHTML = (`A ${i} degree Fahrenheit decrease in temperature will save you about ${kwh_saved.toFixed(2)} kWh and about $${amount_Saved.toFixed(2)} in one year`);
        } else if (i === 2) {
            document.querySelector("#two-deg-diff").innerHTML = (`A ${i} degree Fahrenheit decrease in temperature will save you about ${kwh_saved.toFixed(2)} kWh and about $${amount_Saved.toFixed(2)} in one year`);
        } else if (i === 5) {
            document.querySelector("#five-deg-diff").innerHTML = (`A ${i} degree Fahrenheit decrease in temperature will save you about ${kwh_saved.toFixed(2)} kWh and about $${amount_Saved.toFixed(2)}in one year`);
        }
    }

    document.getElementById('suggestions-h3').removeAttribute("hidden");
    document.getElementById('suggestions-h4').removeAttribute("hidden");

    var oklahomaAverage = 12938;
    if(b > (oklahomaAverage*1.3)){
        var ol = document.getElementById('high-energy');
        ol.removeAttribute("hidden");
    } else if(b < (oklahomaAverage*0.3)) {
        var ol = document.getElementById('mid-energy');
        ol.removeAttribute("hidden");
    } else {
        var ol = document.getElementById('low-energy');
        ol.removeAttribute("hidden");
    }
    
});