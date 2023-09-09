a=int(input("enter your avg electricity consumption:"))
b=int(input("enter your current room temp: "))
c= int(input("how much would you like to decrease: "))

per_decrease = c*2.5
kwh_saved = (a * per_decrease)/100
print("kwh_saved:",kwh_saved)
cost_kwh = 0.26
amount_Saved = kwh_saved * cost_kwh
print("amount saved in $:",amount_Saved) 