import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import initFirebase from '@components/config';

initFirebase();
const auth = firebase.auth();

const withAuth = Component => {
    const displayName = Component.displayName || Component.name || 'Component';
    const WrappedComponent = props => {
      useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          if (!authUser) {
            router.push('/signin');
          }
        });
      }, []);
  
      return (
        <div>
          <Component {...props} />
        </div>
      );
    };
  
    WrappedComponent.displayName = `withAuth(${displayName})`;
    return WrappedComponent;
  };


export default withAuth;
