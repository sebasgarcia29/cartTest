import type { PageName } from './PageName';

export type Params = {
  goBack: any;
  navigate: any;
  push: any;
  [PageName.HomeScreen]: undefined;
  [PageName.ProfileScreen]: undefined;
  [PageName.ScannerScreen]: undefined;
};

// Add Params to React Navigation namespace to be able to get it from anywhere
declare global {
  namespace ReactNavigation {
    interface RootParamList extends Params {}
  }
}
