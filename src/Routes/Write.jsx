import React from 'react'
import { Route, Switch } from "react-router-dom";
import ImportStory from '../Components/ImportStory';
import Stories from "../Components/Stories";
import WriteStory from "../Components/WriteStory";
import Publish from '../Components/Publish';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/stories"><Stories/></Route>
                <Route exact path="/writestory"><WriteStory /></Route>
                <Route exact path="/importstory"><ImportStory /></Route>
                <Route exact path ="/publish"><Publish /></Route>
            </Switch>
        </div>
    )
}

export default Routes
