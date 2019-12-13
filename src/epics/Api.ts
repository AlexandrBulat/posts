import { Observable } from "rxjs";
import { from ,ma } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax';
import {
    NormalizedObjects,
    Posts
} from "../types";
import {
    postsSchema
} from "./schema";

import {
    map
} from 'rxjs/operators'

import { normalize } from 'normalizr'
export default class Api {

    static  getPosts= () => {
        return Api.request('https://jsonplaceholder.typicode.com/posts', 'GET').pipe(
            map((response:any) => {
                const posts = response.response || [];
                const normalizedPosts = normalize(posts, postsSchema)
                return {
                    byIds: normalizedPosts.entities.posts || [],
                    ids: normalizedPosts.result
                }
            })
        )
    }

    static request = (url: string, method: string, token?: string, body?: any, inHeaders = {}) => {
        let outHeaders = {
            'Content-Type': 'application/json',
            ...inHeaders,
        }
        if (token) {
            outHeaders = {
                ...outHeaders, 'Authorization': `Bearer ${token}`
            }
        }
        return ajax({
            url: url,
            method: method,
            headers: outHeaders,
            body: body,
            responseType: 'json',
            async: true
        })
    }
}