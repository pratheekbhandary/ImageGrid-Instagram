import Axios from "axios";

import Images from '../data';
import { getCache, setCacheItem, removeCacheItem } from './cacheUtils';
const IMG_URL = `http://starlord.hackerearth.com/insta`;

/*
    I am caching User uploaded images ONLY!
    Refresh will cause the images to be fetched from server.
    And user uplaoded images will be retrived from Cache.
*/

const getImages = () =>{
/* This function is written because the API provided does not have CORS in response Headers
Aim here is to replicate a service call */
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Images);
        },1000);
    });
}
export default class UserImages {
    static counter = 0;
    constructor(imagesArr) {
        // Creating a singleton instanc of this class
        if(!UserImages.instance){
            this.images = imagesArr;
            UserImages.instance = this;
        }
        return UserImages.instance;
    }

    static async getUserImages() {
        try {
            //const imageArray = await Axios.get(IMG_URL);
            const imageArray = await getImages();
            if(imageArray) {
                const updatedImageArr = imageArray.map(ele => {
                    ele['id'] = this.count++;
                    if(ele.timestamp) {
                        ele.timestamp = (new Date(ele)).toLocaleString();
                    }
                    return ele;
                });
                const imagesFromCache = getCache();
                if(imagesFromCache && imagesFromCache.length>0 ){
                    updatedImageArr.concat(imagesFromCache);
                }
                return updatedImageArr;
            } 
            return imageArray;
        } catch (err) {
            console.err(err);
        }
    }

    addImage(url) {
        const image = this.createImage(url);
        this.imageArray.push(image);
        setCacheItem(image);
    }

    removeImage(id) {
        this.images = this.images.filter(ele => ele.id === id);
        removeCacheItem(id);
    }

    createImage(url) {
        return {
            "Image" : url,
            "likes" : 0,
            "timestamp" : new Date().toLocaleString(),
            "id" : UserImages.counter++,
        }
    }
}