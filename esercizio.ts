class ClothingItems {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantità: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    
    constructor(data:any) {
        this.id= data.id;
        this.codprod= data.codprod;
        this.collezione= data.collezione;
        this.capo= data.capo;
        this.modello= data.modello;
        this.quantità= data.quantità;
        this.colore= data.colore;
        this.prezzoivaesclusa= data.prezzoivaesclusa;
        this.prezzoivainclusa= data.prezzoivainclusa;
        this.disponibile= data.disponibile;
        this.saldo= data.saldo
    }
    getbosssale(): number {
        return (this.prezzoivainclusa - this.saldo) / 100
    }
    getbosspurchase(): number {
        return this.prezzoivainclusa - this.getbosssale()
    }
}

const apiUrl = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";

function fetchData() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const clothingItems = data.map((itemData: any) => new ClothingItems(itemData))

for (const item of clothingItems) {
    console.log(`Item Id: ${item.id}`)
    console.log(`Sale Balance: ${item.getbosssale()}`)
    console.log(`Purchase Balance: ${item.getbosspurchase()}`)

    console.log('-------------------------------------------------------')
}
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    })
}

fetchData()