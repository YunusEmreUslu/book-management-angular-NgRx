import { AddBook, RemoveBook } from './book.actions';
import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
   initialState,
   on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
   on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);


/* Why is a reducer called a reducer?

The reducer takes an action and the current state and reduces them to one new state.

action + current state = new state

*/