# Cointax

## Instruktioner

*Vad behöver göras för att ditt program ska starta och gå och använda?*

**1. Ladda ner repot från https://github.com/jajo21/cointax**  
**2. Leta upp valfri terminal och ta dig in i cointax mappen**  
**3. I termnialen skriver du sedan: ```npm ci ```, nu laddas alla nödvändiga paket ner**  
**4. När alla paket har laddats klart skriver du i terminalen: ```npm start```, det här gör att parcel transpilerar källkoden**  
**5. Nu ska applikationen ha startat på http://localhost:3333**  
**6. Leta upp valfri webbläsare och gå in på http://localhost:3333**  
**7. Väl inne på sidan klickar du på menyvalet App för att ta dig till applikationen**  


## Inlämning 2: The proof of concept
## Kravlista

 |Krav|Uppfyllt|Egna Kommentarer|
 |---|---|---|
|**1**  |**Ja**| |
|**2**  |**Ja**| Men dubbelkolla|
|**3**  |**Ja**| |
|**4**  |**Ja**| |
|**5**  |**Ja**| |
|**6**  |**Ja**| |
|**7**  |**Ja**| |
|**8**  |**Ja**| |
|**9**  |**Ja**| |
|**10**  |**Ja**| Jag tror det?|
|**11**  |**Osäker**| |
|**12**  |**Ja**| |
|**13**  |**Ja**| |
|**14**  |**Ja**| |
|**15**  |**Ja**| Spara knappen blir större = rörelse? Plus att Loggan Cointax snurrar när man klickar på den :)|

## Förtydliganden/motivering
Jag har använt mig av parcel för att transpilera källkoden. Jag har testat väldigt mycket olika saker med react under den här uppgiften. Det är aningen rörigt såhär i början, just hur man enklast bör navigera och bygga upp allt, men tillslut kommer man säkert lära sig vilken väg man ska ta i react-biblioteket också. 

Det slutade i vilket fall med att jag skapade en navbar till min applikation istället för att bara jobba på en sida och fokusera på den funktionella prototypen, jag fokuserade istället på helhet. Alla meny-val i applikationen går att klicka på och navigera till men alla val har ingen funktionalitet. Det enda menyvalet som har funktionalitet är "Transaktioner" för tillfället. Där kan man se sin historik av transaktioner. Om man vill lägga till transaktioner så sparas dessa och läggs till i localstorage så att dessa finns kvar om man vill navigera tillbaka till sina sparade "Transaktioner". Jag har gjort det mobilanpassat och byggt en navbar som "glider" fram vid lite mindre skärm. Har även gjort så att loggan Cointax snurrar när man klickar på den även fast jag kanske inte vill ha det så i framtiden. Men jag ville uppfylla alla krav. Mycket mer funktionalitet än så har jag inte hunnit med även om jag har testat mycket annat som inte är sparat i det här repot. Om jag ska vara ärlig så började jag kika lite på hur man bör få ihop logiken med att spara transaktioner och få ihop omkostnadsbelopp för varje coin och så vidare. Vid första anblick så kändes det som att det skulle bli en enkel match. Men nu i efterhand så behöver man nog tänka igenom saker klokt för att få ihop logiken så att programmet fungerar felfritt. Lite av den koden är redan sparade i cost-amount, men i slutändan var det mycket buggar och fel som gjorde att jag tog bort mycket och behöver tänka om. En vacker dag i framtiden får man nog ihop det, nog om det, jag har fått lära mig lite react i den här modulen iallafall och det är en rolig början, även om det är en lång väg kvar och koden förmodligen är långt ifrån felfri ännu! Men jag är i vilket fall glad att få ihop det såhär långt och det ska bli kul att lära sig mer!