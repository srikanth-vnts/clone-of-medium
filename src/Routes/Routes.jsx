import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeSignin } from "../Components/HomeLoggedIn/HomeSignin";
import { OurStoryPage } from "./OurStory";
import { MembershipPage } from "./Membership";
import WriteStoryPage from "./Write";
import ImportStory from "../Components/Write/Stories/ImportStory/ImportStory";
import Publish from "../Components/Write/Stories/Publish/Publish";
import { SignNav } from "../Components/HomeLoggedIn/SignNav";
import Story from "../Components/Write/Stories/Stories";
import {Home} from "../Components/Home/page/Home"
import { Write } from "../Components/HomeWrite/Write";
import {NavBar} from "../Components/Membership/NavBar"

//import {NavBar} from "../Components/Home/navbar"
function Routes() {
  return (
    <>
      <Switch>
      <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/writehome" exact>
        <NavBar value="rgb(241,77,46)" />
          <Write />
        </Route>
        <Route path="/home" exact>
          <HomeSignin />
        </Route>
        <Route path="/ourstory" exact>
          <NavBar />
          <OurStoryPage />
        </Route>
        <Route path="/membership" exact>
          <SignNav />
          <MembershipPage />
        </Route>
        <Route path="/write" exact>
          <SignNav />
          <WriteStoryPage />
        </Route>
        <Route path="/importstory">
          <SignNav />
          <ImportStory />
        </Route>
        <Route path="/story">
          <SignNav />
          <Story />
        </Route>
        <Route path="/publish">
          <SignNav />
          <Publish />
        </Route>
        <Route>
          <div>Error Page Not found</div>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
