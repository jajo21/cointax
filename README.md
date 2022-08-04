# Cointax

## Instruktioner

**Förbered dator**  
1. Installera node och npm från den här sidan https://nodejs.org/en/download/.  
2. Verifiera installationen av node genom att skriva ```node -v``` i terminalen. Systemet bör visa vilken version du har installerad.  
3. Verifiera installationen av npm genom att skriva ```npm -v``` i terminalen. Systemet bör visa vilken version du har installerad.  
4. Installera npm globalet genom att skriva ```npm install -g npm``` i terminalen.  

**Förbered och starta applikationen**  
1. Ladda ner repot från https://github.com/jajo21/cointax.  
2. Leta upp valfri terminal och utgå från nerladdad cointax mapp, navigera sedan in i mappen CointaxAPI och skriv: ```dotnet run```, api:et startar nu lokalt på din dator.  
3. Navigera sedan in i mappen Frontend via terminalen och skriv:```npm ci ```, nu laddas alla nödvändiga paket ner till Frontenden.   
4. När alla paket har laddats klart skriver du i terminalen: ```npm start```, det här transpilerar koden via parcel och startar applikationen.  
5. Normalt ska programmet öppnas i din webbläsare, om det inte gör det, öppna valfri webbläsare och navigera in på http://localhost:3333.  
6. Väl inne på sidan klickar du på menyvalet App för att ta dig till applikationen, alternativt navigerar till http://localhost:3333/app.html.  

## Kravlista - Inlämning 4: A minimum Viable Product**

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

## Externa bibliotek
Du kan tydligt se vilka externa bibliotek som är installerade i package.json. Men här kommer en mindre övergripande förklaring.

### [Buffer](https://www.npmjs.com/package/buffer)
Buffer version 6.0.3: Installerades i slutet när jag installerade localbase och startade applikationen första gången med localbase. Parcel verkar behöva det paketet för att köras tillsammans med localbase och indexedDB API:et på något sätt, det här meddelandet kom upp i terminalen: @parcel/resolver-default: "Auto installing polyfill for Node builtin module "buffer"..." mer information om buffer finns om du följer länken, är inte riktigt på det klara vad buffer egentligen gör.

### [Parcel](https://www.npmjs.com/package/parcel)
Parcel version 2.4.1: Används för att sätta upp en utvecklingsmiljö med transpilering och bundling.

### [Localbase](https://www.npmjs.com/package/localbase)
Localbase version 0.7.5: Används för att skapa lokal lagring liknande localStorage fast med hjälp av indexedDB.

### [NanoID](https://www.npmjs.com/package/nanoid)
NanoID version 3.3.3: Används för att enkelt generera unika ID:n. Används mycket till keys i mitt projekt men även för att få just ett unikt ID på varje objekt i en array.

### [Prop-Types](https://www.npmjs.com/package/prop-types)
Prop-types version 15.8.1: Används för att validera en komponents properties.

### [React](https://www.npmjs.com/package/react) och [React-Dom](https://www.npmjs.com/package/react-dom)
React och React-Dom: version 18.0.0: React är ett kodbibliotek som enkelt hjälper dig att skapa vy-lagret i en Single Page Applikation.

### [React-Hook-Form](https://www.npmjs.com/package/react-hook-form)
React-Hook-Form version 7.30.0: Används för att enkelt sätta ihop forms med validering och annan funktionalitet.

### [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
React-Router-Dom version 6.3.0: Är ett externt bibliotek som gör det möjligt för react-projekt att via komponenter deklarera olika delar av komponentträdet som olika webbresurser/sidor i webbläsarens historik.

## Tjänster  
Förklara de Webb-API:er som anropas i min prototyp.

### API 1

Det första API:et jag ville implementera är ett api som hämtar alla kryptovalutor som finns och matar in dem i applikationen. För att en användare ska kunna välja bland alla kryptovalutor som finns om de skulle vilja lägga till en manuell transaktion, vi behöver självklart veta mellan vilka valutor transaktionen har skett. Jag vill inte att användare ska skriva helt vad de vill i ett valuta-input-fält, det kan bli mycket fel och transaktionerna kan hamna i osynk. Då detta enbart är en prototyp just nu så blev det för stort att implementera ett liknande API, därför gjorde jag ett eget enklare API via som lagrar 10 valutor som testaren av prototypen kan använda. 

Åtkomstpunkter som används i min applikation:  

GET - https://localhost:7284/api/Coin - Hämtar alla valutor som ska matas in i applikationen  
POST - https://localhost:7284/api/Coin - Lägger till ny valuta  
DELETE - https://localhost:7284/api/Coin/{id} - Tar bort vald valuta  

Om vi utgår från mappen ./src/app/components/routes så används detta API i komponenten Transactions.jsx för att få ner alla tillgängliga valutor till komponenten transactions-select.jsx där användaren väljer i en select vilken valuta som har använts. Alla API-åtkomstpunkter används även i (den ännu öppna för alla) Admin.jsx routen för att en admin ska kunna hämta, lägga till och ta bort i API:t enkelt. Väljer man att testa funktionaliteten på "Admin-sidan" så får man gärna ta bort de valutorna man skapar och om man tar bort några av "grund" valutorna får man gärna lägga till dessa igen.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/coins-api-caller.js

### API 2

Det andra API:et jag ville implementera är ett api som hämtar alla privata transaktioner från en specifik användares kryptobörs-plånbok, därav behöver man bygga en koppling mellan så många kryptobörsers API:er som möjligt för att alla användare ska få möjlighet att välja sin kryptobörs och alternativt välja fler. Då det är stor chans att en användare köper och säljer från olika kryptobörser. Den här delen i projektet är väldigt stor och komplex, därav väljer jag även här att göra ett eget mockat api med hjälp av retoolapi som är fyllt med historik från 10 transaktioner. Det här ska efterlikna en väldigt enkel variant av transaktionshistorik från en privat plånbok på en kryptobörs.

Åtkomstpunkter som används i min applikation:  

GET - https://localhost:7284/api/Transaction - Hämtar alla transaktioner som ska användas i applikationen.  

Om vi utgår från mappen ./src/app/components/routes igen så används detta api i komponenten Wallet.jsx och vidare till Wallet-transactions.jsx där alla transaktioner matas ut på en sida för att användaren ska se dessa visuellt. I framtiden ska dessa transaktioner matas ihop med alla övriga transaktioner som har hämtats för att i slutändan skapa allt som behövs inför deklarationen.

Tjänsten som anropar API:t ligger specifikt i ./src/app/services/api/wallet-transactions-api-caller.js  

## Förtydliganden
Filen "./src/app/components/error/Error-demo.jsx" är enbart en demo-komponent som kan läggas till i valfri komponent för att testa på Error-boundaryn.  
Felhantering gällande tax-service.js och tax.jsx är inte komplett. Det behöver läggas till.  
Jag har tyvärr inte hunnit klart med applikationen. Men jag har lyckats uppfylla kraven anser jag. Jag har också lyckats skapa de mesta av delarna för att åtminstone kunna presentera min prototyp och förklara de mest väsentliga delarna av applikationen.  
