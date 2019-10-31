/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/Login';
import Loginfb from './components/Loginfb';

import SanPham from './components/SanPham';
import ThemSamPham from './components/ThemSanPham';

import FetchExample from './components/FetchExample';
import DangKy from './components/DangKy';
import Es6 from './components/Es6';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FetchExample);
