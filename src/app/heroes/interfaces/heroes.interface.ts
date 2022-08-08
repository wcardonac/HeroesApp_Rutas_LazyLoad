export interface Heroe {
    id?:               string;
    superhero?:        string;
    publisher?:        Publisher;
    alter_ego?:        string;
    first_appearance?: string;
    characters?:       string;
    alt_img?:         string; //aqui vamosa cargar las imagenes
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
