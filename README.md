# Allmän info [insert projektnamn här]

Här beskrivs och samlas all information om projektet [insert projektnamn här].

## Förslag

### namnförslag

## Kravspecifikation

Nedan följer en beskrivning av [insert projektnamn här].

### grundidé

Vår idé är att skapa en sajt där användaren enkelt ska kunna hitta de produkter denne söker och införskaffa dessa.

### mål

Våra mål med projektet innefattar en responsiv sida med designkonfigurationer för både mobil och desktop. Vi vill ha sidor både för produktkategorier och individuella produkter. Vi vill också ha en kundkorg som följer med användaren över hela sidan och har en egen vy där man kan slutföra köpet.

### begränsningar

Vi skall hålla oss till en rimlig nivå baserat på våra erfarenheter och projektets tidsram. Man skall inte behöva jobba extra utöver schemalagd tid (men vill man så får man så klart). Kom ihåg att ta raster <---- obs viktigt!!!

### önskemål

Kundkorg och deployment ingår inte i grunduppgifter men är något vi önskar implementera i vårt projekt.

### tidslinje

Projektet löper över tre veckor. Första veckan är planeringsvecka, de andra två är utvecklingsveckor.

#### vecka 1

* wireframes klara
* projekt skapat och alla deltagare i projektet anslutna
* repo skapat
* kravspecifikation skriven
* arbetsprocessen utarbetad
* arbetsprocessen testad
* planering, design och arbetsprocess godkänd av lärare

#### vecka 2

* utvecklingsprocessen påbörjas
* styleguides/design
* deployment
* inledande testning

#### vecka 3

* utvecklingsprocessen går in i slutskede
* buggtestning
* projektet klart
* utvärdering
* redovisning?

### roller

Utvecklingsteamet har en platt struktur där medlemmar kan ta huvudansvar för delar av processen. Att man har huvudansvar för en delprocess innebär inte att man ska göra allt arbete relaterat till delprocessen eller att ingen annan får bidra till den. Vi strävar efter att alla är delaktiga i alla delar av processen men anpassat efter förmåga och intresse för varje delmoment.

* Rollen som produktägare axlas av alla medlemmar i gruppen
* Oscar tar på sig rollen som Scrummaster med huvudansvar för dokumentation och arbetsprocess
* Kristoffer tar på sig rollen som designansvarig med huvudansvar för layout, design och skisser.

### Funktionalitet

* cart
* fetch från api för alla produkter
* fetch från api på kategori
* fetch från api på enskild produkt
* cards för produkter
* page header
* page footer
* sökfunktion?
* pagination?

### user stories

Nedan följer user stories för sidan i stort. För user stories för enskilda komponenter se rubriken user stories under dokumentation.

#### epics

"Arnold går in på sidan, han vill köpa ett bord. Han klickar på our products på huvudsidan och kommer till produktsidan. Genom att klicka på rätt kategori kommer han till möbler. Där lägger han enkelt till ett bord i sin kundkorg. Då han känner sig nöjd klickar han på kundkorgen och kommer till en separat vy där han ser alla produkter han lagt till. Efter att noga ha gått igenom sin lista av produkter bestående av ett bord klickar han på köp. Arnold är mycket nöjd."

#### novels

## Schema

Utgånspunkten är samling vid 9.30 ifall morgonsamling initierad av lärarna utgår. I annat fall sker samling 5 minuter efter morgonsamling initierad av lärare avslutas.

### mötesschema

#### 13/3

* 9.30-9.45 - gemensam samling i klassen
* 9.45-10.00 - rast
* 10.00-11.07 - morgonmöte i teamet
* 11.07-11.15 - rast
* 11.15-11.45 Kolla igenom samlingsdokumentet. Prova att lägga till/ändra i egen branch. Förslagsvis kan man till exempel lägga namnförslag för projektet.
* 11.45-12.00 - återsamling i gruppen
* 12.00-13.00 - lunch
* 13.15 - återsamling efter lunch

### sprintschema

### Deadlines/viktiga milstolpar

## Projektverktyg och ramverk

Här samlas information om vilka verktyg, ramverk, bibliotek och tekniker vi använder.

### Designverktyg

* figma

### projekthanteringsverktyg

* github projects

### Ramverk

* react v19
* nextjs v15 med app router & turbopack
* tailwind v4 <--- måste uppgraderas

### Bibliotek

* shadcn - frivillgt vid implementation av komponenter <--- måste lägga till grundbiblioteket

## Arbetsprocess

Här beskrivs arbetsprocessen vi ämnar följa för att underlätta utvecklinsarbetet och främja samarbete i teamet.

### arbetsflöde i github projects

* plocka items som man känner passar en, eller är intressanta
* hör av med gruppmedlemmar under mötet ifall andra är intresserade av samma items
* items kan utvecklas av flera personer samtidigt om så önskas, detta innebär dock att det måste koordineras korrekt
* alla items som finns men ej är redo att påbörjas finns i backlog
* items som är redo att plockas hamnar i ready
* när man påbörjar ett item flyttar man detta till in progress
* när man känner sig klar flyttar med ett item flyttar man det till review
* efter att man flyttat sitt item till review skapar man ett pull request och bjuder in en eller flera medlemmar att genomföra den
* finns ingen konflikt kan pull requesten enkelt godkännas av vem som helst
* finns konflikt bör mergen diskuteras av de som har bidragit till kodstyckenna som är i konflikt och eventuellt övriga i gruppen

### kodstandard

Nedan följer standarder att följa under utveckling av kod

#### namnkoventioner

### design

Nedan följer konventioner att följa vid design.

## dokumentation

Här samlas länkar till all dokumentation för projektet.

### designskisser

Nedan länkas alla designskisser.

#### wireframes

[länk till wireframe](https://www.figma.com/design/FCcFWQX3Y4WfaGU0DRqaPQ/Grupp-1?node-id=0-1&p=f&t=Fn8sSogYjSQ7p5sD-0)

#### style guides

#### mockups

#### Prototypes

### komponentbibliotek

Här definieras alla grundkomponenter som skall finnas i appliaktionen.

Formatet är komponentnummer följt av namn ex. 3. cart button

1) nånting
2) nånting
3) cart button


### user stories

Här läggs user stories för alla komponenter i applikationen

formatet är komponentnamn från rubriken komponentbibliotek inklusive nummer följt av en paragraf med innehållet i user storyn. 

En bra grundmall är: Som ***[Användare t.ex kunde eller utvecklare]*** vill jag kunna **[*vad det är komponenten gör från perspektivet av användaren*]** så att jag kan **[*själva syftet med komponenten*]**.

exempel följer nedan

#### #3 cart button

Som **kund** vill jag kunna trycka på en knapp högst upp på sidan där jag kan komma till min kundkorgsvy så att jag kan se mina varor, ta bort de jag inte vill ha och checka ut om jag är nöjd.
