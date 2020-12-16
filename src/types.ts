export type Primitive =
    | string
    | number
    | boolean
    | bigint;
export type Word = Primitive;
export type Sentence = Word[];
export type Text = Sentence[];
