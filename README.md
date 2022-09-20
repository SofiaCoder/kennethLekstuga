# Ken1s Lekstuga
testar olika saker och spara kod snuttar som är najs

#   Koppla VSC med GitHub och några vanliga kommandon
##  Konfig av visual studio:
```
    git config --global user.email "epost som du har i github"  // Lägga till ditt konto i VSC från Github
    git config --global user.name "KennethEllebring"	        // Lägga till ditt användarnamn från Github
```
##  Kommandon för Pull:
```
    git clone URL	                    // För att hämta repot första gången
    git pull 			                // För att få hem uppdateringar som gjorts 
```
##  Kommandon för att göra en push:
``` 
    git status			                // Kontrollerar förändringar i repot lokalt
    git add .		                	// Lägger till alla filer/förändringar som finns i repot för överföring
    git add app.js                      // Lägger endast till app.js för commit / push
    git commit -m "kommentar"           // Godkänner att dessa filer läggs i "pipen" med kommentar om vad som gjorts
    git push			                // Lägger upp allt som är commitat till Github
````