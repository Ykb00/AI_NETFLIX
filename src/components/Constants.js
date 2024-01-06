export const LOGO = ' https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp';

export const BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const API_OPTIONS  = {
    method: 'GET',
    headers : {
        accept: "application/json",
        Authorization: 
         "Bearer "+ process.env.REACT_APP_TMDB_KEY
    }

}

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500/'

export const SUPPORTED_LANGUAGES = [{identifier: 'en', name: 'English'},{identifier: 'hindi', name: 'Hindi'},{identifier: 'spanish', name: 'Spanish'},{identifier: 'german', name: "German"},{identifier: "french", name: "French"}]

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY