export interface IApp {
    isAuthorizationRequired: boolean,
    isAuthorized: boolean,
    userData: userData
    onSignInClick: () => void
}

export interface ICatalog {
    currentGenre: string,
    films: filmData[],
    genres: string[],
    onGenreChange: (genre: string) => void
}

export interface IGenresList {
    currentGenre: string,
    genres: string[],
    onGenreChange: (genre: string) => void
}

export interface IMovieList {
    films: filmData[],
    activeCard: number,
    onMouseOver: (evt, id: number) => void,
    onMouseLeave: () => void
}

export interface IMovieCard {
    name: string,
    poster: string,
    trailer: string,
    id: number,
    isPlaying: boolean,
    onMouseOver: (evt, id: number) => void,
    onMouseLeave: () => void
}

export interface IVideoPlayer {
    trailer: string,
    poster: string,
    isPlaying: boolean
}

export interface ISignIn {
    authorizeUser: (email: string, password: string) => void
}

export interface ISignInState {
    email: null | string,
    password: null | string,
    isValidEmail: boolean,
    isValidPassword: boolean
}

export interface IWithPrivateRoute {
    isAuthorizationRequired: boolean
}

export interface IWithActiveCard {
    activeCard: number
}

export interface IWithActiveCardState {
    activeCard: number
}

interface userData {
    id: number,
    email: string,
    name: string,
    avatarUrl: string
}

interface filmData {
    name: string,
    poster: string,
    id: number,
    genre: string,
    preview_image: string,
    preview_video_link: string
}
