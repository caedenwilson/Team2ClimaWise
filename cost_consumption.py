## This is just a sample code
## use machine learning 

"""
a=int(input("enter your avg electricity consumption:"))
b=int(input("enter your current room temp: "))
c= int(input("how much would you like to decrease: "))

per_decrease = c*2.5
kwh_saved = (a * per_decrease)/100
print("kwh_saved:",kwh_saved)
cost_kwh = 0.26
amount_Saved = kwh_saved * cost_kwh
print("amount saved in $:",amount_Saved) """

# Function to calculate the energy consumption in kilowatt-hours (kWh) based on time range and day type
def calculate_energy_consumption(start_time, end_time, is_weekend, power_rate):
    # Convert start and end times to integers for comparison
    start_hour = int(start_time.split(':')[0])
    end_hour = int(end_time.split(':')[0])

    # Initialize total energy consumption
    total_energy_consumption = 0

    # Iterate through each hour within the time range
    
    for hour in range(start_hour, end_hour): #--
        # Determine the rate based on the day type (weekday or weekend)
        if is_weekend:
            rate = 8  # 8 cents per hour for weekends
        else:
            if hour < 14:
                rate = 8  # 8 cents per hour before 2 pm
            elif hour < 19:
                rate = 26  # 26 cents per hour between 2 pm and 7 pm
            else:
                rate = 8  # 8 cents per hour after 7 pm
        
        # Calculate energy consumption for the current hour in kWh
        energy_consumption = power_rate * rate / 1000  ##-- # Convert from watts to kilowatts
        total_energy_consumption += energy_consumption ##--

    return total_energy_consumption ##--

# Define power rates for each category (in watts)
power_rate_hvac = 3500  # Example power rate for HVAC system in watts ##--
power_rate_lighting = 100  # Example power rate for lighting in watts ##--
power_rate_appliances = 1500  # Example power rate for appliances in watts ##--
power_rate_water_heating = 4500  # Example power rate for water heating in watts ##--

# Input start and end times for both weekends and weekdays for each category
# ... (Input code for all categories)
start_time_hvac_wknd = input("Enter start time for HVAC on weekends (24-hour format, e.g., '14:00'): ")
end_time_hvac_wknd = input("Enter end time for HVAC on weekends (24-hour format, e.g., '19:00'): ")

start_time_hvac_wkdy = input("Enter start time for HVAC on weekdays (24-hour format, e.g., '14:00'): ")
end_time_hvac_wkdy = input("Enter end time for HVAC on weekdays (24-hour format, e.g., '19:00'): ")

start_time_lighting_wknd = input("Enter start time for lighting on weekends (24-hour format, e.g., '14:00'): ")
end_time_lighting_wknd = input("Enter end time for lighting on weekends (24-hour format, e.g., '19:00'): ")

start_time_lighting_wkdy = input("Enter start time for lighting on weekdays (24-hour format, e.g., '14:00'): ")
end_time_lighting_wkdy = input("Enter end time for lighting on weekdays (24-hour format, e.g., '19:00'): ")

start_time_appliances_wknd = input("Enter start time for appliances on weekends (24-hour format, e.g., '14:00'): ")
end_time_appliances_wknd = input("Enter end time for appliances on weekends (24-hour format, e.g., '19:00'): ")

start_time_appliances_wkdy = input("Enter start time for appliances on weekdays (24-hour format, e.g., '14:00'): ")
end_time_appliances_wkdy = input("Enter end time for appliances on weekdays (24-hour format, e.g., '19:00'): ")

start_time_water_heating_wknd = input("Enter start time for water heating on weekends (24-hour format, e.g., '14:00'): ")
end_time_water_heating_wknd = input("Enter end time for water heating on weekends (24-hour format, e.g., '19:00'): ")

start_time_water_heating_wkdy = input("Enter start time for water heating on weekdays (24-hour format, e.g., '14:00'): ")
end_time_water_heating_wkdy = input("Enter end time for water heating on weekdays (24-hour format, e.g., '19:00'): ")

# Calculate the energy consumption for each category
energy_hvac_wknd = calculate_energy_consumption(start_time_hvac_wknd, end_time_hvac_wknd, True, power_rate_hvac) ##--
energy_hvac_wkdy = calculate_energy_consumption(start_time_hvac_wkdy, end_time_hvac_wkdy, False, power_rate_hvac) ##--

