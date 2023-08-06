type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {         //? indicates that its optional
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    query?: {             //it is optional because we arent gaurenteed to get a result from wikipedia api
        pages?: Result[],
    },
}