# Cointax

## Instruktioner

*Vad behöver göras för att ditt program ska starta och gå och använda?*

**1. Ladda ner repot från https://github.com/jajo21/cointax**  
**2. Leta upp valfri terminal och utgå från nerladdad cointax mapp**  
**3. I termnialen skriver du sedan: ```npm ci ```, nu laddas alla nödvändiga paket ner**  
**4. När alla paket har laddats klart skriver du i terminalen: ```npm start```, det här gör att parcel transpilerar källkoden**  
**5. Leta upp valfri webbläsare och gå in på http://localhost:3333**  
**6. Väl inne på sidan klickar du på menyvalet App för att ta dig till applikationen, alternativt navigerar till http://localhost:3333/app.html**  


## Inlämning 3: Från koncept till prototyp
## Kravlista

 |Krav|Uppfyllt|Egna Kommentarer|
 |---|---|---|
|**1**  |**Ja**| |
|**2**  |**Ja**| |
|**3**  |**Ja**| |
|**4**  |**Ja**| |
|**5**  |**Ja**| |
|**6**  |**Ja**| |
|**7**  |**Ja**| |
|**8**  |**Ja**| |
|**9**  |**Ja**| |
|**10**  |**Ja**| |
|**11**  |**Ja**| |
|**12**  |**Ja**| |
|**13**  |**Ja**| |
|**14**  |**Ja**| |
|**15**  |**Ja**| |
|**16**  |**Ja**| |
|**17**  |**Ja**| |
|**18**  |**Ja**| |
|**19**  |**Ja**| |
|**20**  |**Ja**| |


## Externa bibliotek
Du kan tydligt se vilka externa bibliotek som är installerade i package.json. Men här kommer en mindre övergripande förklaring.

Buffer version 6.0.3: Installerades i slutet när jag installerade localbase och startade applikationen första gången med localbase. Parcel verkar behöva det paketet för att köras tillsammans med localbase och indexedDB API:et på något sätt, det här meddelandet kom upp i terminalen: @parcel/resolver-default: "Auto installing polyfill for Node builtin module "buffer"..." mer information om buffer finns här: https://www.npmjs.com/package/buffer, är inte riktigt på det klara vad buffer egentligen gör.

Parcel version 2.4.1: Används för att sätta upp en utvecklingsmiljö med transpilering och bundling.

Localbase version 0.7.5: Används för att skapa lokal lagring liknande localStorage fast med hjälp av indexedDB.

NanoID version 3.3.3: Används för att enkelt generera unika ID:n. Används mycket till keys i mitt projekt men även för att få just ett unikt ID på varje objekt i en array.

React och React-Dom: version 18.0.0: React är ett kodbibliotek som enkelt hjälper dig att skapa vy-lagret i en Single Page Applikation.

React-Hook-Form version 7.30.0: Används för att enkelt sätta ihop forms med validering och annan funktionalitet.

React-Router-Dom version 6.3.0: Är ett externt bibliotek som gör det möjligt för react-projekt att via komponenter deklarera olika delar av komponentträdet som olika webbresurser/sidor i webbläsarens historik.

## Tjänster  
Förklara de Webb-API:er som anropas i min prototyp.

Det första API:et jag ville implementera är ett api som hämtar alla kryptovalutor som finns och matar in dem i applikationen. För att en användare ska kunna välja bland alla kryptovalutor som finns om de skulle vilja lägga till en manuell transaktion, vi behöver självklart veta mellan vilka valutor transaktionen har skett. Jag vill inte att användare ska skriva helt vad de vill i ett valuta-input-fält, det kan bli mycket fel och transaktionerna kan hamna i osynk. Då detta enbart är en prototyp just nu så blev det för stort att implementera ett liknande API, därför gjorde jag ett eget enklare API via retoolapi som lagrar 10 valutor som testaren av prototypen kan använda. 

