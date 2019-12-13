import { schema } from 'normalizr';


export const posts = new schema.Entity('posts', {}, {
    idAttribute: value => `${value.id}`
});
export const postsSchema = [posts]

