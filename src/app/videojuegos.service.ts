import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class VideojuegosService {

	constructor() { }
	
	let videogames: { title: string, description: string, releaseDate: string, image: string, rating: number, downloads: number, comingSoon: boolean }[] = [
		{ "title": "Minecraft", "description": "Es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, y posteriormente desarrollado por Mojang Studios.", "releaseDate": "18/noviembre/2011", "image": "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft", "rating": 3, "downloads": 300, "comingSoon": true },
		{ "title": "Fortnite", "description": "Es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas.", "releaseDate": "25/junio/2017", "image": "https://cdn2.unrealengine.com/key-art-1920x1080-3251a6ec218c.jpg", "rating": 2, "downloads": 50, "comingSoon": true },
		{ "title": "Mario Bros.", "description": "Es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Advance y otros juegos.", "releaseDate": "14/julio/1983", "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg", "rating": 5, "downloads": 150, "comingSoon": false },
		{ "title": "Tetris", "description": "Es un videojuego de lógica originalmente diseñado y programado por Alekséi Pázhitnov en la Unión Soviética. Fue lanzado el 6 de junio de 1984, mientras trabajaba para el Centro de Computación Dorodnitsyn de la Academia de Ciencias de la Unión Soviética en Moscú, RSFS de Rusia.", "releaseDate": "6/junio/1984", "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Tetris99.jpg", "rating": 4, "downloads": 500, "comingSoon": false },
		{ "title": "Among Us", "description": "Es un videojuego de género party y multijugador en línea desarrollado por la compañía estadounidense Innersloth y distribuido entre junio y noviembre de 2018 para las plataformas Android, iOS y Windows.", "releaseDate": "15/junio/2018", "image": "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec", "rating": 2, "downloads": 250, "comingSoon": true },
	];

	constructor() { }

	addUser() {
		users.push();
	}

	getPopular() {
		let popularGames: { title: string, description: string, releaseDate: string, image: string, rating: number, downloads: number, comingSoon: boolean }[] = [];
		for (var videogame of videogames) {
			if (videogame.rating > 4) {
				popularGames.push(videogame);		
			}
		} 
		return popularGames;
	}

	getDownloaded() {
		let downloadedGames: { title: string, description: string, releaseDate: string, image: string, rating: number, downloads: number, comingSoon: boolean }[] = [];
		for (var videogame of videogames) {
			if (videogame.downloads > 100) {
				downloadedGames.push(videogame);		
			}
		} 
		return downloadedGames;
	}

	getComingSoon() {
		let comingSoonGames: { title: string, description: string, releaseDate: string, image: string, rating: number, downloads: number, comingSoon: boolean }[] = [];
		for (var videogame of videogames) {
			if (videogame.comingSoon) {
				comingSoonGames.push(videogame);		
			}
		} 
		return comingSoonGames;
	}
}
