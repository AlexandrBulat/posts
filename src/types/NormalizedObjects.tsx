export interface NormalizedObjects<T> {
    byIds: { [id: string]: T };
    ids: string[];
}