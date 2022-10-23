var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Card = /** @class */ (function () {
    function Card(name, id) {
        this.id = id;
        this.name = name;
    }
    Card.prototype.play = function () {
    };
    Card.prototype.discard = function () {
    };
    Card.prototype.destroy = function () {
    };
    return Card;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var Nemesis = /** @class */ (function (_super) {
    __extends(Nemesis, _super);
    function Nemesis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Nemesis;
}(Player));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage;
}(Player));
var SupplyCard = /** @class */ (function (_super) {
    __extends(SupplyCard, _super);
    function SupplyCard(name, id, cost) {
        var _this = _super.call(this, name, id) || this;
        _this.cost = cost;
        return _this;
    }
    return SupplyCard;
}(Card));
var Gem = /** @class */ (function (_super) {
    __extends(Gem, _super);
    function Gem(name, id, cost, value) {
        var _this = _super.call(this, name, id, cost) || this;
        _this.value = value;
        return _this;
    }
    return Gem;
}(SupplyCard));
var Spell = /** @class */ (function (_super) {
    __extends(Spell, _super);
    function Spell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Spell;
}(SupplyCard));
var Relic = /** @class */ (function (_super) {
    __extends(Relic, _super);
    function Relic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Relic;
}(SupplyCard));
var Deck = /** @class */ (function () {
    function Deck() {
    }
    return Deck;
}());
var jade = new Gem('Jade', 'AE076', 2, 2);
var supplyDeck1 = new Array(6);
console.log(supplyDeck1);
