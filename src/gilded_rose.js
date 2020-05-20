class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    if (this.quality <= 0 || this.quality >= 50) return false;
    console.log("dans le normal");
    this.sellIn -= 1;
    this.sellIn <= 0 ? (this.quality -= 2) : (this.quality -= 1);
  }
}

class AgedBrie {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn -= 1;
    if (this.quality <= 0 || this.quality >= 50) return false;
  }
}

class Sulfuras {
  constructor(name, quality = 80) {
    this.name = name;
    this.quality = quality;
  }
  updateQuality() {
    if (this.quality <= 0) return false;
  }
}

class BackstagePasses {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.quality = quality;
    this.sellIn = sellIn;
  }
  updateQuality() {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn -= 1;
    if (this.quality <= 0 || this.quality >= 50) return false;
  }
}

class Conjured {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.sellIn -= 1;
    this.sellIn <= 0 ? (this.quality -= 4) : (this.quality -= 2);
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateShopQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
      console.log("dans la boucle", this.items[i]);
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
  AgedBrie,
  Conjured,
  BackstagePasses,
  Sulfuras,
};

const itemlambda = new Item("Courgette", 20, -5);
const brie = new AgedBrie("brie", 20, -10);

console.log(itemlambda);
console.log(brie);

// brie.updateQuality();
// itemlambda.updateQuality();

// console.log(itemlambda);
// console.log(brie);

let listItems = [];
listItems.push(itemlambda);
listItems.push(brie);

console.log(listItems);

const shopi = new Shop(listItems);
shopi.updateShopQuality();
console.log(itemlambda);
console.log(brie);
