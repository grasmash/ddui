// @flow
// import type { appLocationType } from '../reducers/registrar';

export const REGISTERED_APPS = 'REGISTERED_APPS';

export function register() {
  return {
    type: REGISTERED_APPS
  };
}