Åtkomstpunkter som används i min applikation:
GET - https://retoolapi.dev/sX9GgF/cointaxcoins - Hämtar alla valutor som ska matas in i applikationen
POST - https://retoolapi.dev/sX9GgF/cointaxcoins - Lägger till ny valuta
DELETE - https://retoolapi.dev/sX9GgF/cointaxcoins/{id} - Tar bort vald valuta

Om vi utgår från mappen ./src/app/components/routes så används detta API i komponenten Transactions.jsx för att få ner alla tillgängliga valutor till komponenten transactions-select.jsx där användaren väljer i en select vilken valuta som har använts. Alla API-åtkomstpunkter används även i (den ännu öppna för alla) Admin.jsx routen för att en admin ska kunna hämta, lägga till och ta bort i API:t enkelt. Väljer man att testa funktionaliteten på "Admin-sidan" så får man gärna ta bort de valutorna man skapar och om man tar bort några av "grund" valutorna får man gärna lägga till dessa igen.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/coins-api-caller.js

Det andra API:et jag ville implementera är ett api som hämtar alla privata transaktioner från en specifik användares kryptobörs-plånbok, därav behöver man bygga en koppling mellan så många kryptobörsers API:er som möjligt för att alla användare ska få möjlighet att välja sin kryptobörs och alternativt välja fler. Då det är stor chans att en användare köper och säljer från olika kryptobörser. Den här delen i projektet är väldigt stor och komplex, därav väljer jag även här att göra ett eget mockat api med hjälp av retoolapi som är fyllt med historik från 10 transaktioner. Det här ska efterlikna en väldigt enkel variant av transaktionshistorik från en privat plånbok på en kryptobörs.

Åtkomstpunkter som används i min applikation:  

GET - https://retoolapi.dev/Dr8AOw/transactions - Hämtar alla transaktioner som ska användas i applikationen.

Om vi utgår från mappen ./src/app/components/routes igen så används detta api i komponenten Wallet.jsx och vidare till Wallet-transactions.jsx där alla transaktioner matas ut på en sida för att användaren ska se dessa visuellt. I framtiden ska dessa transaktioner matas ihop med alla övriga transaktioner som har hämtats för att i slutändan skapa allt som behövs inför deklarationen.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/wallet-transactions-api-caller.js

## Förtydliganden/motivering till kodgranskare
Jag ber i förväg om ursäkt för om ni upplever att det är lite rörigt när man använder termer från kryptovärlden som exempelvis plånbok(wallet). Det här är termer som jag har tänkt att det ska finnas en tydlig knapp för där man får en förklaring vad som menas med olika termer och vad man ska göra, alternativt ändra till mer förklarande ord. Klicka runt på sidan så kommer ni kodgranskare säkert förstå vad som ska göras vid varje val.

Tiden räckte inte till för att styla allt enhetligt så det kan också göra det lite rörigt men annars är jag nöjd hittills.. Däremot är det väldigt mycket kvar för att få en tydlig bild över applikationen och en klar bild över vad en användare behöver göra. Själva uträkningen för att få ut dokumentet till skatteverket är inte påbörjad. Utan bara grunden för att lägga till sina transaktioner, antingen manuellt eller via API.

Delar jag har noterat själv som issues som jag inte har hunnit med: 
- Banta ner css och få css-delen mer dry då mycket är dubbletter i de olika filerna.
- Gör klart felhanteringen i funktionerna för alla API anrop så att de inte bara loggas i consolen.
- Koppla ihop hämtade transaktioner från API:t med manuella transaktioner.
- Fixa wallet-sidan så man ser plånböckerna från respektive kryptobörs mer avgränsat.
- Ändra stylingen på den manuella transaktionshistoriken(under fliken transaktioner) så att den blir mer som övriga sidor.
- Skriva ut antal hämtade transaktioner i Wallet.jsx.
- Skapa funktionaliteten för att räkna ut omkostnadsbelopp för varje valuta.  

Det här är kommande issues som ska lösas, plus mycket mycket mer såklart :D
Trevlig kodgranskning.