energy_lighting_wknd = calculate_energy_consumption(start_time_lighting_wknd, end_time_lighting_wknd, True, power_rate_lighting) ##--
energy_lighting_wkdy = calculate_energy_consumption(start_time_lighting_wkdy, end_time_lighting_wkdy, False, power_rate_lighting) ##--

energy_appliances_wknd = calculate_energy_consumption(start_time_appliances_wknd, end_time_appliances_wknd, True, power_rate_appliances) ##--
energy_appliances_wkdy = calculate_energy_consumption(start_time_appliances_wkdy, end_time_appliances_wkdy, False, power_rate_appliances) ##--

energy_water_heating_wknd = calculate_energy_consumption(start_time_water_heating_wknd, end_time_water_heating_wknd, True, power_rate_water_heating) ##--
energy_water_heating_wkdy = calculate_energy_consumption(start_time_water_heating_wkdy, end_time_water_heating_wkdy, False, power_rate_water_heating) ##--




# Define electricity cost in cents per kWh
cost_per_kwh = 0.26  # Example cost per kWh

# Calculate the costs for each category
cost_hvac_wknd = energy_hvac_wknd * cost_per_kwh ##--
cost_hvac_wkdy = energy_hvac_wkdy * cost_per_kwh ##--

cost_lighting_wknd = energy_lighting_wknd * cost_per_kwh ##--
cost_lighting_wkdy = energy_lighting_wkdy * cost_per_kwh ##--

cost_appliances_wknd = energy_appliances_wknd * cost_per_kwh ##--
cost_appliances_wkdy = energy_appliances_wkdy * cost_per_kwh ##--

cost_water_heating_wknd = energy_water_heating_wknd * cost_per_kwh ##--
cost_water_heating_wkdy = energy_water_heating_wkdy * cost_per_kwh ##--

# Display the costs for each category
print("Total costs:")
print(f"HVAC (Weekend): ${cost_hvac_wknd:.2f}")
print(f"HVAC (Weekday): ${cost_hvac_wkdy:.2f}")
print(f"Lighting (Weekend): ${cost_lighting_wknd:.2f}")
print(f"Lighting (Weekday): ${cost_lighting_wkdy:.2f}")
print(f"Appliances (Weekend): ${cost_appliances_wknd:.2f}")
print(f"Appliances (Weekday): ${cost_appliances_wkdy:.2f}")
print(f"Water Heating (Weekend): ${cost_water_heating_wknd:.2f}")
print(f"Water Heating (Weekday): ${cost_water_heating_wkdy:.2f}")



# Calculate the total costs for all categories
total_cost = cost_hvac_wknd + cost_lighting_wknd + cost_appliances_wknd + cost_water_heating_wknd + cost_hvac_wkdy + cost_lighting_wkdy + cost_appliances_wkdy + cost_water_heating_wkdy ##--

print(f"Total Cost for All Categories: ${total_cost:.2f}")

# Calculate the total kWh for each category
hvac_kwh = (energy_hvac_wknd + energy_hvac_wkdy) ##--
lighting_kwh = (energy_lighting_wknd + energy_lighting_wkdy) ##--
appliances_kwh = (energy_appliances_wknd + energy_appliances_wkdy) ##-- 
water_heating_kwh = (energy_water_heating_wknd + energy_water_heating_wkdy) ##-- 

print(f"HVAC kWh: {hvac_kwh:.2f} kWh")
print(f"Lighting kWh: {lighting_kwh:.2f} kWh")
print(f"Appliances kWh: {appliances_kwh:.2f} kWh")
print(f"Water Heating kWh: {water_heating_kwh:.2f} kWh")

b=hvac_kwh + lighting_kwh + appliances_kwh + water_heating_kwh ##--
##b=int(input("enter your current room temp: "))
##c= int(input("how much would you like to decrease: "))

##per_decrease = c*2.5
for i in range(1, 11):
    kwh_saved = (b * i* 2.5)/100
    print(i,"F","saved in KWH:",kwh_saved)
    cost_kwh = 0.26
    amount_Saved = kwh_saved * cost_kwh
    print("amount saved in $:",amount_Saved) 



