import json
import random
with open('rezervacie.json') as json_file:
    registracie = json.load(json_file)
def vytvor(registracie):
    mp=str(input('Meno a priezvisko: '))
    mail=str(input('Mail: '))
    mesto=str(input('Mesto: '))
    kino=str(input('Kino: '))
    film=str(input('Film: '))
    rad=str(input('Rad: '))
    sed=str(input('Sedadlo: '))
    cis_obj=random.randint(1000000,10000000)
    while cis_obj in registracie:
        cis_obj=random.randint(1000000,10000000)
    registracie[cis_obj]=mp
    registracie[cis_obj]+=f', {mail}, {mesto}, {kino}, {film}, {rad}, {sed}'
    uloz(registracie)
def uprav(registracie):
    print(registracie)
    cis_obj=int(input('Číslo objednávky: '))
    while cis_obj not in registracie:
        cis_obj=int(input('Číslo objednávky: '))
    mp=str(input('Meno a priezvisko: '))
    mail=str(input('Mail: '))
    mesto=str(input('Mesto: '))
    kino=str(input('Kino: '))
    film=str(input('Film: '))
    rad=str(input('Rad: '))
    sed=str(input('Sedadlo: '))
    registracie[cis_obj]=mp
    registracie[cis_obj]+=f', {mail}, {mesto}, {kino}, {film}, {rad}, {sed}'
    uloz(registracie)
def zmazat(registracie):
    cis_obj=int(input('Číslo objednávky: '))
    while cis_obj not in registracie:
        cis_obj=int(input('Číslo objednávky: '))
    registracie.pop(cis_obj)
    uloz(registracie)
def vypis(registracie):
    co=str(input('Všetky? '))
    if co=='n':
        cis_obj=int(input('Číslo objednávky: '))
        print(registracie[cis_obj])
    else:
        print(registracie)
def uloz(registracie):
    with open('rezervacie.json','w') as js:
        json.dump(registracie,js)
wh=str(input('Vytvoriť rezervaciu (v), upraviť rezerváciu (u), vymazať rezervaciu (d), vypisat rezervaciu (p), ukončit program (e) '))
cnt=1
while cnt==1:
    if wh=='v':
        vytvor(registracie)
    if wh=='u':
        uprav(registracie)
    if wh=='d':
        zmazat(registracie)
    if wh=='p':
        vypis(registracie)
    wh=str(input('Vytvoriť rezervaciu (v), upraviť rezerváciu (u), vymazať rezervaciu (d), vypisat rezervaciu (p), ukončit program (e) '))
    if wh=='e':
        cnt=0