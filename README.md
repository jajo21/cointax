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

 |Krav|Uppfyllt|Egna Kommentarer och vart kravet kan testas|
 |---|---|---|
|**1**  |**Ja**| |
|**2**  |**Ja**| |
|**3**  |**Ja**| |
|**4**  |**Ja**| |
|**5**  || |
|**6**  |**Ja**| |
|**7**  |**Ja**| |
|**8**  |**Ja**| |
|**9**  |**Ja**| |
|**10**  |**Ja**| |
|**11**  |**Ja**| |
|**12**  || |
|**13**  |**Ja**| |
|**14**  |**Ja**| |
|**15**  || |
|**16**  || |
|**17**  || |
|**18**  || |
|**19**  || |
|**20**  || |


## Externa bibliotek
Du kan tydligt se vilka externa bibliotek som är installerade i package.json. Men här kommer en mindre övergripande förklaring.

Buffer version 6.0.3: Installerades i slutet när jag installerade localbase och startade applikationen första gången. Parcel verkar behöva det paketet för att köras tillsammans med localbase och indexedDB API på något sett, det här meddelandet kom upp i terminalen: @parcel/resolver-default: "Auto installing polyfill for Node builtin module "buffer"..." mer information om buffer finns här: https://www.npmjs.com/package/buffer, är inte riktigt på det klara vad buffer egentligen gör.

Parcel version 2.4.1: Används för att sätta upp en utvecklingsmiljö med transpilering och bundling.

Localbase: Används för att skapa lokal lagring liknande localStorage fast med hjälp av indexedDB.

NanoID version 3.3.3: Används för att enkelt generera unika ID:n. Används mycket till keys i mitt projekt men även för att få just ett unikt ID på varje objekt i en array.

React och React-Dom: version 18.0.0: React är ett kodbibliotek som enkelt hjälper dig att skapa vy-lagret i en Single Page Applikation.

React-Hook-Form version 7.30.0: Används för att enkelt sätta ihop forms med validering och annan funktionalitet.

React-Router-Dom: Är ett externt bibliotek som gör det möjligt för react-projekt att via komponenter deklarera olika delar av komponentträdet som olika webbresurser/sidor i webbläsarens historik.

## Tjänster  
Förklara de Webb-API:er som anropas i min prototyp.

Det första API:et jag ville implementera är ett api som hämtar alla kryptovalutor som finns och matar in dem i applikationen. För att en användare ska kunna välja bland alla kryptovalutor som finns om de skulle vilja lägga till en manuell transaktion, vi behöver självklart veta mellan vilka valutor transaktionen har skett. Jag vill inte att användare ska skriva helt vad de vill i ett valuta-input-fält, det kan bli mycket fel och transaktionerna kan hamna i osynk. Då detta enbart är en prototyp just nu så blev det för stort att implementera ett liknande API, därför gjorde jag ett eget enklare API via retoolapi som lagrar 10 valutor som testaren av prototypen kan använda.

Åtkomstpunkter som används i min applikation:
GET - https://retoolapi.dev/Z04hfX/cointaxcoins - Hämtar alla valutor som ska matas in i applikationen
POST - https://retoolapi.dev/Z04hfX/cointaxcoins - Lägger till ny valuta
DELETE - https://retoolapi.dev/Z04hfX/cointaxcoins/{id} - Tar bort vald valuta

Om vi utgår från mappen ./src/app/components/routes så används detta API i komponenten Transactions.jsx för att få ner alla tillgängliga valutor till komponenten transactions-select.jsx där användaren väljer i en select vilken valuta som har använts. Alla API-åtkomstpunkter används även i (den ännu öppna för alla) Admin.jsx routen för att en admin ska kunna hämta, lägga till och ta bort i API:t enkelt.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/coins-service.js

Det andra API:et jag ville implementera är ett api som hämtar alla privata transaktioner från en specifik användares kryptobörs, därav behöver man bygga en koppling mellan så många kryptobörsers API:er som möjligt för att alla användare ska få möjlighet att välja sin kryptobörs och alternativt välja fler. Då det är stor chans att en användare köper och säljer från olika kryptobörser. Den här delen i projektet är väldigt stort och komplext, därav väljer jag även här att göra ett eget mockat api med hjälp av retoolapi som är fyllt med historik från 10 transaktioner. Det här ska efterlikna en väldigt enkel variant av transaktionshistorik från en privat persons kryptobörs.

Åtkomstpunkter som används i min applikation:

GET - https://retoolapi.dev/Dr8AOw/transactions - Hämtar alla transaktioner som ska användas i applikationen.

Om vi utgår från mappen ./src/app/components/routes igen så används detta api i komponenten Wallet.jsx och vidare till Wallet-transactions.jsx där alla transaktioner matas ut på en sida för att användaren ska se dessa visuellt. I framtiden ska dessa transaktioner matas ihop med alla övriga transaktioner som har hämtats för att i slutändan skapa allt som behövs inför deklarationen.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/wallet-transactions-service.js

## Förtydliganden/motivering
