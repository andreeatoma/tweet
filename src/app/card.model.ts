/**
 * Provides a `Card` object
 */
export class Card {
  constructor(
  	public id : string,
  	public name: string,
  	public nameapp: string,
    public hourspost: string,
    public description: string,
    public link: string,
    public imageUrl: string) {
  }
}
