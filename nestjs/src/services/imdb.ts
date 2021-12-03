export class IMDBResponse {
    searchType:   string;
    expression:   string;
    results:      IMDBMovie[];
    errorMessage: string;
}

export class IMDBMovie {
    id:          string;
    resultType:  string;
    image:       string;
    title:       string;
    description: string;
}
