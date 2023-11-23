var ClothingItems = /** @class */ (function () {
    function ClothingItems(data) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantità = data.quantità;
        this.colore = data.colore;
        this.prezzoivaesclusa = data.prezzoivaesclusa;
        this.prezzoivainclusa = data.prezzoivainclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }
    ClothingItems.prototype.getbosssale = function () {
        return (this.prezzoivainclusa - this.saldo) / 100;
    };
    ClothingItems.prototype.getbosspurchase = function () {
        return this.prezzoivainclusa - this.getbosssale();
    };
    return ClothingItems;
}());
var apiUrl = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
function fetchData() {
    fetch(apiUrl)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var clothingItems = data.map(function (itemData) { return new ClothingItems(itemData); });
        for (var _i = 0, clothingItems_1 = clothingItems; _i < clothingItems_1.length; _i++) {
            var item = clothingItems_1[_i];
            console.log("Item Id: ".concat(item.id));
            console.log("Sale Balance: ".concat(item.getbosssale()));
            console.log("Purchase Balance: ".concat(item.getbosspurchase()));
            console.log('-------------------------------------------------------');
        }
    })
        .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}
fetchData();
