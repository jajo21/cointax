export let pageData = [
    {
        page: 'home',
        title: 'Välkommen!',
        content: 'Mitt namn är Johannes Jakobsson och jag studerar Webbutvecklare .NET på Campus Värnamo.<br><br>' +
        'Vill du veta mer om mig? Klicka på menyvalet kontakt för mer information om mig och hur du kan komma i kontakt med mig.<br><br>' +
        'De andra menyvalen visar mitt tidigare arbete i kursen Affärsmannaskap för IT där vi skulle komma på en affärsidé med tillhörande ' + 
        'affärsplan. I nuvarande kurs Moderna Webbapplikationer ska vi bygga en prototyp av idén och öva på genomförandet från produktidé till ' +
        'prototyp och utföra en presentation av idén i ett kommande draknäste. <br><br>' +
        'Det sista menyvalet "App" är inte färdigutvecklat, det kommer endast hänvisa dig till en tom sida just nu. Men i framtiden kommer ' +
        'innehållet i det menyvalet att vara den färdigutvecklade applikationen.'
    },
    {
        page: 'business-plan',
        title: 'Affärsplan',
        content: {
            idea: 'Cointax erbjuder den billigaste och enklaste tjänsten för att din deklaration av handel med kryptovalutor ska kännas så smidig som möjligt.',
            summaryTitle: "Sammanfattning",
            summaryContent: 'Visste du att få personer som investerar i kryptovalutor skattar på sina kryptotillgångar? Ett stort problem i det här är att det ' + 
            'fortfarande anses vara extremt krångligt att deklarera sin handel med kryptovalutor enligt gemene man. Vi anser att det ska vara enkelt och ' +
            'smidigt att sköta sina affärer utan en större kostnad. <br><br>' +
        
            'Vi har lösningen på det här problemet. Vi ska bygga en digital plattform där användare enkelt kan ladda upp sin transaktionshistorik via ' +
            'API-nyckel eller via manuell inmatning. Vid ett knapptryck ska det sen skapas en K4-blankett baserat på din transaktionshistorik. <br><br>' +
            
            'Fördelarna är många, vi vill framförallt framhäva att det ska vara så enkelt som möjligt att deklarera sina kryptotillgångar. Vi skapar en ' +
            'tydlig samlingsplats för dina transaktioner. Vi kopplar smidigt ihop transaktioner från kryptobörser via API-nyckel tillsammans med manuella ' +
            'köp från andra handelsplatser. <br><br>' +
            
            'I den fullständiga affärsplanen som kommer att presenteras på den här sidan inom en snar framtid går vi igenom tidsplaner, kostnader och ' +
            'analyser för att ha möjligheten att genomföra ett så lyckat projekt som möjligt. Men framförallt varför vi bör genomföra det. Fullföljer ' + 
            'man denna plan kommer vi med stor sannolikhet gå med vinst redan år två.' ,
            backgroundTitle: 'Bakgrund',
            backgroundContent1: 'Jag har investerat i kryptovalutor sedan i mitten av år 2017. Varje år har jag deklarerat manuellt och dokumenterat allt möjligt i ett ' +
            'Excel dokument. Varje år har jag även gnällt och tragglat mig igenom deklarationen för att det är så extremt osmidigt. <br><br>',
            backgroundImage: './images/deklaration.png',
            backgroundContent2: 'Såhär kan en liten del i mitt privata Excel-dokument se ut och det här är enbart åtta affärer under en och samma dag. Det här är bara ' +
            'mitt personliga sparande av transaktioner och har egentligen inte med deklarationsprocessen att göra. Men många delar i dokumentet behövs för att fullfölja ' +
            'deklarationen.<br><br>' +

            'Tänk om det fanns en smidig, billig och enkel tjänst som hjälper framförallt privatpersoner med sparandet av den här informationen. ' +
            'Där det är så tydligt att ett barn förstår vad som behöver sparas till deklarationen. Alternativt endast koppla sin privata API-nyckel från vald krypto-börs ' +
            'för att få det ännu enklare och nästintill automatiserat, då kommer man inte behöva dokumentera någon information alls om sina transaktioner.<br><br> ' +
            
            'Idag börjar det poppa upp liknande tjänster, men enligt mig är dessa ännu krångliga och dyra att använda sig av. Därför behövs en vettigare tjänst ' +
            'som både är billigare och smidigare, med en tillhörande APP där det är enkelt att spara en manuell transaktion om så behövs. ',
            purposeTitle: 'Syfte',
            purposeContent: 'Huvudsyftet är att det ska blir enklare och billigare för gemene man att deklarera sin handel med kryptovalutor. Med vår tjänst så kommer ' +
            'fler investerare välja att deklarera sin handel istället för att stå över. Vi riktar oss framförallt till privatpersoner som vill tidseffektivisera och förenkla ' +
            'sin deklaration av handel med kryptovalutor.<br><br>' + 

            'Förra året(2021) sa Henrik Kisterud(kontrollsamordnare på Skatteverket) till SVT att omkring 3 000 svenskar hade deklarerat sin handel med kryptovalutor. Exakt hur ' +
            'många som handlar med kryptovalutor är svårt att slå fast, men Goobit som är ett av de större svenska företagen inom handel med kryptovalutor uppger sig vid samma ' +
            'tidpunkt ha omkring 200 000 svenska kunder enligt SVT. Alltså 3000 av 200 000 hade deklarerat sin handel det året och tänk också på att siffran 200 000 svenska kunder ' +
            'är enbart från en handelsplats.<br><br>' +
            
            'Vi anser att ett av de stora problemen till att folk avstår deklarationen är att gemene man tycker det är krångligt. Därför finns det ett stort behov av en tjänst ' +
            'som förenklar denna process markant. Där kommer vår lösning att vara till stor hjälp, framförallt den automatiserade lösningen med API-nyckel! ' +
            'Mer om lösningen får du under fliken Projektidé.',
        }
    },
    {
        page: 'project-idea',
        title: 'Projektidé',
        content: 'För att kliva in lite närmare på själva produktidén vill jag framförallt skapa en webbapplikation som representerar enkelhet, en tjänst som är gjord ' +
        'för att användaren ska få en så smidig upplevelse som möjligt under deklarationen. <br><br>' +

        'Om vi ska utveckla det här ytterligare så ska vi jobbiga specifikt mot användarvänlighet och skapa en sida som utstrålar trygghet till användaren. Vi ska ' +
        'använda enkla ord som användarna verkligen förstår och ta oss ifrån begrepp som exempelvis florerar på Skatteverkets hemsida som bidrar till att den röda ' +
        'tråden inte riktigt hittar ända fram. Det ska vara så enkelt att deklarera så att ett barn förstår vad som ska göras. Vi ska specifikt fokusera på Sverige i ' +
        'första hand och skapa en applikation som svenska kryptoinvesterare inte kan leva utan. <br><br>' +
        
        'Mer om Webbapplikationen; en användare behöver ha ett eget konto kopplat till vår tjänst, ett konto kan skapas via vår kommande hemsida eller mobilapplikation. ' +
        'På det här kontot kan användaren välja att spara nödvändig information om varje transaktion manuellt inför kommande deklaration. Användaren har även möjlighet ' +
        'att koppla sin privata API-nyckel från valfri krypto-börs för att våran applikation ska inhämta transaktionshistorik automatiskt från kryptobörsens API. <br><br>' +
        
        'När det senare är dags för deklaration så får användaren helt enkelt välja om de vill betala för vår tjänst och få en färdigt ifylld k4-blankett beroende på ' +
        'sin transaktionshistorik. Beroende på antalet transaktioner så stiger kostnaden för användaren. I slutändan när k4-an har producerats ansvarar användaren själv ' + 
        'för att k4-blanketten hamnar hos Skatteverket. ',
    },
    {
        page: 'contact',
        title: 'Kontakt',
        content: {
            title:'Intresserad av att veta mer? Då har du hamnat rätt!',
            contactContent: 'Här presenterar jag ett antal länkar, en mail där du kan ställa vilka frågor du vill om projektet, det finns inga dumma frågor! Två mer ' +
            'yrkesrelaterade länkar tillsammans med två lite mer privata. Klicka gärna runt och se om du hittar något intressant och hör av dig till mig. LinkedIn ' +
            'kontot är inte fulländat ännu men det kommer inom en snar framtid. Klicka på respektive bild för att komma vidare:',
            email: 'jajo21pg@student.ju.se',
            github: 'https://github.com/jajo21',
            linkedin: 'https://se.linkedin.com/',
            instagram: 'https://www.instagram.com/jjakobssoon/',
            facebook: 'https://www.facebook.com/jakobsson91',
        }
    }

]