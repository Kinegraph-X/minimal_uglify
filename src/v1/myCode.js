/**
 * CoreTypes
 */

/**
 * @typedef {import('src/GameTypes/sprites/Sprite')} Sprite
 * @typedef {import('src/GameTypes/tweens/Tween')} Tween
 * @typedef {import('src/GameTypes/collisionTests/mainSpaceShipCollisionTester')} mainSpaceShipCollisionTester
 * @typedef {import('src/GameTypes/collisionTests/fireBallCollisionTester')} fireBallCollisionTester
 */


/**
 * @constructor Coord
 * @param {Number} value
 */
const Coord = function(value) {
	this.value = value;
}

/**
 * @type {{
 * [key:String] : (val:Number) => Number
 * }} Operations
 */
const Operations = {
	add : function(val) {
		// @ts-ignore
		return this.value + val;
	},
	mult : function(val) {
		// @ts-ignore
		return this.value * val;
	},
	div : function(val) {
		// @ts-ignore
		return this.value / val;
	}
}

for (var op in Operations) {
	Coord.prototype[op] = Operations[op];
}




/**
 * @constructor Point
 * @param {Number} x
 * @param {Number} y
 */
const Point = function(x, y) {
	this.x = new Coord(x || 0);
	this.y = new Coord(y || 0);
}

/**
 * @constructor Dimension
 * @param {Number} x
 * @param {Number} y
 */
const Dimension = function(x, y) {
	this.x = new Coord(x || 0);
	this.y = new Coord(y || 0);
}


/**
 * @constructor Transform
 * @param {Number} x
 * @param {Number} y
 */
const Transform = function(x, y) {
	Point.call(this, x, y);
}

/**
 * @constructor StepDuration
 * @param {Number} x
 * @param {Number} y
 */
const StepDuration = function(x, y) {
	this.x = x || 1;						// ms
	this.y = y || 1;						// ms
}





const TweenTypes = {
	add : 'add',
	mult : 'mult',
	div : 'div'
}



const typeNames = {
	BlastSprite : 'BlastSprite',
	BossSpaceShip : 'BossSpaceShip',
	ExplosionSprite : 'ExplosionSprite',
	FoeSpaceShip : 'FoeSpaceShip',
	GameTitleSprite : 'GameTitleSprite',
	LootSprite : 'LootSprite',
	MainSpaceShip : 'MainSpaceShip',
	Projectile : 'Projectile',
	Sprite : 'Sprite',
	StatusBarSprite : 'StatusBarSprite',
	TilingSprite : 'TilingSprite'
};



/**
 * @namespace CoreTypes
 */
/**
 * @typedef {Array<Sprite>} CoreTypes.fireballsRegister
 * @typedef {Array<Tween>} CoreTypes.fireballsTweensRegister
 * @typedef {Array<Sprite>} CoreTypes.disposableSpritesRegister
 * @typedef {Array<Tween>} CoreTypes.disposableTweensRegister
 * @typedef {Array<mainSpaceShipCollisionTester|fireBallCollisionTester>} CoreTypes.tempAsyncCollisionsTests
 * 
 * @typedef {Coord} CoreTypes.Coord
 * @typedef {Point} CoreTypes.Point
 * @typedef {Dimension} CoreTypes.Dimension
 * @typedef {Transform} CoreTypes.Transform
 * @typedef {StepDuration} CoreTypes.StepDuration
 * @typedef {Object} CoreTypes.TweenTypes
 * @typedef {Set<Number>} CoreTypes.clearedCollisionTests 
 */
const CoreTypes = {
	typeNames : typeNames,
	Coord : Coord,
	Point : Point,
	Dimension : Dimension,
	Transform : Transform,
	StepDuration : StepDuration,
	TweenTypes : TweenTypes,
	fireballsRegister : new Array(),
	fireballsTweensRegister : new Array(),
	disposableSpritesRegister : new Array(),
	disposableTweensRegister : new Array(),
	tempAsyncCollisionsTests : new Array(),
	clearedCollisionTests : new Set()				
};




module.exports = CoreTypes;