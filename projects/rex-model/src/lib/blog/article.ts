export interface Thematic {
    code: string;
    sub: Subject;
}

export interface Subject {
    code: string;
    articles: Article[];
}

export interface Article {
    code: string;
    title: string;
    raw: string;
    headings: string;      
}

export interface BlogArticle {
    code: string;
    title: string;
    content: string;
    template?: string;  
    tags: string[];    
}

export declare type Thematics = Thematic[];
export declare type Subjects = Subject[];
export declare type Articles = Article[];