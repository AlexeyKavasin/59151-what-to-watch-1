export interface IApp {
    isAuthorizationRequired: boolean,
    isAuthorized: boolean,
    userData: null | userData,
    isFullWidthPlayerActive: boolean,
    films: filmData,
    filmOnTheMainPage: filmData,
    toggleFullWidthPlayer: () => void,
    onSignInClick: () => void,
    onFavoritesChange: (film: filmData) => void
}

export interface IFullWidthPlayer {
    videoSrc: string,
    poster: string,
    runTime: number,
    filmName: string,
    toggleFullWidthPlayer: () => void
}

export interface IFullWidthPlayerState {
    isPlaying: boolean,
    secondsPassed: number,
    percentsPassed: number,
    videoEnded: boolean
}

export interface IWithActiveFullWidthPlayer {
    isFullWidthPlayerActive: boolean
    toggleFullPlayer: () => void,

}

export interface IWithActiveFullWidthPlayerState {
    isFullWidthPlayerActive: boolean
}

export interface ICatalog {
    currentGenre: string,
    films: filmData[],
    filmsToShow: number,
    filmsLength: number,
    genres: string[],
    onGenreChange: (genre: string) => void,
    onShowMoreClick: (filmsAmount: number) => void
}

export interface IGenresList {
    currentGenre: string,
    genres: string[],
    onGenreChange: (genre: string) => void
}

export interface IMovieList {
    films: filmData[],
    activeCard: number,
    filmsToShow: number,
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

export interface IShowMoreButton {
    filmsToShow: number,
    filmsLength: number,
    onShowMoreClick: (filmsAmount: number) => void
}


export interface IShowMoreButtonState {
    filmsShown: number
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

export interface IMoviePageDetails {
    films: filmData[],
    onFavoritesChange: (film: filmData) => void
}

export interface ITabs {
    film: filmData,
    comments: commentData[]
}

export interface ITab {
    tabId: number,
    activeTab: number,
    onTabClick: (evt, id: number) => void
}

export interface ITabContent {
    tabId: number,
    activeTab: number
}

export interface ITabsState {
    activeTab: number
}

export interface userData {
    id: number,
    email: string,
    name: string,
    avatar_url: string
}

export interface filmData {
    name: string,
    poster: string,
    poster_image: string,
    id: number,
    genre: string,
    preview_image: string,
    preview_video_link: string,
    released: number,
    background_image: string,
    starring: string[],
    director: string,
    scores_count: number,
    rating: number,
    description: string,
    run_time: number,
    video_link: string,
    background_color?: string,
    is_favorite?: boolean
}

export interface commentData {
    comment: string,
    date: string,
    id: number,
    rating: number,
    user: {
        id: number,
        name: string
    }
}

export interface IAddReview {
    films: filmData[]
}

export interface IAddReviewState {
    comment: string,
    rating: number
}

export interface IHeader {
    film: filmData,
    isFullWidth: boolean,
    isAuthorized: boolean,
    userData: null | userData,
    onSignInClick: () => void,
    onFavoritesChange: (film: filmData) => void,
    toggleFullWidthPlayer: () => void
}
