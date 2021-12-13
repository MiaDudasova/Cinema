import json
from difflib import get_close_matches

def print_program(dictionary):
    for key , value in dictionary.items():
        yield key
        if isinstance(value, dict):
            for k in print_program(value):
                yield k

def listToString(best_match): 
    best_match_str = "" 
    for ele in best_match: 
        best_match_str += ele  
    return best_match_str


with open('program.json') as json_file:
    filmy = json.load(json_file)

best_match = ["BRATISLAVA", "KOSICE","BEE MOVIE","SHREK 2","THE MATRIX"]

"""
filmy = {
    "BRATISLAVA":{
        "BEE MOVIE": {"12:10": 80, "14:30": 80, "17:50": 80},
        "SHREK 2": {"15:40": 80, "18:55": 80, "21:15": 80},
        "THE MATRIX": {"17:50": 80, "19:20": 80, "22:35": 80}
        },
    "KOSICE":{
        "SHREK 2": {"15:40": 80, "18:55": 80, "21:15": 80},
        "THE MATRIX": {"17:50": 80, "19:20": 80, "22:35": 80}
        }
}

vyber = int(input("Vitaj na našej stránke!\nVyber čo chceš spraviť(1 - pozriet program, 2 - kupit listky, 3 - rezervovat miesta, 4 - zrusit rezervaciu): "))
if vyber == 1:
    print("1")
    for key in print_program(filmy):
        print(key)
if vyber == 2:
    print("2")
    for key in print_program(filmy):
        print(key, end = " ")
"""

for key,values in filmy.items():
    print(key)
choose_city = input("Choose the city: ")
choose_city = choose_city.upper()
best_city_match = get_close_matches(choose_city, best_match)
best_city_match_str = listToString(best_city_match)
print(best_city_match_str+":")


for key,values in filmy[best_city_match_str].items():
    print(key)
choose_movie = input("Choose the movie: ")
choose_movie = choose_movie.upper()
best_movie_match = get_close_matches(choose_movie, best_match)
best_movie_match_str = listToString(best_movie_match)
print(best_movie_match_str+":")


for key,values in filmy[best_city_match_str][best_movie_match_str].items():
    print(key)
choose_time = input("Choose the time: ")
choose_time = choose_time.upper()
print(choose_time)




with open('program.json', 'w') as json_file:
  json.dump(filmy, json_file)