var {
  Shop,
  Item,
  Sulfuras,
  AgedBrie,
  BackstagePasses,
  Conjured,
} = require("../src/gilded_rose.js");
describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //Conjured Dark Blade", "Conjured Magic Stick"
  it("Se dégradent 2 fois plus vite que la normal un fos la date de peremption passee", function () {
    listItems.push(new Item("Itemus", -3, 20));
    listItems.push(new Item("Itimitius", -5, 19));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: -4, quality: 18 },
      { sellIn: -6, quality: 17 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new AgedBrie("Aged Brie", 20, 30));
    listItems.push(
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 20, 30)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 3 pour Aged Brie et Backstage passes si J-5", function () {
    listItems.push(new AgedBrie("Aged Brie", 4, 10));
    listItems.push(
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 4, 12)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: 3, quality: 13 },
      { sellIn: 3, quality: 15 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 2 pour Aged Brie et Backstage passes si J-10", function () {
    listItems.push(new AgedBrie("Aged Brie", 7, 19));
    listItems.push(
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 8, 14)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: 6, quality: 21 },
      { sellIn: 7, quality: 16 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Conserve la qualité car Sulfuras est un objet légendaire", function () {
    listItems.push(new Sulfuras("Sulfuratos"));
    listItems.push(new Sulfuras("Sulfutus"));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [{ quality: 80 }, { quality: 80 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //Conjured Dark Blade", "Conjured Magic Stick"
  it("Se dégradent 2 fois plus vite car appartiennent à la cat Conjured", function () {
    listItems.push(new Conjured("Conjured Dark Blade", 15, 30));
    listItems.push(new Conjured("Conjured Magic Stick", 18, 45));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: 14, quality: 28 },
      { sellIn: 17, quality: 43 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //Conjured Dark Blade", "Conjured Magic Stick"
  it("Se dégradent 2 fois plus vite que la normal car appartiennent à la cat Conjured et la date de peremption est passee", function () {
    listItems.push(new Conjured("Conjured Dark Blade", -3, 50));
    listItems.push(new Conjured("Conjured Magic Stick", -5, 45));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateShopQuality();

    var expected = [
      { sellIn: -4, quality: 46 },
      { sellIn: -6, quality: 41 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});
