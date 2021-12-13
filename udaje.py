import json
import re
import random
import datetime
with open('rezervacie.json') as json_file:
    registracie = json.load(json_file)
def vytvor(registracie):
    meno=str(input('Meno: '))
    priez=str(input('Priezvisko: '))
    mail=str(input('Mail: '))
    mesto=str(input('Mesto: '))
    kino=str(input('Kino: '))
    film=str(input('Film: '))
    rad=str(input('Rad: '))
    sed=str(input('Sedadlo: '))
    dt=datetime.datetime.now()
    ct=str(dt).split(' ')
    for i in ct[0].split('-'):
        ct.append(i)
    del ct[0]
    for i in ct[0].split(':'):
        ct.append(i)
    del ct[0]
    for i in ct[5].split('.'):
        ct.append(i)
    del ct[5]
    for i in re.findall('..',ct[6]):
        ct.append(i)
    del ct[6]
    cis_obj=f'{meno[0]}{ct[4]}{priez[1]}{ct[1]}{ct[0]}{ct[8]}{random.randint(100,999)}'
    registracie[cis_obj]=meno
    registracie[cis_obj]+=f' {priez}, {mail}, {mesto}, {kino}, {film}, {rad}, {sed}'
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
    print (registracie)
    cis_obj=str(input('Číslo objednávky: '))
    registracie.pop(cis_obj)
    uloz(registracie)
def vypis(registracie):
    co=str(input('Všetky? '))
    if co=='n':
        print(registracie.keys())
        cis_obj=str(input('Číslo objednávky: '))
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
