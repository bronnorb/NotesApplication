import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { HomePage, AddNotePage, EditNotePage } from '../pages/index';

export function Router(props){

    
    return(
        <Switch>
            <Route exact path='/' >
                <HomePage notes={props.notes} setNotes={props.setNotes}/>
            </Route>
            <Route path='/AddNote' component={AddNotePage} />
            <Route path ='/EditNote/:noteId' component={EditNotePage} />
            <Route>
                <div>
                    404
                </div>
            </Route>
        </Switch>
    );
}