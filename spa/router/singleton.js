export default class Singleton
{
	constructor(cnf = null)
	{
		if (!Singleton._instance) {
			Singleton._instance = this
		}

		this.cnf = cnf

		return Singleton._instance
	}

	static getInstance()
	{
		return this._instance
	}
}

/*
import Singleton from '/router/singleton.js'

let si1 = new Singleton();
let si2 = Singleton.getInstance();
console.log('Singleton? ', si1 === si2 );
*/