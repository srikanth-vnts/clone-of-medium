import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {HomeSignin} from '../Components/HomeLoggedIn/HomeSignin'
import {OurStoryPage} from "./OurStory"
import {MembershipPage} from "./Membership"


function Routes() {
    return (
      <>
        <Switch>
         
          <Route path="/home" exact>
            <HomeSignin />
          </Route>
          <Route path="/ourstory" exact>
            <OurStoryPage />
          </Route>
          <Route path="/membership" exact>
            <MembershipPage/>
          </Route>
          <Route>
           <div>Error Page Not found
           </div>
          </Route>
        </Switch>
      </>
    );
  }
  
  export { Routes };